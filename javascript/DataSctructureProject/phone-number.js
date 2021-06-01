// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
function telephoneCheck( str ) {
  const areaRegex = /^(1 |1)/;
  const phoneNumber = str.replace( areaRegex, '' )
  const phoneRegex = /^(\d{3}|\(\d{3}\))[- ]{0,1}(\d{3})[- ]{0,1}(\d{4})$/;
  return phoneRegex.test( phoneNumber );
}

telephoneCheck( "555-555-5555" );