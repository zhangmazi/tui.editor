tui.util.defineNamespace("fedoc.content", {});
fedoc.content["markdownCommands_blockquote.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements Blockquote markdown command\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar CommandManager = require('../commandManager');\n\n/**\n * Blockquote\n * Add blockquote markdown syntax to markdown editor\n * @exports Blockquote\n * @augments Command\n */\nvar Blockquote = CommandManager.command('markdown', /** @lends Blockquote */{\n    name: 'Blockquote',\n    keyMap: ['CTRL+Q', 'META+Q'],\n    /**\n     *  커맨드 핸들러\n     *  @param {MarkdownEditor} mde MarkdownEditor instance\n     */\n    exec: function(mde) {\n        var textToModify, range, from, to, textLinesToModify, lineLength, i,\n            cm = mde.getEditor(),\n            doc = cm.getDoc();\n\n        //range 을 가공함\n        range = mde.getCurrentRange();\n\n        from = {\n            line: range.from.line,\n            ch: 0\n        };\n\n        to = {\n            line: range.to.line,\n            ch: doc.getLineHandle(range.to.line).text.length\n        };\n\n        //영역의 텍스트를 가저오고\n        textToModify = doc.getRange(from, to);\n\n        //텍스트 컨텐트를 변경 한다\n        textLinesToModify = textToModify.split('\\n');\n        lineLength = textLinesToModify.length;\n\n        for (i = 0; i &lt; lineLength; i += 1) {\n            textLinesToModify[i] = '>' + textLinesToModify[i];\n        }\n\n        //해당 에디터의 내용을 변경한다\n        doc.replaceRange(textLinesToModify.join('\\n'), from, to);\n\n        range.to.ch += 1;\n\n        doc.setCursor(range.to);\n\n        cm.focus();\n    }\n});\n\nmodule.exports = Blockquote;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"