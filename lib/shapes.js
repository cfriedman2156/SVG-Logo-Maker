class Shapes {
    constructor() {
        this.color = ""; 
    }

    setColor(color) {
        this.color = color
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy ="105" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="80" y="35" width="140" height="140" fill="${this.color}"/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}"/>`
    }
}

module.exports = { Circle, Square, Triangle };