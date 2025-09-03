"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabletop = void 0;
class Tabletop {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    isValidPosition(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
}
exports.Tabletop = Tabletop;
