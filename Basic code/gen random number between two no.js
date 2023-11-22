function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

// logic

// suppose i want to generate random  number between 4 and 10

// -> SO ,The number cannot be less than 4 and the maximum number should be equal to 10 not more than that .

// note  - the starting number should be from minimum so i have to add minimum on the the random number i am getting from math.random so that it starts from
// AND also max number should be equal to the highest number generated .

/* 
steps

1) multiply by the difference of max-min number so that we get number

for ex - max =10 , min =4 
so , now we get number from 0 to 10-4 

2) now in that we add min so that we get number from 4 to 10
*/

console.log(randomRange(4, 10));
