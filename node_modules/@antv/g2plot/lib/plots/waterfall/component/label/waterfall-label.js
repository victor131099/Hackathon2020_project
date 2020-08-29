"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Create By Bruce Too
 * On 2020-02-18
 */
var util_1 = require("@antv/util");
var label_1 = tslib_1.__importDefault(require("../../../column/component/label"));
var layer_1 = require("../../layer");
var base_1 = require("../../../../components/label/base");
var MARGIN = 2;
var WaterfallLabel = /** @class */ (function (_super) {
    tslib_1.__extends(WaterfallLabel, _super);
    function WaterfallLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WaterfallLabel.prototype.adjustLabel = function (label, element) {
        var shape = element.shape;
        var shapeBox = shape.getBBox();
        var data = element.getData();
        var values = data[layer_1.VALUE_FIELD];
        var diff = data[this.layer.options.yField];
        var value = util_1.isArray(values) ? values[1] : values;
        var yPos = (shapeBox.minY + shapeBox.maxY) / 2;
        var textBaseline = 'bottom';
        if (diff < 0) {
            yPos = shapeBox.maxY + MARGIN;
            textBaseline = 'top';
        }
        else {
            yPos = shapeBox.minY - MARGIN;
        }
        label.attr('y', yPos);
        label.attr('text', value);
        label.attr('textBaseline', textBaseline);
    };
    return WaterfallLabel;
}(label_1.default));
exports.default = WaterfallLabel;
base_1.registerLabelComponent('waterfall', WaterfallLabel);
//# sourceMappingURL=waterfall-label.js.map