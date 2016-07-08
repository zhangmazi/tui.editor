tui.util.defineNamespace("fedoc.content", {});
fedoc.content["wysiwygCommands_tableAddRow.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements WysiwygCommand\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar CommandManager = require('../commandManager');\n\n/**\n * AddRow\n * Add Row to selected table\n * @exports AddRow\n * @augments Command\n * @augments WysiwygCommand\n */\nvar AddRow = CommandManager.command('wysiwyg', /** @lends AddRow */{\n    name: 'AddRow',\n    /**\n     *  커맨드 핸들러\n     *  @param {WysiwygEditor} wwe WYsiwygEditor instance\n     */\n    exec: function(wwe) {\n        var sq = wwe.getEditor(),\n            range = sq.getSelection().cloneRange(),\n            $tr, $newRow;\n\n        if (sq.hasFormat('TD')) {\n            sq.saveUndoState(range);\n            $tr = $(range.startContainer).closest('tr');\n            $newRow = getNewRow($tr);\n            $newRow.insertAfter($tr);\n\n            sq.focus();\n\n            focusToFirstTd(sq, $newRow);\n        } else {\n            sq.focus();\n        }\n    }\n});\n\nfunction getNewRow($tr) {\n    var cloned = $tr.clone();\n\n    cloned.find('td').html('&lt;br>');\n\n    return cloned;\n}\n\nfunction focusToFirstTd(sq, $tr) {\n    var range;\n\n    range = sq.getSelection();\n    range.selectNodeContents($tr.find('td')[0]);\n    range.collapse(true);\n    sq.setSelection(range);\n}\n\nmodule.exports = AddRow;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"