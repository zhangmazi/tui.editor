tui.util.defineNamespace("fedoc.content", {});
fedoc.content["wysiwygCommands_hr.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements HR wysiwyg command\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar CommandManager = require('../commandManager'),\n    domUtils = require('../domUtils');\n\n/**\n * HR\n * Add horizontal line markdown syntax to wysiwyg Editor\n * @exports HR\n * @augments Command\n * @augments WysiwygCommand\n */\nvar HR = CommandManager.command('wysiwyg', /** @lends HR */{\n    name: 'HR',\n    keyMap: ['CTRL+L', 'META+L'],\n    /**\n     *  커맨드 핸들러\n     *  @param {WysiwygEditor} wwe WYsiwygEditor instance\n     */\n    exec: function(wwe) {\n        var sq = wwe.getEditor(),\n            range = sq.getSelection(),\n            currentNode, nextBlockNode, hr, previousSibling;\n\n        if (range.collapsed &amp;&amp; !sq.hasFormat('TABLE') &amp;&amp; !sq.hasFormat('PRE')) {\n            currentNode = domUtils.getChildNodeByOffset(range.startContainer, range.startOffset);\n            nextBlockNode = domUtils.getTopNextNodeUnder(currentNode, wwe.get$Body()[0]);\n\n            if (!nextBlockNode) {\n                nextBlockNode = sq.createDefaultBlock();\n                wwe.get$Body().append(nextBlockNode);\n            }\n\n            hr = sq.createElement('HR');\n\n            sq.modifyBlocks(function(frag) {\n                frag.appendChild(hr);\n\n                return frag;\n            });\n\n            previousSibling = hr.previousSibling;\n            if (previousSibling\n                &amp;&amp; domUtils.isTextNode(previousSibling)\n                &amp;&amp; domUtils.getTextLength(previousSibling) === 0\n            ) {\n                hr.parentNode.removeChild(previousSibling);\n            }\n\n            range.selectNodeContents(nextBlockNode);\n            range.collapse(true);\n\n            sq.setSelection(range);\n        }\n\n        sq.focus();\n    }\n});\n\n\nmodule.exports = HR;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"