// Importing the Circle, Triangle, and Square classes from the 'shapes' module
const { Circle, Triangle, Square } = require("./shapes");

// Grouping related tests under a single description for shape rendering
describe("Shape rendering", () => {
  // Test to check if the Circle class renders the correct SVG string
  test("Circle should render correctly", () => {
    // Create a new Circle instance with color 'blue'
    const shape = new Circle("blue");

    // Check if the render method returns the correct SVG string for the circle

    expect(shape.render()).toBe(
      '<circle cx="150" cy="100" r="80" fill="blue" />'
    );
  });

  // Test to check if the Triangle class renders the correct SVG string
  test("Triangle should render correctly", () => {
    // Create a new Triangle instance with color 'red'
    const shape = new Triangle("red");

    // Check if the render method returns the correct SVG string for the triangle

    expect(shape.render()).toBe(
      '<polygon points="150,20 280,180 20,180" fill="red" />'
    );
  });

  // Test to check if the Square class renders the correct SVG string
  test("Square should render correctly", () => {
    // Create a new Square instance with color 'green'
    const shape = new Square("green");

    // Check if the render method returns the correct SVG string for the square

    expect(shape.render()).toBe(
      '<rect x="70" y="30" width="160" height="160" fill="green" />'
    );
  });
});
