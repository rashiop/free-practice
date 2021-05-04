// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

const getPower = (base, result) => {
  const pow = Math.log(result) / Math.log(base)
  return Math.floor(pow);
}

const mappedPrime = ([start, end]) => {
  let prime = {};
  for (let num=start; num<=end; num++) {
    if (num<4) {
      prime[num] = 1;
    } else {
      let flag = true;
      for (let j=2; j<=Math.ceil(num/2); j++) {
        if (num%j == 0) {
          flag = false;
          if (prime[j]) prime[j] = getPower(j, num)
        }
      }
      if(flag) prime[num] = 1;
    }
  }
  return prime;
}

function smallestCommons(arr) {
  const [start, end] = arr;
  const range = start>end ? [end, start] : [start,end]
  const prime = mappedPrime(range);
  return Object.entries(prime).reduce((multi, [base, power]) => multi*(base**power), 1)
}

smallestCommons([2, 10])