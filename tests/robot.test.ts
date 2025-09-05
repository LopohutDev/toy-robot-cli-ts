import { ToyRobot } from '../src/robot';
import { Direction } from '../src/interfaces';

describe('ToyRobot', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = new ToyRobot();
  });

  it('should place the robot correctly', () => {
    robot.place(1, 2, Direction.EAST);
    expect(robot.x).toBe(1);
    expect(robot.y).toBe(2);
    expect(robot.direction).toBe(Direction.EAST);
  });

  it('should move north', () => {
    robot.place(0, 0, Direction.NORTH);
    robot.move();
    expect(robot.y).toBe(1);
  });

  it('should move south', () => {
    robot.place(0, 1, Direction.SOUTH);
    robot.move();
    expect(robot.y).toBe(0);
  });

  it('should move east', () => {
    robot.place(0, 0, Direction.EAST);
    robot.move();
    expect(robot.x).toBe(1);
  });

  it('should move west', () => {
    robot.place(1, 0, Direction.WEST);
    robot.move();
    expect(robot.x).toBe(0);
  });

  it('should turn left from north to west', () => {
    robot.place(0, 0, Direction.NORTH);
    robot.left();
    expect(robot.direction).toBe(Direction.WEST);
  });

  it('should turn right from north to east', () => {
    robot.place(0, 0, Direction.NORTH);
    robot.right();
    expect(robot.direction).toBe(Direction.EAST);
  });

  it('should report its position', () => {
    robot.place(3, 4, Direction.SOUTH);
    expect(robot.report()).toBe('3,4,SOUTH');
  });
});
