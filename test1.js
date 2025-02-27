var sumThreeNumbers = function (a, b, c) {
    return a + b + c;
};
var result = sumThreeNumbers(5, 10, 15);
console.log("\u0421\u0443\u043C\u043C\u0430 \u0442\u0440\u0435\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(result));
var numberConst = 42; // Число
var stringVar = "Hello, ICT!";
var booleanConst = true;
var arrayVar = [1, 2, 3, 4, 5];
var objectConst = { name: "Stepan", age: 20 };
var nullableVar = null;
var anyVar = { message: "Приветики" };
var dateVar = new Date();
console.log(numberConst, stringVar, booleanConst, arrayVar, objectConst, nullableVar, anyVar, dateVar);
var data = {
    id: 6203,
    e1: 12345,
    e2: "Поле 2",
};
var jsonString = JSON.stringify(data);
console.log("JSON \u0441\u0442\u0440\u043E\u043A\u0430: ".concat(jsonString));