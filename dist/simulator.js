"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulator = void 0;
const robot_1 = require("./robot");
const table_1 = require("./table");
class Simulator {
    constructor() {
        this.robot = new robot_1.ToyRobot();
        this.table = new table_1.Tabletop(5, 5);
        this.placed = false;
    }
    execute(command) {
        const args = command.split(" ");
        const commandName = args[0];
        if (commandName !== "PLACE" && !this.placed) {
            return;
        }
        switch (commandName) {
            case "PLACE":
                const placeArgs = args[1].split(",");
                const x = parseInt(placeArgs[0], 10);
                const y = parseInt(placeArgs[1], 10);
                const direction = placeArgs[2];
                if (this.table.isValidPosition(x, y)) {
                    this.robot.place(x, y, direction);
                    this.placed = true;
                }
                break;
            case "MOVE":
                const newX = this.robot.x;
                const newY = this.robot.y;
                const tempRobot = new robot_1.ToyRobot();
                tempRobot.place(newX, newY, this.robot.direction);
                tempRobot.move();
                if (this.table.isValidPosition(tempRobot.x, tempRobot.y)) {
                    this.robot.move();
                }
                break;
            case "LEFT":
                this.robot.left();
                break;
            case "RIGHT":
                this.robot.right();
                break;
            case "RIGHT":
                if (this.placed) {
                    this.robot.report();
                }
                else {
                    return "Robot is not placed yet.";
                }
        }
    }
}
exports.Simulator = Simulator;
