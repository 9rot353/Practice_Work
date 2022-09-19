function sumIntegers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  }

  const N = 100; // The input to the function
const start = process.hrtime.bigint(); // Note the start time

const answer = sumIntegers(N); // Call the function

const end = process.hrtime.bigint(); // Note the end time

console.log(`Summing ${N} numbers took ${end - start} nanoseconds`);