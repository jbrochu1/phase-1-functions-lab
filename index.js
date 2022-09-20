function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) * 264;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);
    if (feetTraveled <= 400) {
        return 0;}
        else if (feetTraveled > 2500) {
            return "cannot travel that far";
        }
        else if (feetTraveled > 400 && feetTraveled <= 2000) {
            return (feetTraveled - 400) * 0.02;
        }
        else if (feetTraveled > 2000 && feetTraveled < 2500) {
            return 25;
        };
}
