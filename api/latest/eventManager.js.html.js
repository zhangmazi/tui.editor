tui.util.defineNamespace("fedoc.content", {});
fedoc.content["eventManager.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements EventManager\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar util = tui.util;\n\nvar eventList = [\n    'previewBeforeHook',\n    'previewRenderAfter',\n    'addImageBlobHook',\n    'setValueAfter',\n    'contentChangedFromWysiwyg',\n    'changeFromWysiwyg',\n    'contentChangedFromMarkdown',\n    'changeFromMarkdown',\n    'change',\n    'changeModeToWysiwyg',\n    'changeModeToMarkdown',\n    'changeMode',\n    'changePreviewStyle',\n    'openPopupAddLink',\n    'openPopupAddImage',\n    'openPopupAddTable',\n    'openPopupTableUtils',\n    'openHeadingSelect',\n    'closeAllPopup',\n    'command',\n    'htmlUpdate',\n    'markdownUpdate',\n    'renderedHtmlUpdated',\n    'removeEditor',\n    'convertorAfterMarkdownToHtmlConverted',\n    'convertorAfterHtmlToMarkdownConverted',\n    'stateChange',\n    'wysiwygSetValueAfter',\n    'wysiwygSetValueBefore',\n    'wysiwygGetValueBefore',\n    'wysiwygProcessHTMLText',\n    'wysiwygRangeChangeAfter',\n    'wysiwygKeyEvent',\n    'scroll',\n    'click',\n    'mousedown',\n    'mouseup',\n    'contextmenu',\n    'keydown',\n    'keyup',\n    'keyMap',\n    'load',\n    'focus',\n    'blur',\n    'paste',\n    'copy',\n    'drop',\n    'show',\n    'hide'\n];\n\n/**\n * EventManager\n * @exports EventManager\n * @constructor\n * @class EventManager\n */\nfunction EventManager() {\n    this.events = new util.Map();\n    this.TYPE = new util.Enum(eventList);\n}\n\n/**\n * Listen event and bind event handler\n * @api\n * @memberOf EventManager\n * @param {string} typeStr Event type string\n * @param {function} handler Event handler\n */\nEventManager.prototype.listen = function(typeStr, handler) {\n    var eventHandlers,\n        typeInfo = this._getTypeInfo(typeStr);\n\n    if (!this._hasEventType(typeInfo.type)) {\n        throw new Error('There is no event type ' + typeInfo.type);\n    }\n\n    eventHandlers = this.events.get(typeInfo.type) || [];\n\n    if (typeInfo.namespace) {\n        handler.namespace = typeInfo.namespace;\n    }\n\n    eventHandlers.push(handler);\n\n    this.events.set(typeInfo.type, eventHandlers);\n};\n\n/**\n * Emit event\n * @api\n * @memberOf EventManager\n * @param {string} eventName Event name to emit\n * @returns {Array}\n */\nEventManager.prototype.emit = function() {\n    var args = util.toArray(arguments),\n        typeStr = args.shift(),\n        typeInfo = this._getTypeInfo(typeStr),\n        eventHandlers = this.events.get(typeInfo.type),\n        result,\n        results;\n\n    if (eventHandlers) {\n        util.forEach(eventHandlers, function(handler) {\n            result = handler.apply(null, args);\n\n            if (!util.isUndefined(result)) {\n                results = results || [];\n                results.push(result);\n            }\n        });\n    }\n\n    return results;\n};\n\n/**\n * Emit given event and return result\n * @api\n * @memberOf EventManager\n * @param {string} eventName Event name to emit\n * @param {string} sourceText Source text to change\n * @returns {string}\n */\nEventManager.prototype.emitReduce = function() {\n    var args = util.toArray(arguments),\n        type = args.shift(),\n        eventHandlers = this.events.get(type);\n\n    if (eventHandlers) {\n        util.forEach(eventHandlers, function(handler) {\n            var result = handler.apply(null, args);\n\n            if (!util.isFalsy(result)) {\n                args[0] = result;\n            }\n        });\n    }\n\n    return args[0];\n};\n\n/**\n * Get event type and namespace\n * @memberOf EventManager\n * @param {string} typeStr Event type name\n * @returns {{type: string, namespace: string}}\n * @private\n */\nEventManager.prototype._getTypeInfo = function(typeStr) {\n    var splited = typeStr.split('.');\n\n    return {\n        type: splited[0],\n        namespace: splited[1]\n    };\n};\n\n/**\n * Check whether event type exists or not\n * @param {string} type Event type name\n * @returns {boolean}\n * @private\n */\nEventManager.prototype._hasEventType = function(type) {\n    return !util.isUndefined(this.TYPE[type.split('.')[0]]);\n};\n\n/**\n * Add event type when given event not exists\n * @api\n * @memberOf EventManager\n * @param {string} type Event type name\n */\nEventManager.prototype.addEventType = function(type) {\n    if (this._hasEventType(type)) {\n        throw new Error('There is already have event type ' + type);\n    }\n\n    this.TYPE.set(type);\n};\n\n/**\n * Remove event handler from given event type\n * @api\n * @memberOf EventManager\n * @param {string} type Event type name\n */\nEventManager.prototype.removeEventHandler = function(type) {\n    var self = this,\n        typeInfo = this._getTypeInfo(type),\n        namespace = typeInfo.namespace;\n\n    type = typeInfo.type;\n\n    if (type &amp;&amp; !namespace) {\n        //dont use dot notation cuz eslint\n        this.events['delete'](type);\n    } else if (!type &amp;&amp; namespace) {\n        this.events.forEach(function(eventHandlers, eventType) {\n            self._removeEventHandlerWithTypeInfo(eventType, namespace);\n        });\n    } else if (type &amp;&amp; namespace) {\n        self._removeEventHandlerWithTypeInfo(type, namespace);\n    }\n};\n\n/**\n * Remove event handler with event type information\n * @memberOf EventManager\n * @param {string} type Event type name\n * @param {string} namespace Event namespace\n * @private\n */\nEventManager.prototype._removeEventHandlerWithTypeInfo = function(type, namespace) {\n    var handlersToSurvive = [],\n        eventHandlers;\n\n    eventHandlers = this.events.get(type);\n\n    util.forEach(eventHandlers, function(handler) {\n        if (handler.namespace !== namespace) {\n            handlersToSurvive.push(handler);\n        }\n    });\n\n    //\n    this.events.set(type, handlersToSurvive);\n};\n\nmodule.exports = EventManager;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"