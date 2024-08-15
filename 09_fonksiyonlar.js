function merhaba(){
    console.log("Hello, world!");
}

// merhaba();

const topla = function(){
   return 4 + 5
}

// console.log(topla());

let cikarma = () => 9 - 5;


// console.log(cikarma());

function carpma(a, b, c = 5){
    return a * b * c
}

console.log(carpma(2, 3));