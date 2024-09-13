// Base class representing the shape
class Shape {
  constructor(color) {
    // The color property is used to fill the shape
    this.color = color;
  }
}

// Circle class that extends the Shape class
class Circle extends Shape {
  // Render method returns an SVG string representing a circle
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Triangle class that extends the Shape class
class Triangle extends Shape {
  // Render method returns an SVG string representing a triangle
  render() {
    return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
  }
}

// Square class that extends the Shape class
class Square extends Shape {
  // Render method returns an SVG string representing a square
  render() {
    return `<rect x="70" y="30" width="160" height="160" fill="${this.color}" />`;
  }
}

// Export the Circle, Triangle, and Square classes for use in other modules
module.exports = { Circle, Triangle, Square };
