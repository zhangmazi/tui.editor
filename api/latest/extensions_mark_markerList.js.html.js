tui.util.defineNamespace("fedoc.content", {});
fedoc.content["extensions_mark_markerList.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>'use strict';\n\nvar util = tui.util;\n\n/**\n * Markerlist\n * @exports Markerlist\n * @constructor\n * @class\n */\nfunction Markerlist() {\n    this._sortedMarkers = [];\n    this._markersWithId = {};\n}\n\n/**\n * addMarker\n * Add Marker\n * @param {number|object} start start text offset\n * @param {number} end end text offset\n * @param {string} id id of marker\n * @returns {object} marker\n */\nMarkerlist.prototype.addMarker = function(start, end, id) {\n    var marker;\n\n    if (!id) {\n        marker = start;\n    } else {\n        marker = {\n            start: start,\n            end: end,\n            id: id\n        };\n    }\n\n    if (!this._markersWithId[marker.id]) {\n        this._sortedMarkers.push(marker);\n        this._markersWithId[marker.id] = marker;\n    }\n\n    return marker;\n};\n\n/**\n * getMarker\n * Get marker with given id\n * @param {string} id id of marker\n * @returns {object} marker\n */\nMarkerlist.prototype.getMarker = function(id) {\n    return this._markersWithId[id];\n};\n\n/**\n * removeMarker\n * Remove marker with given id\n * @param {string} id of marker that should be removed\n * @returns {marker} removed marker\n */\nMarkerlist.prototype.removeMarker = function(id) {\n    var removedMarker, index;\n\n    removedMarker = this._markersWithId[id];\n    delete this._markersWithId[id];\n\n    index = this._sortedMarkers.indexOf(removedMarker);\n    this._sortedMarkers.splice(index, 1);\n\n    return removedMarker;\n};\n\n/**\n * updateMarker\n * Update marker with extra information\n * @param {string} id id of marker\n * @param {object} obj extra information\n * @returns {object} marker\n */\nMarkerlist.prototype.updateMarker = function(id, obj) {\n    var marker = this.getMarker(id);\n\n    return util.extend(marker, obj);\n};\n\n/**\n * forEachByRangeAffected\n * Iterate markers affected by given range\n * @param {number} start start offset\n * @param {end} end end offset\n * @param {function} iteratee iteratee\n */\nMarkerlist.prototype.forEachByRangeAffected = function(start, end, iteratee) {\n    var rangeMarkers;\n\n    rangeMarkers = this._getMarkersByRangeAffected(start, end);\n\n    rangeMarkers.forEach(iteratee);\n};\n\n/**\n * _getMarkersByRangeAffected\n * Get markers affected by given range\n * @param {number} start start offset\n * @param {end} end end offset\n * @returns {Array.&lt;object>} markers\n */\nMarkerlist.prototype._getMarkersByRangeAffected = function(start, end) {\n    var rangeMarkers;\n\n    rangeMarkers = this._sortedMarkers.filter(function(marker) {\n        if (marker.end > end || marker.end > start) {\n            return true;\n        }\n\n        return false;\n    });\n\n    return rangeMarkers;\n};\n\n/**\n * getAll\n * Get markers all\n * @returns {Array.&lt;object>} markers\n */\nMarkerlist.prototype.getAll = function() {\n    return this._sortedMarkers;\n};\n\n/**\n * resetMarkers\n * Reset markerlist\n */\nMarkerlist.prototype.resetMarkers = function() {\n    this._sortedMarkers = [];\n    this._markersWithId = {};\n};\n\n/**\n * sortBy\n * Sort markers with given key of marker\n * @param {string} rangeKey, start or end\n */\nMarkerlist.prototype.sortBy = function(rangeKey) {\n    this._sortedMarkers.sort(function(a, b) {\n        return a[rangeKey] - b[rangeKey];\n    });\n};\n\n/**\n * getMarkersData\n * Get marker data to export\n * @returns {object} markers data\n */\nMarkerlist.prototype.getMarkersData = function() {\n    return this.getAll().map(function(marker) {\n        return {\n            start: marker.start,\n            end: marker.end,\n            id: marker.id\n        };\n    });\n};\n\nmodule.exports = Markerlist;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"