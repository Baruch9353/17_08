// Section 1: Variable Swap Without Temp
let a = "some string";
let b = "other string";

[a, b] = [b, a];

console.log(`a: ${a}, b: ${b}`);

// Section 2: 2D Grid Count
const grid = [
    ['X', 'O', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'x', 'X'],
    ['X', 'O', 'X', 'O', 'O'],
    ['O', 'O', 'x', 'X', 'O'],
    ['X', 'O', 'x', 'O', 'X']
];

let count = 0;

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 'X') {
            count++;
        }
    }
}

console.log(`Count of 'X': ${count}`);

// Section 3: Nested Object Read

let family = { parents: {}, children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }] };

console.log(`Third child’s name: ${family.children[2].name}`);

console.log(`All siblings: ${family.children.map(child => child.name).join(", ")}`);

// Section 4: Manual Reverse
let arr = [1, 2, 3, 4, 5];
let revers = [];

for (let i = arr.length - 1; i >= 0; i--) {
    revers.push(arr[i]);
}
console.log(revers);

// Section 5: Type Collector
const mixed = [42, "hi", true, null, { a: 1 }, "yo", false, 99, null];

let counts = { number:0, string:0, object:0, boolean:0, null:0 };

for (item of mixed){
    if (typeof item === 'number') {
        counts.number++;
    } else if (typeof item === 'string') {
        counts.string++;
    } else if (typeof item === 'object' && item !== null) {
        counts.object++;
    } else if (typeof item === 'boolean') {
        counts.boolean++;
    } else if (item === null) {
        counts.null++;
    }
}

// Section 6: Filter Without .filter()
const numbers = [50, 150, 200, 75, 120, 90, 300];
let filter = [];
let compar = 0;
for (let i = 0; i < numbers.length; i++) {
    compar++;
    if (numbers[i] > 100) {
        filter.push(numbers[i]);
    }
}

// Section 7: Conditional Object Filler
const result = { even: [], odd: [], divisible: 0 };
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        result.even.push(i);
    } else {
        result.odd.push(i);
    }
    if (i % 2 === 0 && i % 3 === 0) {
        result.divisible++;
    }
}   

// Section 8: Grid Checker
let gridi = [
  ['O','O','O'],
  ['O','O','O'],
  ['O','O','O']
];

for (let i = 0; i < 3; i++) {
  gridi[i][i] = '#';      
  gridi[i][2 - i] = '#';   
}
console.table(gridi);






