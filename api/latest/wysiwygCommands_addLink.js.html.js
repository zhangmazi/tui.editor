tui.util.defineNamespace("fedoc.content", {});
fedoc.content["wysiwygCommands_addLink.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements AddLink wysiwyg command\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar CommandManager = require('../commandManager');\n\n/**\n * AddLink\n * Add link markdown syntax to wysiwyg Editor\n * @exports AddLink\n * @augments Command\n * @augments WysiwygCommand\n */\nvar AddLink = CommandManager.command('wysiwyg', /** @lends AddLink */{\n    name: 'AddLink',\n    /**\n     *  커맨드 핸들러\n     *  @param {WysiwygEditor} wwe WYsiwygEditor instance\n     *  @param {object} data data for image\n     */\n    exec: function(wwe, data) {\n        var sq = wwe.getEditor(),\n            link;\n\n        if (!sq.hasFormat('PRE')) {\n            sq.removeAllFormatting();\n\n            if (sq.getSelectedText()) {\n                sq.makeLink(data.url);\n            } else {\n                link = sq.createElement('A', {href: data.url});\n                $(link).text(data.linkText);\n                sq.insertElement(link);\n            }\n        }\n\n        sq.focus();\n    }\n});\n\n\nmodule.exports = AddLink;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"