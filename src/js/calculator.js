export class Calculator {
    constructor(age) {
        this.solarYearDifferences = {
            mercury: .24,
            venus: .62,
            mars: 1.88,
            jupiter: 11.86
        };
        this.earth = {
            earthAge: age
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
        let pastYearInMercury = (this.earth.earthAge - pastYear) / .24;
        let pastYearInVenus = (this.earth.earthAge - pastYear) / .62;
        let pastYearInMars = (this.earth.earthAge - pastYear) / 1.88;
        let pastYearInJupiter = (this.earth.earthAge - pastYear) / 11.86;

        this.earth.yearPassedSince = {
            message: `It has been ${pastYearInEarth} years passed, since your birthday of ${pastYear} in planet Earth!`
        };

        this.mercury = {
            yearPassedSince: {
                message: `It has been ${Math.floor(pastYearInMercury * 100) / 100} years passed, since your birthday of ${Math.round((pastYear / this.solarYearDifferences.mercury))} in planet Mercury!`
            }
        };

        this.venus = {
            yearPassedSince: {
                message: `It has been ${Math.floor(pastYearInVenus * 100) / 100} years passed, since your birthday of ${Math.round((pastYear / this.solarYearDifferences.venus))} in planet Venus!`
            }
        };

        this.mars = {
            yearPassedSince: {
                message: `It has been ${Math.floor(pastYearInMars * 100) / 100} years passed, since your birthday of ${Math.round((pastYear / this.solarYearDifferences.mars))} in planet Mars!`
            }
        };

        this.jupiter = {
            yearPassedSince: {
                message: `It has been ${Math.floor(pastYearInJupiter * 100) / 100} years passed, since your birthday of ${Math.round((pastYear / this.solarYearDifferences.jupiter))} in planet Jupiter!`
            }
        };
    }

    futureBirthday(yearInFuture) {
        let yearsLeftForBdayinEarth = yearInFuture - this.earth.earthAge;
        let yearsLeftForBdayinMercury = (yearInFuture - this.earth.earthAge) / .24;
        let yearsLeftForBdayinVenus = (yearInFuture - this.earth.earthAge) / .62;
        let yearsLeftForBdayinMars = (yearInFuture - this.earth.earthAge) / 1.88;
        let yearsLeftForBdayinJupiter = (yearInFuture - this.earth.earthAge) / 11.86;

        this.earth.futureBirthday = {
            message: `You have ${yearsLeftForBdayinEarth} years left to turn in ${yearInFuture} in planet Earth!`
        };

        this.mercury = {
            futureBirthday: {
                message: `You have ${Math.floor(yearsLeftForBdayinMercury * 100) / 100} years left to turn in ${Math.round((yearInFuture / this.solarYearDifferences.mercury))} in planet Mercury!`
            }
        };

        this.venus = {
            futureBirthday: {
                message: `You have ${Math.floor(yearsLeftForBdayinVenus * 100) / 100} years left to turn in ${Math.round((yearInFuture / this.solarYearDifferences.venus))} in planet Venus!`
            }
        };

        this.mars = {
            futureBirthday: {
                message: `You have ${Math.floor(yearsLeftForBdayinMars * 100) / 100} years left to turn in ${Math.round((yearInFuture / this.solarYearDifferences.mars))} in planet Mars!`
            }
        };

        this.jupiter = {
            futureBirthday: {
                message: `You have ${Math.floor(yearsLeftForBdayinJupiter * 100) / 100} years left to turn in ${Math.round((yearInFuture / this.solarYearDifferences.jupiter))} in planet Jupiter!`
            }
        };
    }
}

