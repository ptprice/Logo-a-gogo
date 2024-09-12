const { Circle, Triangle, Square } = require('./shapes');

describe('Shape rendering', () => {
  test('Circle should render correctly', () => {
    const shape = new Circle('blue');
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('Triangle should render correctly', () => {
    const shape = new Triangle('red');
    expect(shape.render()).toBe('<polygon points="150,20 280,180 20,180" fill="red" />');
  });

  test('Square should render correctly', () => {
    const shape = new Square('green');
    expect(shape.render()).toBe('<rect x="70" y="30" width="160" height="160" fill="green" />');
  });
});
