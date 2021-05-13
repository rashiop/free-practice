// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function getPrimeFactors(num) {
  let factors = {}
  for (let prime=2; prime<=num; prime++) {
    while(num%prime==0) {
      num = num/prime;
      factors[prime] = factors[prime] == null ? 1 : factors[prime] + 1
    }
  }
  return factors;
}

function smallestCommons(arr) {
  const [start, end] = arr;
  const range = start>end ? [end, start] : [start,end]
  let primeFactors = {}
  for(let i=range[0]; i<=range[1]; i++) {
    const primes = getPrimeFactors(i)
    for (let prime in primes) {
      if (!primeFactors[prime] || primeFactors[prime] < primes[prime]) {
        primeFactors[prime] = primes[prime]
      }
    }
  }

  
  let common = 1;
  for (let prime in primeFactors) {
    common = common * (prime**primeFactors[prime])
  }
  return common
  
}

console.log(smallestCommons([23, 18]))