// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly  
  let fullName = firstAndLast;
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
  this.getLastName = function() {
    return fullName.split(' ')[1];
  }
  this.getFullName = function() {
    return fullName;
  }
  this.setFirstName = function(first) {
    const [_, lastName] = fullName.split(' ')
    fullName = first + ' ' + lastName
  }
  this.setLastName = function(last) {
    const [firstName, _] = fullName.split(' ')
    fullName = firstName + ' ' + last
  }

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();