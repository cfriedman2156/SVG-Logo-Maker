const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Circle, Triangle} = require('./shapes');
const SVG = require('./svg');
const { writeFile } = require('fs/promises');

class Questions {
    run() {
        const questions = [
            {
                type: 'input',
                name: 'text',
                message: 'Enter three characters for your logo text'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter your text color'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose your shape',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter your shape color'
            },
        ]
        
        return inquirer.prompt(questions).then(({text, textColor, shape, shapeColor}) => {
            let newShape;
            if (shape === 'circle') {
                newShape = new Circle();
            } else if (shape === 'square') {
                newShape = new Square();
            } else if (shape === 'triangle') {
                newShape = new Triangle();
            }

            newShape.setColor(shapeColor);

            const svg = new SVG();
            svg.setShape(newShape);
            svg.setText(text, textColor);

            return writeFile('./examples/logo.svg', svg.render())
        }).then(() => {
            console.log('Logo SVG file generated!')
        }).catch((err) => {
            console.log('Error!!!!', err)
        })
    }
}

module.exports = Questions;