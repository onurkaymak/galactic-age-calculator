export class Calculator {
    constructor(age) {
        this.earth = {
            earthAge: age
        };
    }

    calcForPlanet() {
        const mercuryYearInEarth = .24;
        const venusYearInEarth = .62;

        let inMercuryYear = Math.round((this.earth.earthAge / mercuryYearInEarth));
        let inVenusYear = Math.round((this.earth.earthAge / venusYearInEarth));

        this.mercury = { ageInMercury: inMercuryYear };
        this.venus = { ageInVenus: inVenusYear };
    }
}

