# Dynamic Color Palette Visualizer

## Description
Color Palette Visualizer is a Node.js application that generates a canvas displaying various color palette representations. It supports both predefined color palettes (from a file) and randomly generated colors.

## Features
- Display color palettes in multiple visual formats (horizontal strip, circle palette, checkers, etc.).
- Option to generate random color palettes.
- Customizable canvas size and module placement.

## Installation
To set up the project, follow these steps:
1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd color-palette-visualizer`
3. Install dependencies: `npm install`

## Usage
Run the script with the following command:
```
node app.js [options]
```

Options:
- `--random`: Generates a canvas with a random color palette.

Without any options, the script will read color values from `assets/colors.txt`.

### colors.txt Format
Each line should contain one color in hexadecimal format, starting with `#`. For example:
```
#FF5733
#33FF57
#3357FF
```

## Output
The script generates an image file (`palette.png`) in the `output` directory, showcasing the color palettes in various formats.

### Example Outputs

![3](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/89705e7f-db56-4ade-99a3-2b970eb9ab20)

![5](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/77ccb7d2-abb1-4168-a8bc-c69b886f787f)

![2](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/64743e1b-6253-413c-8597-4bc9be1fa0b7)

## Customization
You can customize the canvas size, module placement, and color palette formats by modifying the `canvasManager.js` and individual module files.