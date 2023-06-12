# Logo Generator

This script generates a custom logo based on user input using SVG (Scalable Vector Graphics). The logo consists of a shape and text, which can be customized according to user preferences.

# Prerequisites
Before running the script, make sure you have the following dependencies installed:

- inquirer
- fs
- svg.js
- jest (for running the test)
You can install these dependencies by running the following command:
`npm install inquirer fs svg.js jest`

# Usage
To generate a logo, run the script by executing the following command:
`node logo-generator.js`

The script will prompt you to enter the following information:
- Characters: Enter up to three characters that will be displayed in the logo.
- Text Color: Select a color for the text from the available options.
- Shape: Select a shape for the logo from the available options (circle, triangle, square).
- Shape Color: Select a color for the shape from the available options. Note that the shape color cannot be the same as the text color.

After providing the required information, the script will generate an SVG file with the custom logo and save it in the examples folder. The SVG file will be named using a timestamp to ensure uniqueness.

# Examples
Here's an example of how to use the script:
`const generateLogo = require("./logo-generator");
generateLogo();
`

# Video Tutorial
For a visual guide on using the script, you can watch the video tutorial available at this [Link](https://drive.google.com/file/d/1aLwB6wg2KFfPoiH8aFDnfq08dWia9Uty/view)

# Testing
To run the test for logo generation, execute the following command:
`npm test`

The test uses the `jest` library to mock user input and file system functions. It verifies that the script writes the expected file using `fs.writeFileSync`.

# License

This script is licensed under the MIT License. Feel free to modify and use it according to your needs.

