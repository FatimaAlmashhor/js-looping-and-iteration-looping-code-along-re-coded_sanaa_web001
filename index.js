// Code your solutions in this file
function writeCards(arr , even) {
  let thanks = [];
  for(let i = 0 ; i < arr.length ; i++){
<<<<<<< HEAD
    thanks[i]=`Thank you, ${arr[i]}, for the wonderful ${even} gift!`;
=======
    thanks[i]=`thank you, ${arr[i]}, for the wonderful ${even} gift!`;
>>>>>>> 62b9c96edff355b846200b6f39e0fe696e58022d
  }


  return thanks;
}

function countDown(num) {
  for(let i = num ; i >= 0 ; i--){
    console.log(i)
  }
}
countDown(10) ;

let arr = writeCards(["Lisa", "Kaitlin", "Jon"], "surprise");
console.log(arr);
// writeCards(["Ada", "Brendan", "Ali"], "surprise");
// // writeCards([...arr ,"Ada", "Brendan", "Ali"], "birthday");
// console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"))
