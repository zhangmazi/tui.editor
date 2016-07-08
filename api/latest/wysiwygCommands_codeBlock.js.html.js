tui.util.defineNamespace("fedoc.content", {});
fedoc.content["wysiwygCommands_codeBlock.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements WysiwygCommand\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar CommandManager = require('../commandManager');\n\nvar codeBlockID = 0,\n    CODEBLOCK_CLASS_PREFIX = 'te-content-codeblock-';\n/**\n * CodeBlock\n * Add CodeBlock to wysiwygEditor\n * @exports CodeBlock\n * @augments Command\n * @augments WysiwygCommand\n */\nvar CodeBlock = CommandManager.command('wysiwyg', /** @lends CodeBlock */{\n    name: 'CodeBlock',\n    keyMap: ['SHIFT+CTRL+P', 'SHIFT+META+P'],\n    /**\n     * Command handler\n     * @param {WysiwygEditor} wwe WYsiwygEditor instance\n     * @param {string} type of language\n     */\n    exec: function(wwe, type) {\n        var attr, codeBlockBody;\n        var sq = wwe.getEditor();\n        var range = sq.getSelection().cloneRange();\n        if (!sq.hasFormat('PRE')) {\n            attr = ' class = \"' + CODEBLOCK_CLASS_PREFIX + codeBlockID + '\"';\n\n            if (type) {\n                attr += ' data-language=\"' + type + '\"';\n            }\n\n            codeBlockBody = getCodeBlockBody(range, wwe);\n            sq.insertHTML('&lt;pre' + attr + '>' + codeBlockBody + '&lt;/pre>');\n\n            focusToFirstCode(wwe.get$Body().find('.' + CODEBLOCK_CLASS_PREFIX + codeBlockID), wwe);\n\n            codeBlockID += 1;\n        }\n\n        sq.focus();\n    }\n});\n\n/**\n * focusToFirstCode\n * Focus to first code tag content of pre tag\n * @param {jQuery} $pre pre tag\n * @param {WysiwygEditor} wwe wysiwygEditor\n */\nfunction focusToFirstCode($pre, wwe) {\n    var range = wwe.getEditor().getSelection().cloneRange();\n\n    range.setStart($pre.find('code')[0].firstChild, 0);\n    range.collapse(true);\n\n    wwe.getEditor().setSelection(range);\n}\n/**\n * getCodeBlockBody\n * get text wrapped by code\n * @param {object} range range object\n * @param {object} wwe wysiwyg editor\n * @returns {string}\n */\nfunction getCodeBlockBody(range, wwe) {\n    var codeBlock;\n    var mgr = wwe.getManager('codeblock');\n    var contents, nodes;\n\n    if (range.collapsed) {\n        nodes = [$('&lt;div>&amp;#8203&lt;br>&lt;/div>')[0]];\n    } else {\n        contents = range.extractContents();\n        nodes = [].slice.call(contents.childNodes);\n    }\n\n    codeBlock = mgr.convertToCodeblock(nodes).innerHTML;\n\n    return codeBlock;\n}\n\nmodule.exports = CodeBlock;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"