export class Calculator {
    constructor(age) {
        this.age = age;
    }

    calcForPlanet() {
        const mercuryYearInEarth = .24;
        let planetYear = this.age / mercuryYearInEarth;
        return Math.round(planetYear);
    }
}