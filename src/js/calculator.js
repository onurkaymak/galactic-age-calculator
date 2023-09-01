export class Calculator {
    constructor(age) {
        this.earth = {
            earthAge: age
        };
    }

    calcForPlanet() {
        const mercuryYearInEarth = .24;
        let inMercuryYear = Math.round((this.earth.earthAge / mercuryYearInEarth));
        this.mercury = { ageInMercury: inMercuryYear };
    }
}

