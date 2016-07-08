tui.util.defineNamespace("fedoc.content", {});
fedoc.content["mdTextObject.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements markdown textObject\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\n/**\n * Markdown textObject\n * @exports mdTextObject\n * @constructor\n * @class mdTextObject\n * @param {MarkdownEditor} mde MarkdownEditor instance\n * @param {object} range range\n */\nfunction mdTextObject(mde, range) {\n    this._mde = mde;\n\n    this.setRange(range || mde.getRange());\n}\n\n/**\n * Set start\n * @memberOf mdTextObject\n * @param {object} rangeStart Start of range\n * @private\n */\nmdTextObject.prototype._setStart = function(rangeStart) {\n    this._start = rangeStart;\n};\n/**\n * Set end\n * @private\n * @memberOf mdTextObject\n * @param {object} rangeEnd End of range\n * @private\n */\nmdTextObject.prototype._setEnd = function(rangeEnd) {\n    this._end = rangeEnd;\n};\n/**\n * Set range to given range\n * @private\n * @memberOf mdTextObject\n * @param {object} range Range object\n */\nmdTextObject.prototype.setRange = function(range) {\n    this._setStart(range.start);\n    this._setEnd(range.end);\n};\n/**\n * Set start to end\n * @private\n * @memberOf mdTextObject\n * @param {object} range Range object\n */\nmdTextObject.prototype.setEndBeforeRange = function(range) {\n    this._setEnd(range.start);\n};\n/**\n * Expand startOffset by 1\n * @private\n * @memberOf mdTextObject\n */\nmdTextObject.prototype.expandStartOffset = function() {\n    var start = this._start;\n\n    if (start.ch !== 0) {\n        start.ch -= 1;\n    }\n};\n/**\n * Expand endOffset by 1\n * @private\n * @memberOf mdTextObject\n */\nmdTextObject.prototype.expandEndOffset = function() {\n    var end = this._end;\n\n    if (end.ch &lt; this._mde.getEditor().getDoc().getLine(end.line).length) {\n        end.ch += 1;\n    }\n};\n/**\n * Get current selection's text content\n * @private\n * @memberOf mdTextObject\n * @returns {{start: {line: number, ch: number}, end: {line: number, ch: number}}}\n */\nmdTextObject.prototype.getTextContent = function() {\n    return this._mde.getEditor().getRange(this._start, this._end);\n};\n/**\n * Replace current selection's content with given text content\n * @private\n * @memberOf mdTextObject\n * @param {string} content Replacement content\n */\nmdTextObject.prototype.replaceContent = function(content) {\n    this._mde.getEditor().replaceRange(content, this._start, this._end, '+input');\n};\n/**\n * Delete current selection's content\n * @private\n * @memberOf mdTextObject\n */\nmdTextObject.prototype.deleteContent = function() {\n    this._mde.getEditor().replaceRange('', this._start, this._end, '+delete');\n};\n/**\n * peek StartBeforeOffset\n * @private\n * @memberOf mdTextObject\n * @param {number} offset Offset\n * @returns {{start: {line: number, ch: number}, end: {line: number, ch: number}}}\n */\nmdTextObject.prototype.peekStartBeforeOffset = function(offset) {\n    var peekStart;\n\n    peekStart = {\n        line: this._start.line,\n        ch: Math.max(this._start.ch - offset, 0)\n    };\n\n    return this._mde.getEditor().getRange(peekStart, this._start);\n};\n\nmodule.exports = mdTextObject;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"