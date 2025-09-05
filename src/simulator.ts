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
    const args = command.split(' ');
    const commandName = args[0].toUpperCase();

    switch (commandName) {
      case 'PLACE':
        if (args.length < 2) {
          return 'Invalid PLACE command. Missing arguments.';
        }
        const placeArgs = args[1].split(',');
        if (placeArgs.length < 3) {
          return 'Invalid PLACE command. Please use the format: PLACE X,Y,DIRECTION';
        }
        const x = parseInt(placeArgs[0], 10);
        const y = parseInt(placeArgs[1], 10);
        const direction = placeArgs[2].toUpperCase() as Direction;

        if (isNaN(x) || isNaN(y)) {
          return 'Invalid PLACE command. Coordinates must be numbers.';
        }

        if (!Object.values(Direction).includes(direction)) {
          return 'Invalid PLACE command. Direction must be one of NORTH, SOUTH, EAST, WEST.';
        }

        if (this.table.isValidPosition(x, y)) {
          this.robot.place(x, y, direction);
          this.placed = true;
        } else {
          return 'Invalid PLACE command. Coordinates are off the table.';
        }
        break;
      case 'MOVE':
        if (!this.placed) return 'Robot is not placed yet. Please use the PLACE command first.';
        const newX = this.robot.x;
        const newY = this.robot.y;
        const tempRobot = new ToyRobot();
        tempRobot.place(newX, newY, this.robot.direction);
        tempRobot.move();
        if (this.table.isValidPosition(tempRobot.x, tempRobot.y)) {
          this.robot.move();
        }
        break;
      case 'LEFT':
        if (!this.placed) return 'Robot is not placed yet. Please use the PLACE command first.';
        this.robot.left();
        break;
      case 'RIGHT':
        if (!this.placed) return 'Robot is not placed yet. Please use the PLACE command first.';
        this.robot.right();
        break;
      case 'REPORT':
        if (!this.placed) return 'Robot is not placed yet.';
        return this.robot.report();
      default:
        return `Invalid command: ${commandName}`;
    }
  }
}
