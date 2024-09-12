const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: (input) => input.length <= 3 || 'Text must be 3 characters or fewer!',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
];

function generateLogo({ text, textColor, shape, shapeColor }) {
  let selectedShape;
  switch (shape) {
    case 'Circle':
      selectedShape = new Circle(shapeColor);
      break;
    case 'Triangle':
      selectedShape = new Triangle(shapeColor);
      break;
    case 'Square':
      selectedShape = new Square(shapeColor);
      break;
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
}

inquirer.prompt(questions).then(answers => generateLogo(answers));
