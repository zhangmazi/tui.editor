tui.util.defineNamespace("fedoc.content", {});
fedoc.content["wysiwygCommands_tableAddCol.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Implements WysiwygCommand\n * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.\n */\n\n'use strict';\n\nvar CommandManager = require('../commandManager'),\n    domUtils = require('../domUtils');\n\n/**\n * AddCol\n * Add col to selected table\n * @exports AddCol\n * @augments Command\n * @augments WysiwygCommand\n */\nvar AddCol = CommandManager.command('wysiwyg', /** @lends AddCol */{\n    name: 'AddCol',\n    /**\n     * 커맨드 핸들러\n     * @param {WysiwygEditor} wwe WYsiwygEditor instance\n     */\n    exec: function(wwe) {\n        var sq = wwe.getEditor(),\n            range = sq.getSelection().cloneRange(),\n            $cell;\n\n        if (sq.hasFormat('TR')) {\n            sq.saveUndoState(range);\n\n            $cell = getCellByRange(range);\n            addColToCellAfter($cell);\n\n            sq.focus();\n\n            focusToNextCell(sq, $cell);\n        } else {\n            sq.focus();\n        }\n    }\n});\n\nfunction getCellByRange(range) {\n    var cell = domUtils.getChildNodeByOffset(range.startContainer, range.startOffset);\n\n    if (domUtils.getNodeName(cell) === 'TD' || domUtils.getNodeName(cell) === 'TH') {\n        cell = $(cell);\n    } else {\n        cell = $(cell).parentsUntil('tr');\n    }\n\n    return cell;\n}\n\nfunction addColToCellAfter($cell) {\n    var index = $cell.index(),\n        cellToAdd;\n\n    $cell.parents('table').find('tr').each(function(n, tr) {\n        if (domUtils.getNodeName(tr.parentNode) === 'TBODY') {\n            cellToAdd = $('&lt;td>&lt;br>&lt;/td>');\n        } else {\n            cellToAdd = $('&lt;th>&lt;br>&lt;/th>');\n        }\n\n        $(cellToAdd).insertAfter($(tr).children().eq(index));\n    });\n}\n\nfunction focusToNextCell(sq, $cell) {\n    var range;\n\n    range = sq.getSelection();\n    range.selectNodeContents($cell.next()[0]);\n    range.collapse(true);\n\n    sq.setSelection(range);\n}\n\nmodule.exports = AddCol;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"