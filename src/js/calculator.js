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

        let inMercuryYear = Math.round((this.earth.earthAge / mercuryYearInEarth));
        let inVenusYear = Math.round((this.earth.earthAge / venusYearInEarth));
        let inMarsYear = Math.round((this.earth.earthAge / marsYearInEarth));

        this.mercury = { ageInMercury: inMercuryYear };
        this.venus = { ageInVenus: inVenusYear };
        this.mars = { ageInMars: inMarsYear };
    }
}

