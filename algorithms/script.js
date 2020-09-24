// Треугольник
str = "#"
for (let i = 1; i <= 7; i++){
    console.log(str);
    str += "#"; 
}
// FizzBuzz
for (let i = 1; i <=100; i++){
    if (i % 3 == 0 && i % 5 ==0){
        console.log("FizzBuzz");
        continue;
    }
    else if (i % 3 == 0){
        console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 !==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
     
}
// Шахматная доска
let desc = "";
let xParam = prompt("Длина по \"x\"?");
let yParam = prompt("Дина по \"y\"?");

for (let i = 1; i <= yParam; i++){
    for (let j = 1; j <= xParam; j++){
        if (i % 2 !== 0 && j % 2 !== 0){
            desc += "#";
            continue;
        }
        if (i % 2 !== 0 && j % 2 == 0){
                desc += " ";
                continue;     
        }
        if (i % 2 == 0 && j % 2 !== 0) {
            desc += " ";
            continue;
        }
        if (i % 2 == 0 && j % 2 == 0){
            desc += "#";
            continue;
        }
    }
    desc += "\n";
}
console.log(desc);
// Пузырёк
let arr = [];

for (let i = 0; i <= 10; i++){
    arr[i] = Math.round(Math.random()*100);
}
console.log("Arrey  " + arr);

for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
}
console.log("Sorted  " + arr);

// Бинарный поиск
console.log("Бинарный поиск");

let findedIndex;
let list = [];
let item = prompt("Введите искомое число");

for (let i = 0; i <= 10; i++){
    list[i] = Math.round(Math.random()*100);
}

function binary_search(list, item) {
    
}


