tui.util.defineNamespace("fedoc.content", {});
fedoc.content["markdownCommands_bold.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar CommandManager = require('../commandManager');\n\nvar boldRegex = /^[\\*_]{2,}[^\\*_]*[\\*_]{2,}$/;\n\n/**\n * Bold\n * Add bold markdown syntax to markdown editor\n * @exports Bold\n * @augments Command\n */\nvar Bold = CommandManager.command('markdown', /** @lends Bold */{\n    name: 'Bold',\n    keyMap: ['CTRL+B', 'META+B'],\n    /**\n     * Command Handler\n     * @param {MarkdownEditor} mde MarkdownEditor instance\n     */\n    exec: function(mde) {\n        var cursor, selection, tmpSelection, isRemoved, result, isEmpty,\n            cm = mde.getEditor(),\n            doc = cm.getDoc();\n\n        cursor = doc.getCursor();\n        selection = doc.getSelection();\n        isEmpty = !selection;\n\n        // if selection is empty, expend selection to detect a syntax\n        if (isEmpty &amp;&amp; cursor.ch > 1) {\n            tmpSelection = this.expendSelection(doc, cursor);\n            selection = tmpSelection || selection;\n        }\n\n        isRemoved = this.isNeedRemove(selection);\n        result = isRemoved ? this.remove(selection) : this.append(selection);\n\n        doc.replaceSelection(result, 'around');\n\n        if (isEmpty &amp;&amp; !isRemoved) {\n            this.setCursorToCenter(doc, cursor);\n        }\n\n        cm.focus();\n    },\n    /**\n     * 이미 Bold가 적용이 되어있는지 확인\n     * @param {string} text 셀렉션텍스트\n     * @returns {boolean} 볼드 적용 여부\n     */\n    isNeedRemove: function(text) {\n        return boldRegex.test(text);\n    },\n    /**\n     * Bold를 적용한다\n     * @param {string} text 셀렉션텍스트\n     * @returns {string} 볼드가 적용된 텍스트\n     */\n    append: function(text) {\n        return '**' + text + '**';\n    },\n    /**\n     * Bold를 제거한다\n     * @param {string} text 셀렉션텍스트\n     * @returns {string} 볼드가 제거된 텍스트\n     */\n    remove: function(text) {\n        return text.substr(2, text.length - 4);\n    },\n    /**\n     * 셀렉션영역을 확장한다\n     * @param {CodeMirror.doc} doc 코드미러 도큐먼트 객체\n     * @param {object} cursor 코드미러 커서 객체\n     * @returns {string} 셀렉션의 텍스트\n     */\n    expendSelection: function(doc, cursor) {\n        var tmpSelection = doc.getSelection(),\n            result;\n\n        doc.setSelection({line: cursor.line, ch: cursor.ch - 2}, {line: cursor.line, ch: cursor.ch + 2});\n\n        if (tmpSelection === '****' || tmpSelection === '____') {\n            result = tmpSelection;\n        } else {\n            doc.setSelection(cursor);\n        }\n\n        return result;\n    },\n    /**\n     * 커서를 센터로 이동시킨다\n     * @param {CodeMirror.doc} doc 코드미러 도큐먼트 객체\n     * @param {object} cursor 코드미러 커서 객체\n     */\n    setCursorToCenter: function(doc, cursor) {\n        doc.setCursor(cursor.line, cursor.ch + 2);\n    }\n});\n\nmodule.exports = Bold;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"