export enum Direction {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

export interface Robot {
  x: number;
  y: number;
  direction: Direction;
}

export interface Table {
  width: number;
  height: number;
}
