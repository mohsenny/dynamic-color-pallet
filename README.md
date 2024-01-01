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
- `--random`: Generates a canvas with a random color palette. The default would be 5 colors. 
- `--count {number}`: Generates a canvas with a color palette for the given number of colors. (`{number} > 3`)

Without any options, the script will read color values from `assets/colors.txt`.

### colors.txt Format
Each line should contain one color in hexadecimal format, starting with `#`. For example:
```
#FF5733
#38FF57
#A357E2
```

### Examples
```bash
node ./app.js 
node ./app.js --random
node ./app.js --random --count 7
```

## Output
The script generates an image file (`palette.png`) in the `output` directory, showcasing the color palettes in various formats.

### Example Outputs

![1](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/6a917ff9-edba-427c-b707-e10668d4b226)  ![2](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/d02298bc-a2ba-4f99-8584-86c387865d4b)
![3](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/459856df-e1bc-4abf-8f37-0d432051a76d)  ![4](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/eb9c2df8-54d6-4df6-8a1a-73e2ddf8a3c2)
![5](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/2d8b9be5-370f-4994-b08d-551dd60d9cf5)  ![6](https://github.com/mohsenny/dynamic-color-pallet/assets/1129811/170c512d-4185-4f48-b030-d15aa526bd6c)

## Customization
You can customize the canvas size, module placement, and color palette formats by modifying the `canvasManager.js` and individual module files.
