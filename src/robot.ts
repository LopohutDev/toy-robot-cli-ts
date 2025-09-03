import { Direction, Robot } from './interfaces';

export class ToyRobot implements Robot {
  x: number;
  y: number;
  direction: Direction;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = Direction.NORTH;
  }

  place(x: number, y: number, direction: Direction): void {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  move(): void {
    switch (this.direction) {
      case Direction.NORTH:
        this.y++;
        break;
      case Direction.SOUTH:
        this.y--;
        break;
      case Direction.EAST:
        this.x++;
        break;
      case Direction.WEST:
        this.x--;
        break;
    }
  }

  left(): void {
    switch (this.direction) {
      case Direction.NORTH:
        this.direction = Direction.WEST;
        break;
      case Direction.SOUTH:
        this.direction = Direction.EAST;
        break;
      case Direction.EAST:
        this.direction = Direction.NORTH;
        break;
      case Direction.WEST:
        this.direction = Direction.SOUTH;
        break;
    }
  }

  right(): void {
    switch (this.direction) {
      case Direction.NORTH:
        this.direction = Direction.EAST;
        break;
      case Direction.SOUTH:
        this.direction = Direction.WEST;
        break;
      case Direction.EAST:
        this.direction = Direction.SOUTH;
        break;
      case Direction.WEST:
        this.direction = Direction.NORTH;
        break;
    }
  }

  report(): string {
    return `${this.x},${this.y},${this.direction}`;
  }
}
