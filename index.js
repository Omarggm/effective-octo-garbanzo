const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("svg.js");

async function generateLogo() {
return inquirer
  .prompt([
    {
      name: "characters",
      message: "Enter up to three characters",
      type: "input",
      validate: function (input) {
        if (input.length > 3) {
          return "You must use three characters or less";
        }
        return true;
      },
    },
    {
      name: "textColor",
      message: "Please select a color for the text",
      type: "list",
      choices: [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "black",
        "white",
      ],
    },
    {
      name: "shape",
      message: "Please select a shape",
      type: "list",
      choices: ["circle", "triangle", "square"],
    },
    {
      name: "shapeColor",
      message: "Please select a color for the shape",
      type: "list",
      choices: function (answers) {
        // Filter out the text color choice from the shape color choices
        return [
          "red",
          "blue",
          "green",
          "yellow",
          "orange",
          "purple",
          "black",
          "white",
        ].filter((color) => color !== answers.textColor);
      },
    },
  ])
  .then((answers) => {
    console.log(answers);
    const { characters, textColor, shape, shapeColor } = answers;

    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

    switch (shape) {
      case "circle":
        svgContent += `<circle cx="150" cy="100" r="50" fill="${shapeColor}"/>`;
        break;
      case "triangle":
        svgContent += `<polygon points="150,50 100,150 200,150" fill="${shapeColor}"/>`;
        break;
      case "square":
        svgContent += `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}"/>`;
        break;
    }

    const textX = 150;
    const textY = 120;
    const textAnchor = "middle";

    svgContent += `<text x="${textX}" y="${textY}" fill="${textColor}" text-anchor="${textAnchor}">${characters}</text>`;
    svgContent += `</svg>`;

    const folderPath = "./examples";
    const timestamp = Date.now();
    const fileName = `logo_${timestamp}.svg`;
    const filePath = `${folderPath}/${fileName}`;

    fs.writeFileSync(filePath, svgContent, "utf-8");
    console.log("SVG created successfully");
  });
}

module.exports = generateLogo;

generateLogo();


