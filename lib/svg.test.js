const SVG = require('./svg.js');

const { Square, Circle } = require('./shapes.js');
const exp = require('constants');

describe('SVG', () => {
    it('should render svg element', () => {
        const newSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"></svg>`;
        const svg = new SVG();
        const actualSVG = svg.render();
        expect(actualSVG).toBe(newSVG);
    })
    
    it('should add text to logo', () => {
        const newSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">BOB</text></svg>`;
        const svg = new SVG();
        svg.setText('BOB', 'black');
        const actualSVG = svg.render();
        expect(actualSVG).toBe(newSVG);
    })

    it('should add color to text', () => {
        const newSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">GAG</text></svg>`;
        const svg = new SVG();
        svg.setText('GAG', 'red');
        const actualSVG = svg.render();
        expect(actualSVG).toBe(newSVG);
    })

    it('should render a shape', () => {
        const newSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy ="105" r="80" fill=""/></svg>`;
        const svg = new SVG();
        const circle = new Circle();
        svg.setShape(circle);
        const actualSVG = svg.render();
        expect(actualSVG).toBe(newSVG);
    })

    it('should render a shape with color', () => {
        const newSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="35" width="140" height="140" fill="red"/></svg>`;
        const svg = new SVG;
        const square = new Square();
        square.setColor('red');
        svg.setShape(square);
        const actualSVG = svg.render();
        expect(actualSVG).toBe(newSVG);
    })

    it('should show error if text over 3 characters', () => {
        const newError = new Error("Text can't be over 3 characters")
        const svg = new SVG();
        const actualSVG = () => svg.setText('BOBBY')
        expect(actualSVG).toThrow(newError);
    })

    it('should show error if invalid color is chosen for the shape', () => {
        const newError = new Error('Invalid color');
        const svg = new SVG();
        const square = new Square();
        const invalidColor = 'invalid_color'; 
        const actualSVG = () => {
            svg.setShape(square, invalidColor); 
            svg.render();
        };
        expect(actualSVG).toThrow(newError);
    });

    it('should show error if invalid color is chosen for the text', () => {
        const svg = new SVG();
        const invalidColor = 'invalid_color';
        const expectedError = new Error('Invalid color');
        const actualSVG = () => {
        svg.setText('BOB', invalidColor);
    };
        expect(actualSVG).toThrow(expectedError);
});
    
})
