"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBravadoBreakPoints = void 0;
var core_1 = require("@vueuse/core");
var screens = {
    sm: 768,
    md: 992,
    lg: 1280,
    xl: 1600,
};
function useBravadoBreakPoints() {
    return (0, core_1.useBreakpoints)(screens);
}
exports.useBravadoBreakPoints = useBravadoBreakPoints;
