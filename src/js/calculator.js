export class Calculator {
    constructor(age) {
        this.earth = {
            earthAge: age
        };
        this.solarYearDifferences = {
            mercury: .24,
            venus: .62,
            mars: 1.88,
            jupiter: 11.86
        };
    }

    calcForPlanet() {
        let inMercuryYear = Math.round((this.earth.earthAge / this.solarYearDifferences.mercury));
        let inVenusYear = Math.round((this.earth.earthAge / this.solarYearDifferences.venus));
        let inMarsYear = Math.round((this.earth.earthAge / this.solarYearDifferences.mars));
        let inJupiterYear = Math.round((this.earth.earthAge / this.solarYearDifferences.jupiter));

        this.mercury = { ageInMercury: inMercuryYear };
        this.venus = { ageInVenus: inVenusYear };
        this.mars = { ageInMars: inMarsYear };
        this.jupiter = { ageInJupiter: inJupiterYear };
    }

    pastYears(pastYear) {
        let pastYearInEarth = this.earth.earthAge - pastYear;

        this.earth.yearPassedSince = {
            message: `It has been ${pastYearInEarth} years passed, since your birthday of ${pastYear} in planet Earth!`
        };
    }
}

