tui.util.defineNamespace("fedoc.content", {});
fedoc.content["extensions_scrollFollow.scrollSync.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements Scroll Follow Extension ScrollSync Module\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar SCROLL_TOP_PADDING = 20;\n\n/**\n * ScrollSync\n * manage scroll sync between markdown editor and preview\n * @exports ScrollSync\n * @constructor\n * @class\n * @param {SectionManager} sectionManager sectionManager\n * @param {CodeMirror} cm codemirror\n * @param {jQuery} $previewContainerEl preview container\n */\nfunction ScrollSync(sectionManager, cm, $previewContainerEl) {\n    this.sectionManager = sectionManager;\n    this.cm = cm;\n    this.$previewContainerEl = $previewContainerEl;\n    this.$contents = this.$previewContainerEl.find('.tui-editor-contents');\n\n    /**\n     * current timeout id needs animation\n     * @type {number}\n     */\n    this._currentTimeoutId = null;\n}\n\n/**\n * _getEditorSectionHeight\n * get section height of editor\n * @param {object} section section be caculated height\n * @returns {number} height\n */\nScrollSync.prototype._getEditorSectionHeight = function(section) {\n    var height;\n\n    height = this.cm.heightAtLine(section.end, 'local');\n    height -= this.cm.heightAtLine(section.start > 0 ? section.start - 1 : 0, 'local');\n\n    return height;\n};\n\n/**\n * _getLineHeightGapInSection\n * get height gap between passed line in passed section\n * @param {object} section section be caculated\n * @param {number} line line number\n * @returns {number} gap\n */\nScrollSync.prototype._getEditorLineHeightGapInSection = function(section, line) {\n    var gap;\n\n    gap = this.cm.heightAtLine(line, 'local');\n    gap -= this.cm.heightAtLine(section.start > 0 ? section.start - 1 : 0, 'local');\n\n    return Math.max(gap, 0);\n};\n\n/**\n * _getSectionScrollRatio\n * get ratio of height between scrollTop line and scrollTop section\n * @param {object} section section be caculated\n * @param {number} line line number\n * @returns {number} ratio\n */\nScrollSync.prototype._getEditorSectionScrollRatio = function(section, line) {\n    var ratio,\n        isOneLine = (section.end === section.start);\n\n    if (isOneLine) {\n        ratio = 0;\n    } else {\n        ratio = this._getEditorLineHeightGapInSection(section, line) / this._getEditorSectionHeight(section);\n    }\n    return ratio;\n};\n\n/**\n * _getScrollFactorsOfEditor\n * get Scroll Information of editor for preivew scroll sync\n * @returns {object} scroll factors\n */\nScrollSync.prototype._getScrollFactorsOfEditor = function() {\n    var topLine, topSection, ratio, isEditorBottom, factors,\n        cm = this.cm,\n        scrollInfo = cm.getScrollInfo();\n\n    isEditorBottom = (scrollInfo.height - scrollInfo.top) &lt;= scrollInfo.clientHeight;\n\n    if (isEditorBottom) {\n        factors = {\n            isEditorBottom: isEditorBottom\n        };\n    } else {\n        topLine = cm.coordsChar({\n            left: scrollInfo.left,\n            top: scrollInfo.top\n        }, 'local').line;\n\n        topSection = this.sectionManager.sectionByLine(topLine);\n\n        ratio = this._getEditorSectionScrollRatio(topSection, topLine);\n\n        factors = {\n            section: topSection,\n            sectionRatio: ratio\n        };\n    }\n\n    return factors;\n};\n\n/**\n * _getScrollTopForPreview\n * get ScrolTop value for preview\n * @returns {number|undefined} scrollTop value, when something wrong then return undefined\n */\nScrollSync.prototype._getScrollTopForPreview = function() {\n    var scrollTop, scrollFactors, section, ratio;\n\n    scrollFactors = this._getScrollFactorsOfEditor();\n    section = scrollFactors.section;\n    ratio = scrollFactors.sectionRatio;\n\n    if (scrollFactors.isEditorBottom) {\n        scrollTop = this.$contents.height();\n    } else if (section.$previewSectionEl) {\n        scrollTop = section.$previewSectionEl[0].offsetTop;\n        scrollTop += (section.$previewSectionEl.height() * ratio) - SCROLL_TOP_PADDING;\n    }\n\n    scrollTop = scrollTop &amp;&amp; Math.max(scrollTop, 0);\n\n    return scrollTop;\n};\n\n\n/**\n * syncToPreview\n * sync preview with markdown scroll\n */\nScrollSync.prototype.syncToPreview = function() {\n    var self = this,\n        targetScrollTop = this._getScrollTopForPreview();\n\n    this._animateRun(this.$previewContainerEl.scrollTop(), targetScrollTop, function(deltaScrollTop) {\n        self.$previewContainerEl.scrollTop(deltaScrollTop);\n    });\n};\n\n/**\n * _animateRun\n * animate with passed Callback\n * @param {number} originValue original value\n * @param {number} targetValue target value\n * @param {function} stepCB callback function\n */\nScrollSync.prototype._animateRun = function(originValue, targetValue, stepCB) {\n    var valueDiff = targetValue - originValue,\n        startTime = Date.now(),\n        self = this;\n\n    //if already doing animation\n    if (this._currentTimeoutId) {\n        clearTimeout(this._currentTimeoutId);\n    }\n\n    function step() {\n        var deltaValue,\n            stepTime = Date.now(),\n            progress = (stepTime - startTime) / 200; //200 is animation time\n\n        if (progress &lt; 1) {\n            deltaValue = originValue + valueDiff * Math.cos((1 - progress) * Math.PI / 2);\n            stepCB(Math.ceil(deltaValue));\n            self._currentTimeoutId = setTimeout(step, 1);\n        } else {\n            stepCB(targetValue);\n            self._currentTimeoutId = null;\n        }\n    }\n\n    step();\n};\n\nmodule.exports = ScrollSync;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"