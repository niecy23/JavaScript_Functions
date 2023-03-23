console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for(let i = 1; i <= count; i++){
        if(i % 2 == 1){
            console.log(i);
        } else {
            continue;
        }
    }
    if(count <= 0){
        console.log(count);
    }
}

printOdds(15);
printOdds(50);
printOdds(-15);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge (userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(userName == "" || age == null){
        console.log("You are missing a name or age. Please enter both a name and age.")
    }

    else if(userName != "" && age <= 16){
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge(34);
checkAge("Chanise", 34);
checkAge("Tracy", 21);
checkAge("Sean");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
  if (x > 0 && y > 0) {
    return "Quadrant 1";
  } else if (x < 0 && y > 0) {
    return "Quadrant 2";
  } else if (x < 0 && y < 0) {
    return "Quadrant 3";
  } else if (x > 0 && y < 0) {
    return "Quadrant 4";
  } else if (x == 0 && y != 0) {
    return "On X-axis";
  } else if (x != 0 && y == 0) {
    return "On Y-axis";
  } else {
    return "Origin";
  }
}

console.log(whichQuadrant(1, 2));
console.log(whichQuadrant(-1, 2));
console.log(whichQuadrant(-1, -2));
console.log(whichQuadrant(1, -2));
console.log(whichQuadrant(0, 2));
console.log(whichQuadrant(1, 0));
console.log(whichQuadrant(0, 0));

// // Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function validTriangle(num1, num2, num3){
  return num1 + num2 > num3 && num2 + num3 > num1 && num1 + num3 > num2;
}

function typeOfTriangle(num1, num2, num3) {
  let isValid = validTriangle(num1, num2, num3)
  if(isValid){
    if (num1 == num2 && num2 == num3) {
      return "Equilateral";
    } else if (num1 == num2 || num1 == num3 || num2 === num3) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  } else {
    return "Not a valid triangle.";
  }
}

console.log(typeOfTriangle(1, 1, 1));
console.log(typeOfTriangle(2, 3, 4));
console.log(typeOfTriangle(1, 1, 2));
console.log(typeOfTriangle(1, 2, 2));

