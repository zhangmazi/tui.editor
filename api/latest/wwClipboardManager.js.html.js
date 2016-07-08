tui.util.defineNamespace("fedoc.content", {});
fedoc.content["wwClipboardManager.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements wysiwyg editor clipboard manager\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar domUtils = require('./domUtils');\nvar WwPasteContentHelper = require('./wwPasteContentHelper');\nvar util = tui.util;\n\nvar isMSBrowser = util.browser.msie || /Edge\\//.test(navigator.userAgent);\n\n\n/**\n * WwClipboardManager\n * @exports WwClipboardManager\n * @constructor\n * @class WwClipboardManager\n * @param {WysiwygEditor} wwe WysiwygEditor instance\n */\nfunction WwClipboardManager(wwe) {\n    this.wwe = wwe;\n\n    this._pch = new WwPasteContentHelper(this.wwe);\n}\n\n/**\n * init\n * initialize\n * @api\n * @memberOf WwClipboardManager\n */\nWwClipboardManager.prototype.init = function() {\n    this._initSquireEvent();\n};\n\n/**\n * _initSquireEvent\n * initialize squire events\n * @private\n * @memberOf WwClipboardManager\n */\nWwClipboardManager.prototype._initSquireEvent = function() {\n    var self = this;\n\n    if (isMSBrowser) {\n        this.wwe.getEditor().addEventListener('keydown', function(event) {\n            //Ctrl+ C\n            if (event.ctrlKey &amp;&amp; event.keyCode === 67) {\n                self._saveLastestClipboardRangeInfo();\n            //Ctrl + X\n            } else if (event.ctrlKey &amp;&amp; event.keyCode === 88) {\n                self._saveLastestClipboardRangeInfo();\n                self.wwe.postProcessForChange();\n            }\n        });\n    } else {\n        this.wwe.getEditor().addEventListener('copy', function() {\n            self._saveLastestClipboardRangeInfo();\n        });\n        this.wwe.getEditor().addEventListener('cut', function() {\n            self._saveLastestClipboardRangeInfo();\n            self.wwe.postProcessForChange();\n        });\n    }\n\n    this.wwe.getEditor().addEventListener('willPaste', function(pasteData) {\n        if (self._latestClipboardRangeInfo\n            &amp;&amp; self._latestClipboardRangeInfo.contents.textContent === pasteData.fragment.textContent) {\n            pasteData.fragment = $(self._latestClipboardRangeInfo.contents).clone()[0];\n            pasteData.rangeInfo = self._latestClipboardRangeInfo;\n        }\n\n        self._pch.preparePaste(pasteData);\n        self._refineCursorWithPasteContents(pasteData.fragment);\n        self.wwe.postProcessForChange();\n    });\n};\n/**\n * Refine cursor position with paste contents\n * @memberOf WwClipboardManager\n * @param {DocumentFragment} fragment Copied contents\n * @private\n */\nWwClipboardManager.prototype._refineCursorWithPasteContents = function(fragment) {\n    var node = fragment;\n    var range = this.wwe.getEditor().getSelection().cloneRange();\n\n    while (node.lastChild) {\n        node = node.lastChild;\n    }\n\n    this.wwe.defer(function(wwe) {\n        range.setStartAfter(node);\n        range.collapse(true);\n        wwe.getEditor().setSelection(range);\n    });\n};\n\n/**\n * Check whether copied content from editor or not\n * @memberOf WwClipboardManager\n * @param {DocumentFragment} pasteData Copied contents\n * @returns {boolean}\n * @private\n */\nWwClipboardManager.prototype._isCopyFromEditor = function(pasteData) {\n    var lastestClipboardContents;\n\n    if (!this._latestClipboardRangeInfo) {\n        return false;\n    }\n\n    lastestClipboardContents = this._latestClipboardRangeInfo.contents.textContent;\n\n    return lastestClipboardContents.replace(/\\s/g, '') === pasteData.fragment.textContent.replace(/\\s/g, '');\n};\n/**\n * Save latest clipboard range information to _latestClipboardRangeInfo\n * @memberOf WwClipboardManager\n * @private\n */\nWwClipboardManager.prototype._saveLastestClipboardRangeInfo = function() {\n    var commonAncestorName;\n    var range = this.wwe.getEditor().getSelection().cloneRange();\n    range = this._extendRange(range);\n\n    if (range.commonAncestorContainer === this.wwe.get$Body()[0]) {\n        commonAncestorName = 'BODY';\n    } else {\n        commonAncestorName = range.commonAncestorContainer.tagName;\n    }\n\n    this._latestClipboardRangeInfo = {\n        contents: range.cloneContents(),\n        commonAncestorName: commonAncestorName\n    };\n};\n\n/**\n * _extendRange\n * extend range if need\n * @memberOf WwClipboardManager\n * @param {Range} range to extend\n * @returns {Range} range\n * @private\n */\nWwClipboardManager.prototype._extendRange = function(range) {\n    //텍스트 노드이면서 모두 선택된게 아니면 레인지를 확장할 필요가 없다.\n    if (domUtils.isTextNode(range.commonAncestorContainer)\n        &amp;&amp; (range.startOffset !== 0 || range.commonAncestorContainer.textContent.length !== range.endOffset)\n    ) {\n        return range;\n    }\n\n    if (range.startOffset === 0) {\n        range = this._extendStartRange(range);\n    }\n\n    if (range.endOffset === domUtils.getOffsetLength(range.endContainer)) {\n        range = this._extendEndRange(range);\n    }\n\n    //commonAncestor의 모든 컨텐츠가 선택된경우 commonAncestor로 셀렉션 변경\n    if (this._isWholeCommonAncestorContainerSelected(range)) {\n        range.selectNode(range.commonAncestorContainer);\n    }\n\n    return range;\n};\n\n/**\n * Extends current range's startContainer\n * @memberOf WwClipboardManager\n * @param {Range} range Range object\n * @returns {Range}\n * @private\n */\nWwClipboardManager.prototype._extendStartRange = function(range) {\n    var newBound = range.startContainer;\n\n    //레인지 확장\n    while (newBound.parentNode !== range.commonAncestorContainer\n            &amp;&amp; newBound.parentNode !== this.wwe.get$Body()[0]\n            &amp;&amp; !newBound.previousSibling\n          ) {\n        newBound = newBound.parentNode;\n    }\n\n    //range단위를 한단계 확장 deleteContents는 start, end에 걸린 컨테이너 자체는 안지운다.\n    range.setStart(newBound.parentNode, domUtils.getNodeOffsetOfParent(newBound));\n\n    return range;\n};\n\n/**\n * Extends current range's endContainer\n * @memberOf WwClipboardManager\n * @param {Range} range Range object\n * @returns {Range}\n * @private\n */\nWwClipboardManager.prototype._extendEndRange = function(range) {\n    var newBound = range.endContainer;\n    var boundNext = newBound.nextSibling;\n\n    //레인지 확장\n    while (newBound.parentNode !== range.commonAncestorContainer\n            &amp;&amp; newBound.parentNode !== this.wwe.get$Body()[0]\n            &amp;&amp; (!boundNext || (domUtils.getNodeName(boundNext) === 'BR' &amp;&amp; newBound.parentNode.lastChild === boundNext))\n          ) {\n        newBound = newBound.parentNode;\n        boundNext = newBound.nextSibling;\n    }\n\n    //range단위를 부모래밸로 한단계 확장 deleteContents는 start, end에 걸린 컨테이너 자체는 안지운다.\n    range.setEnd(newBound.parentNode, domUtils.getNodeOffsetOfParent(newBound) + 1);\n\n    return range;\n};\n\n/**\n * _isWholeCommonAncestorContainerSelected\n * Check whether whole commonAncestorContainter textContent selected or not\n * 선택된 영역이 commonAncestorContainer의 모든 컨텐츠인치 체크\n * @memberOf WwClipboardManager\n * @param {Range} range Range object\n * @returns {boolean} result\n * @private\n */\nWwClipboardManager.prototype._isWholeCommonAncestorContainerSelected = function(range) {\n    return range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE\n        &amp;&amp; range.commonAncestorContainer !== this.wwe.get$Body()[0]\n        &amp;&amp; range.startOffset === 0\n        &amp;&amp; range.endOffset === range.commonAncestorContainer.childNodes.length\n        &amp;&amp; range.commonAncestorContainer === range.startContainer\n        &amp;&amp; range.commonAncestorContainer === range.endContainer;\n};\n\nmodule.exports = WwClipboardManager;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"