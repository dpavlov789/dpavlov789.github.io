let favoriteFood = "pasta";    // ваша любимая еда
let favoriteDrink = "beer";   // ваш любимый напиток  
let foodCount = 1;         // сколько раз в неделю едите эту еду (число)

console.log("=== МОИ ВКУСНЫЕ ПРЕДПОЧТЕНИЯ ===");
console.log("Любимая еда: " + favoriteFood);
console.log("Любимый напиток: " + favoriteDrink);
console.log("Я ем " + favoriteFood + " и пью " + favoriteDrink + " раза в неделю");

// Проверка (если больше 2 раз - "часто", иначе - "редко")
if (foodCount > 2) {
    console.log("Я часто ем " + favoriteFood);
} else {
    console.log("Я редко ем " + favoriteFood);
}

// Считаем сколько раз в год (умножаем на 52 недели)
let timesPerYear = foodCount * 52;
console.log("За год я съедаю " + favoriteFood + " примерно " + timesPerYear + " раз!");