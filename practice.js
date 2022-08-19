let tea = {
    "serving size" : "8fl", 
    nutritionFacts : {
        totalFat : 0,
        sodium: 0,
        potassium: "20mg",
        totalCarbs: 0,
        protein: 0
    }
}

function findNutritionFact (food) {
return food.nutritionFacts
}

function findprotein (tea) {
    return findNutritionFact(tea).protein
}

console.log(findNutritionFact(tea))


console.log(findprotein(tea))

