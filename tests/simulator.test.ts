import { Simulator } from '../src/simulator';

describe('Simulator', () => {
  let simulator: Simulator;

  beforeEach(() => {
    simulator = new Simulator();
  });

  it('should place the robot on the table', () => {
    simulator.execute('PLACE 1,2,EAST');
    expect(simulator.execute('REPORT')).toBe('1,2,EAST');
  });

  it('should return an error if placing the robot off the table', () => {
    expect(simulator.execute('PLACE 6,6,NORTH')).toBe('Invalid PLACE command. Coordinates are off the table.');
  });

  it('should return an error for commands before placing the robot', () => {
    expect(simulator.execute('MOVE')).toBe('Robot is not placed yet. Please use the PLACE command first.');
    expect(simulator.execute('LEFT')).toBe('Robot is not placed yet. Please use the PLACE command first.');
    expect(simulator.execute('RIGHT')).toBe('Robot is not placed yet. Please use the PLACE command first.');
  });

  it('should move the robot', () => {
    simulator.execute('PLACE 0,0,NORTH');
    simulator.execute('MOVE');
    expect(simulator.execute('REPORT')).toBe('0,1,NORTH');
  });

  it('should not move the robot off the table', () => {
    simulator.execute('PLACE 0,4,NORTH');
    simulator.execute('MOVE');
    expect(simulator.execute('REPORT')).toBe('0,4,NORTH');
  });

  it('should turn the robot left', () => {
    simulator.execute('PLACE 0,0,NORTH');
    simulator.execute('LEFT');
    expect(simulator.execute('REPORT')).toBe('0,0,WEST');
  });

  it('should turn the robot right', () => {
    simulator.execute('PLACE 0,0,NORTH');
    simulator.execute('RIGHT');
    expect(simulator.execute('REPORT')).toBe('0,0,EAST');
  });

  it('should handle a sequence of commands', () => {
    simulator.execute('PLACE 1,2,EAST');
    simulator.execute('MOVE');
    simulator.execute('MOVE');
    simulator.execute('LEFT');
    simulator.execute('MOVE');
    expect(simulator.execute('REPORT')).toBe('3,3,NORTH');
  });

  it('should return an error for invalid PLACE command format', () => {
    expect(simulator.execute('PLACE')).toBe('Invalid PLACE command. Missing arguments.');
    expect(simulator.execute('PLACE 1,2')).toBe('Invalid PLACE command. Please use the format: PLACE X,Y,DIRECTION');
  });

  it('should return an error for non-numeric coordinates', () => {
    expect(simulator.execute('PLACE a,b,NORTH')).toBe('Invalid PLACE command. Coordinates must be numbers.');
  });

  it('should return an error for invalid direction', () => {
    expect(simulator.execute('PLACE 1,2,INVALID')).toBe('Invalid PLACE command. Direction must be one of NORTH, SOUTH, EAST, WEST.');
  });

  it('should return an error for an unknown command', () => {
    expect(simulator.execute('JUMP')).toBe('Invalid command: JUMP');
  });
});