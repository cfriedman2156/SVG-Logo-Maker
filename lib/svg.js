const validColorRegex = /^(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}|[a-zA-Z]+)$/;

class SVG {
    constructor() {
        this.shapeElement = "";
        this.textElement = "";
    }

    render () {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }

    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error("Text can't be over 3 characters")
        }
        if (!validColorRegex.test(textColor)) {
            throw new Error(`Invalid color`);
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    setShape(shape, shapeColor) {
        if (!validColorRegex.test(shapeColor)) {
            throw new Error(`Invalid color`);
        }
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;