tui.util.defineNamespace("fedoc.content", {});
fedoc.content["Command.html"] = "<div id=\"main\" class=\"main\">\n\n\n\n\n<section>\n\n<header>\n    \n        <h2>\n        \n        Command\n        \n        \n        </h2>\n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n<div class=\"\">\n<dt>\n    \n        <h4 class=\"name\" id=\"Command\">\n            <span class=\"type-signature\"></span>new Command<span class=\"signature\">(name, type, keyMap<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 10</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Command<br>It implements command to editors</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n        <th>Attributes</th>\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>name</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>Command name</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>type</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">number</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>Command type (Command.TYPE)</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>keyMap</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">Array.&lt;string></span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n                    &lt;optional><br>\n                \n\n                \n\n                \n                </td>\n            \n\n            \n\n            <td class=\"description last\"><p>keyMap</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n    <div class=\"container-members\">\n        <h3 class=\"subsection-title\">Members</h3>\n\n        <dl>\n            \n<div class=\"\">\n<dt>\n    <h4 class=\"name\" id=\".TYPE\">\n        <span class=\"type-signature\"><span class=\"icon green\">static</span> </span>TYPE<span class=\"type-signature\"> :object</span>\n        \n        <div class=\"container-source members\">\n            <code>file</code>,\n            <code>line 132</code>\n        </div>\n        \n    </h4>\n\n    \n</dt>\n<dd>\n    \n    <div class=\"description\">\n        <p>Command Type Constant<br>markdown : 0<br>wysiwyg : 1<br>global : 2</p>\n    </div>\n    \n\n    <!--\n    \n        <h5>Type:</h5>\n        <ul>\n            <li>\n                \n<span class=\"param-type\">object</span>\n\n\n            </li>\n        </ul>\n    \n    -->\n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n</dd>\n</div>\n\n        </dl>\n    </div>\n    \n\n    \n    <div class=\"container-methods\">\n        <h3 class=\"subsection-title\">Methods</h3>\n\n        <dl>\n            \n<div class=\"\">\n<dt>\n    \n        <h4 class=\"name\" id=\".factory\">\n            <span class=\"type-signature\"><span class=\"icon green\">static</span> </span>factory<span class=\"signature\">(typeStr, props)</span><span class=\"type-signature\"> &rarr; {<a target=\"body\" href=\"Command.html\">Command</a>}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 105</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Command factory method</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>typeStr</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Editor type name</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>props</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Property</p>\n                <h6>Properties:</h6>\n                \n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>name</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Command name</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>type</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">number</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Command type number</p></td>\n        </tr>\n\n    \n    </tbody>\n</table>\n            </td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n    \n<span class=\"param-type\"><a href=\"Command.html\">Command</a></span>\n\n\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"\">\n<dt>\n    \n        <h4 class=\"name\" id=\"getName\">\n            <span class=\"type-signature\"></span>getName<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {string}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 35</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>getName<br>returns Name of command</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>Command Name</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"\">\n<dt>\n    \n        <h4 class=\"name\" id=\"getType\">\n            <span class=\"type-signature\"></span>getType<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {number}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 46</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>getType<br>returns Type of command</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>Command Command type number</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"\">\n<dt>\n    \n        <h4 class=\"name\" id=\"isGlobalType\">\n            <span class=\"type-signature\"></span>isGlobalType<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {boolean}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 79</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>isGlobalType<br>returns whether Command Type is Global or not</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>result</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"\">\n<dt>\n    \n        <h4 class=\"name\" id=\"isMDType\">\n            <span class=\"type-signature\"></span>isMDType<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {boolean}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 57</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>isMDType<br>returns whether Command Type is Markdown or not</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>result</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"\">\n<dt>\n    \n        <h4 class=\"name\" id=\"isWWType\">\n            <span class=\"type-signature\"></span>isWWType<span class=\"signature\">()</span><span class=\"type-signature\"> &rarr; {boolean}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 68</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>isWWType<br>returns whether Command Type is Wysiwyg or not</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>result</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        \n            \n<div class=\"\">\n<dt>\n    \n        <h4 class=\"name\" id=\"setKeyMap\">\n            <span class=\"type-signature\"></span>setKeyMap<span class=\"signature\">(win, mac)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 91</code>\n                </div>\n            \n        </h4>\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>setKeyMap<br>Set keymap value for each os</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>win</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Windows Key(and etc)</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>mac</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">string</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>Mac osx key</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n</div>\n\n        </dl>\n    </div>\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"