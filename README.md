# Toy Robot CLI

This is a command-line application that simulates a toy robot moving on a 5x5 square tabletop.

## Installation

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the application, use the following command:

```bash
npm start
```

The application accepts the following commands:

- `PLACE X,Y,F`: Puts the toy robot on the table at position (X,Y) and facing direction F.
  - X and Y must be between 0 and 4.
  - F must be one of `NORTH`, `SOUTH`, `EAST`, `WEST`.
  - This must be the first command.
- `MOVE`: Moves the robot one unit forward in its current direction.
- `LEFT`: Rotates the robot 90 degrees to the left.
- `RIGHT`: Rotates the robot 90 degrees to the right.
- `REPORT`: Announces the robot's current position and direction.

All commands are case-sensitive and must be in uppercase.

### Example

```
PLACE 0,0,NORTH
MOVE
REPORT
```

Output:
```
0,1,NORTH
```
