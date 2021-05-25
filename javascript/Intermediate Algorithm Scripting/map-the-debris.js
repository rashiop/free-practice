// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

/*
  The formula is T = 2*pi*sqrt(r^3/GM)
  where
    r = earthRadius + avgAlt
    (which is the distance from midpoint of the earth to the object)
    T = Orbital Period
*/

const getOrbitalPeriod = (r, GM) => {
  return Math.round(2*Math.PI*(r**3/GM)**0.5)
}
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => ({
    name,
    orbitalPeriod: getOrbitalPeriod(earthRadius + avgAlt, GM)
  }));
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);