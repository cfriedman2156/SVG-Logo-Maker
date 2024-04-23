const { Circle, Square, Triangle } = require("./shapes.js");

describe('Circle', () => {
    it('should render a circle', () => {
        const logo = '<circle cx="150" cy ="105" r="80" fill=""/>';
        const circle = new Circle();
        const svg = circle.render();
        expect(svg).toBe(logo);
    })

    it('should correctly change color', () => {
        const logo = '<circle cx="150" cy ="105" r="80" fill="red"/>';
        const circle = new Circle();
        circle.setColor('red');
        const svg = circle.render();
        expect(svg).toBe(logo);
    })
})

describe('Square', () => {
    it('should render a square', () => {
        const logo = '<rect x="80" y="35" width="140" height="140" fill=""/>';
        const square = new Square();
        const svg = square.render();
        expect(svg).toBe(logo);
    })

    it('should correctly change color', () => {
        const logo = '<rect x="80" y="35" width="140" height="140" fill="red"/>';
        const square = new Square();
        square.setColor('red');
        const svg = square.render();
        expect(svg).toBe(logo);
    })

})

describe('Triangle', () => {
    it('should render a colored triangle', () => {
        const logo = '<polygon points="150, 18, 244, 182, 56, 182" fill=""/>';
        const triangle = new Triangle();
        const svg = triangle.render();
        expect(svg).toBe(logo);
    })

    it('should accept a color', () => {
        const logo = '<polygon points="150, 18, 244, 182, 56, 182" fill="red"/>';
        const triangle = new Triangle();
        triangle.setColor('red');
        const svg = triangle.render();
        expect(svg).toBe(logo);
    })
})