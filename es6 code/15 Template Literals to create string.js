const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
 
// failureItems.push('<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>')

result.failure.forEach((curr)=>{
failureItems.push(`<li class="text-warning">${curr}</li>`
  )
});
// we could also have used any other loop to traverse the array .


  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);