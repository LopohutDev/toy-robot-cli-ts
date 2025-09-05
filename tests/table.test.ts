import { Tabletop } from '../src/table';

describe('Tabletop', () => {
  let table: Tabletop;

  beforeEach(() => {
    table = new Tabletop(5, 5);
  });

  it('should be a valid position', () => {
    expect(table.isValidPosition(0, 0)).toBe(true);
    expect(table.isValidPosition(4, 4)).toBe(true);
  });

  it('should be an invalid position', () => {
    expect(table.isValidPosition(-1, 0)).toBe(false);
    expect(table.isValidPosition(0, -1)).toBe(false);
    expect(table.isValidPosition(5, 0)).toBe(false);
    expect(table.isValidPosition(0, 5)).toBe(false);
  });
});
