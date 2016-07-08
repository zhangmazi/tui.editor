tui.util.defineNamespace("fedoc.content", {});
fedoc.content["ui_modeSwitch.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar UIController = require('./uicontroller');\n\nvar util = tui.util;\n\nvar TYPE = {\n    MARKDOWN: 'markdown',\n    WYSIWYG: 'wysiwyg'\n};\n\n\n/**\n * ModeSwitch\n * UI Control for switch between Markdown and WYSIWYG\n * @exports ModeSwitch\n * @augments UIController\n * @constructor\n * @class\n * @param {number} initialType initial type of editor\n */\nfunction ModeSwitch(initialType) {\n    UIController.call(this, {\n        tagName: 'div',\n        className: 'te-mode-switch'\n    });\n\n    this._render();\n    this._switchType(util.isExisty(initialType) ? initialType : TYPE.MARKDOWN);\n}\n\nModeSwitch.prototype = util.extend(\n    {},\n    UIController.prototype\n);\n\nModeSwitch.prototype._render = function() {\n    this.$buttons = {};\n    this.$buttons.markdown = $('&lt;button class=\"te-switch-button markdown\" type=\"button\">Markdown&lt;/button>');\n    this.$buttons.wysiwyg = $('&lt;button class=\"te-switch-button wysiwyg\" type=\"button\">WYSIWYG&lt;/button>');\n    this.$el.append(this.$buttons.markdown);\n    this.$el.append(this.$buttons.wysiwyg);\n\n    this.attachEvents({\n        'click .markdown': '_changeMarkdown',\n        'click .wysiwyg': '_changeWysiwyg'\n    });\n};\n\nModeSwitch.prototype._changeMarkdown = function() {\n    this._switchType(TYPE.MARKDOWN);\n};\n\nModeSwitch.prototype._changeWysiwyg = function() {\n    this._switchType(TYPE.WYSIWYG);\n};\n\nModeSwitch.prototype._setActiveButton = function(type) {\n    util.forEach(this.$buttons, function($button) {\n        $button.removeClass('active');\n    });\n    this.$buttons[type].addClass('active');\n};\n\n\nModeSwitch.prototype._switchType = function(type) {\n    if (this.type === type) {\n        return;\n    }\n\n    this.type = type;\n    this._setActiveButton(type);\n    this.trigger('modeSwitched', this.type);\n};\n\nModeSwitch.TYPE = TYPE;\n\nmodule.exports = ModeSwitch;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"