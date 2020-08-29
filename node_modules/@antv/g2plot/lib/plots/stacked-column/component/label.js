"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = require("../../../components/label/base");
var label_1 = tslib_1.__importDefault(require("../../column/component/label"));
var StackedColumnLabel = /** @class */ (function (_super) {
    tslib_1.__extends(StackedColumnLabel, _super);
    function StackedColumnLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedColumnLabel.prototype.adjustLabel = function (label, element) {
        var adjustPosition = this.options.adjustPosition;
        if (adjustPosition) {
            var labelRange = label.getBBox();
            var shapeRange = this.getElementShapeBBox(element);
            if (shapeRange.height < labelRange.height) {
                label.hide();
            }
        }
    };
    return StackedColumnLabel;
}(label_1.default));
exports.default = StackedColumnLabel;
base_1.registerLabelComponent('stacked-column', StackedColumnLabel);
//# sourceMappingURL=label.js.map