const sumThreeNumbers = (a: number, b: number, c: number): number => {
    return a + b + c;
};

const result = sumThreeNumbers(5, 10, 15);
console.log(`Сумма трех чисел: ${result}`);

const numberConst: number = 42; // Число
let stringVar: string = "Hello, ICT!";
const booleanConst: boolean = true;
let arrayVar: number[] = [1, 2, 3, 4, 5];
const objectConst: { name: string; age: number } = { name: "Nikita", age: 20 };
let nullableVar: null = null;
const anyVar: any = { message: "Приветики" };
const dateVar: Date = new Date();

console.log(numberConst, stringVar, booleanConst, arrayVar, objectConst, nullableVar, anyVar, dateVar);

interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
}

const data: ToJsonStringify = {
    id: 6203,
    e1: 12345,
    e2: "Поле 2",
};

const jsonString = JSON.stringify(data);
console.log(`JSON строка: ${jsonString}`);