const inquirer = require("inquirer");
const fs = require("fs");

// Mock the user input
const mockUserInput = {
  characters: "ABC",
  textColor: "blue",
  shape: "circle",
  shapeColor: "red",
};

// Mock the file system functions
jest.mock("fs");

// Import the script
const generateLogo = require("../index.js");

describe("Logo Generation", () => {
  it("generates an SVG logo with the provided input", async () => {
    // Mock the inquirer prompt with the mock user input
    inquirer.prompt = jest.fn().mockResolvedValue(mockUserInput);

    // Run the script
    await generateLogo();

    // Verify the expected file was written
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      "utf-8"
    );
  });
});
