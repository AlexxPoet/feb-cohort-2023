function costOfGroceries(groceries) {
    let total = 0;

    for(let i = 0; i < groceries.length; i++){
      let item = groceries[i];

      if(item === 'butter'){
           total +=1;
     }if(item === 'eggs'){
           total += 2;
     }if(item === 'milk'){
           total += 3;
     }if(item === 'bread'){
           total += 4;
     }if(item === 'cheese'){
           total += 5;
     }
    }
    return total
  }

  function mostExpensiveGroceries(groceriesList) {
    let highest = -Infinity;
    let highestIndex = 0;

    for (let i = 0; i < groceriesList.length; i++) {
        const groceryList = groceriesList[i];
        const listCost = costOfGroceries(groceryList);

        if (listCost > highest) {
        highest = listCost;
        highestIndex = i;
        }
    }
    console.log(highestIndex);
    return highestIndex;

}

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
