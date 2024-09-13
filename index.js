// Import necessary modules
const fs = require("fs"); // For writing the SVG file
const inquirer = require("inquirer"); // For prompting user input
const { Circle, Triangle, Square } = require("./lib/shapes"); // Importing the shape classes

// Questions to prompt the user for logo details
const questions = [
  {
    type: "input", // User input for the logo text
    name: "text",
    message: "Enter up to three characters for the logo:",
    // Validate that the input is 3 characters or fewer
    validate: (input) =>
      input.length <= 3 || "Text must be 3 characters or fewer!",
  },
  {
    type: "input", // User input for the text color
    name: "textColor",
    message: "Enter text color (keyword or hexadecimal):",
  },
  {
    type: "list", // User selects a shape from a list of options
    name: "shape",
    message: "Choose a shape for the logo:",
    choices: ["Circle", "Triangle", "Square"], // Options for the shape
  },
  {
    type: "input", // User input for the shape color
    name: "shapeColor",
    message: "Enter the shape color (keyword or hexadecimal):",
  },
];

// Function to generate the logo based on user input
function generateLogo({ text, textColor, shape, shapeColor }) {
  let selectedShape;

  // Switch case to create the selected shape instance based on user input
  switch (shape) {
    case "Circle":
      selectedShape = new Circle(shapeColor);
      break;
    case "Triangle":
      selectedShape = new Triangle(shapeColor);
      break;
    case "Square":
      selectedShape = new Square(shapeColor);
      break;
  }

  // Generate the SVG content with the selected shape and text
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}  <!-- Render the selected shape -->
      <!-- Render the text in the center of the SVG -->
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  // Write the generated SVG content to a file called 'logo.svg'
  fs.writeFileSync("logo.svg", svgContent.trim());
  console.log("Generated logo.svg"); // Notify the user that the file has been created
}

// Prompt the user with the questions and generate the logo based on their answers
inquirer.prompt(questions).then((answers) => generateLogo(answers));
