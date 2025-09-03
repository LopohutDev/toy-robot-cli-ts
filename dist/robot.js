"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToyRobot = void 0;
const interfaces_1 = require("./interfaces");
class ToyRobot {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = interfaces_1.Direction.NORTH;
    }
    place(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    move() {
        switch (this.direction) {
            case interfaces_1.Direction.NORTH:
                this.y++;
                break;
            case interfaces_1.Direction.SOUTH:
                this.y--;
                break;
            case interfaces_1.Direction.EAST:
                this.x++;
                break;
            case interfaces_1.Direction.WEST:
                this.x--;
                break;
        }
    }
    left() {
        switch (this.direction) {
            case interfaces_1.Direction.NORTH:
                this.direction = interfaces_1.Direction.WEST;
                break;
            case interfaces_1.Direction.SOUTH:
                this.direction = interfaces_1.Direction.EAST;
                break;
            case interfaces_1.Direction.EAST:
                this.direction = interfaces_1.Direction.NORTH;
                break;
            case interfaces_1.Direction.WEST:
                this.direction = interfaces_1.Direction.SOUTH;
                break;
        }
    }
    right() {
        switch (this.direction) {
            case interfaces_1.Direction.NORTH:
                this.direction = interfaces_1.Direction.EAST;
                break;
            case interfaces_1.Direction.SOUTH:
                this.direction = interfaces_1.Direction.WEST;
                break;
            case interfaces_1.Direction.EAST:
                this.direction = interfaces_1.Direction.SOUTH;
                break;
            case interfaces_1.Direction.WEST:
                this.direction = interfaces_1.Direction.NORTH;
                break;
        }
    }
    report() {
        return `${this.x},${this.y},${this.direction}`;
    }
}
exports.ToyRobot = ToyRobot;
