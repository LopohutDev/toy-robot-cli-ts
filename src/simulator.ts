import { Direction } from "./interfaces";
import { ToyRobot } from "./robot";
import { Tabletop } from "./table";

export class Simulator {
  private robot: ToyRobot;
  private table: Tabletop;
  private placed: boolean;

  constructor() {
    this.robot = new ToyRobot();
    this.table = new Tabletop(5, 5);
    this.placed = false;
  }

  execute(command: string): string | void {
    const args = command.split(" ");
    const commandName = args[0];

    if (commandName === "REPORT") {
      if (this.placed) {
        return this.robot.report();
      } else {
        return "Robot is not placed yet.";
      }
    }

    if (commandName !== "PLACE" && !this.placed) {
      return;
    }

    switch (commandName) {
      case "PLACE":
        const placeArgs = args[1].split(",");
        const x = parseInt(placeArgs[0], 10);
        const y = parseInt(placeArgs[1], 10);
        const direction = placeArgs[2] as Direction;
        if (this.table.isValidPosition(x, y)) {
          this.robot.place(x, y, direction);
          this.placed = true;
        }
        break;
      case "MOVE":
        const newX = this.robot.x;
        const newY = this.robot.y;
        const tempRobot = new ToyRobot();
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
    }
  }
}
