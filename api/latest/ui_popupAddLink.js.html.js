tui.util.defineNamespace("fedoc.content", {});
fedoc.content["ui_popupAddLink.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements PopupAddLink\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar LayerPopup = require('./layerpopup');\n\nvar util = tui.util;\n\n/* eslint-disable indent */\nvar POPUP_CONTENT = [\n    '&lt;label for=\"linkText\">링크에 표시할 내용&lt;/label>',\n    '&lt;input type=\"text\" class=\"te-link-text-input\" />',\n    '&lt;label for=\"url\">URL&lt;/label>',\n    '&lt;input type=\"text\" class=\"te-url-input\" />',\n    '&lt;div class=\"te-button-section\">',\n        '&lt;button type=\"button\" class=\"te-ok-button\">확인&lt;/button>',\n        '&lt;button type=\"button\" class=\"te-close-button\">취소&lt;/button>',\n    '&lt;/div>'\n].join('');\n/* eslint-enable indent */\n\n/**\n * PopupAddLink\n * It implements a link Add Popup\n * @exports PopupAddLink\n * @augments LayerPopup\n * @constructor\n * @class\n * @param {object} options options\n */\nfunction PopupAddLink(options) {\n    options = util.extend({\n        title: '링크 추가',\n        className: 'te-popup-add-link tui-editor-popup',\n        content: POPUP_CONTENT\n    }, options);\n\n    LayerPopup.call(this, options);\n\n    this.render();\n    this._bindContentEvent();\n    this._linkWithEventManager(options.eventManager);\n}\n\nPopupAddLink.prototype = util.extend(\n    {},\n    LayerPopup.prototype\n);\n\nPopupAddLink.prototype._bindContentEvent = function() {\n    var self = this;\n\n    this.on('click .te-ok-button', function() {\n        self.trigger('okButtonClicked', self);\n        self.hide();\n    });\n\n    this.on('click .te-close-button', function() {\n        self.trigger('closeButtonClicked', self);\n        self.hide();\n    });\n\n    this.on('shown', function() {\n        self.$el.find('.te-link-text-input').focus();\n    });\n\n    this.on('hidden', function() {\n        self.resetInputs();\n    });\n};\n\nPopupAddLink.prototype._linkWithEventManager = function(eventManager) {\n    var self = this;\n\n    eventManager.listen('focus', function() {\n        self.hide();\n    });\n\n    eventManager.listen('openPopupAddLink', function() {\n        eventManager.emit('closeAllPopup');\n        self.show();\n    });\n\n    eventManager.listen('closeAllPopup', function() {\n        self.hide();\n    });\n\n    this.on('okButtonClicked', function() {\n        eventManager.emit('command', 'AddLink', self.getValue());\n    });\n};\n\nPopupAddLink.prototype.getValue = function() {\n    return {\n        linkText: this.$el.find('.te-link-text-input').val(),\n        url: this.$el.find('.te-url-input').val().replace(/\\(/g, '%28').replace(/\\)/g, '%29')\n    };\n};\n\nPopupAddLink.prototype.resetInputs = function() {\n    this.$el.find('input').val('');\n};\n\nmodule.exports = PopupAddLink;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"