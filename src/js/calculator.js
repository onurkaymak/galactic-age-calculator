export class Calculator {
    constructor(age) {
        this.earth = {
            earthAge: age
        };
    }

    calcForPlanet() {
        const mercuryYearInEarth = .24;
        const venusYearInEarth = .62;
        const marsYearInEarth = 1.88;
        const jupiterYearInEarth = 11.86;

        let inMercuryYear = Math.round((this.earth.earthAge / mercuryYearInEarth));
        let inVenusYear = Math.round((this.earth.earthAge / venusYearInEarth));
        let inMarsYear = Math.round((this.earth.earthAge / marsYearInEarth));
        let inJupiterYear = Math.round((this.earth.earthAge / jupiterYearInEarth));

        this.mercury = { ageInMercury: inMercuryYear };
        this.venus = { ageInVenus: inVenusYear };
        this.mars = { ageInMars: inMarsYear };
        this.jupiter = { ageInJupiter: inJupiterYear };
    }
}

