const data = [
  {
    "id": 1,
    "foodname": "Apple",
    "calorie": 95,
    "category": "Fruit",
    "proteins": 0.3,
    "carbs": 25
  },
  {
    "id": 2,
    "foodname": "Banana",
    "calorie": 105,
    "category": "Fruit",
    "proteins": 1.3,
    "carbs": 27
  },
  {
    "id": 3,
    "foodname": "Orange",
    "calorie": 62,
    "category": "Fruit",
    "proteins": 1.2,
    "carbs": 15
  },
  {
    "id": 4,
    "foodname": "Pear",
    "calorie": 95,
    "category": "Fruit",
    "proteins": 0.5,
    "carbs": 25
  },
  {
    "id": 5,
    "foodname": "Grapefruit",
    "calorie": 42,
    "category": "Fruit",
    "proteins": 1.1,
    "carbs": 11
  },
  {
    "id": 6,
    "foodname": "Strawberry",
    "calorie": 46,
    "category": "Fruit",
    "proteins": 1.5,
    "carbs": 10
  },
  {
    "id": 7,
    "foodname": "Blueberry",
    "calorie": 52,
    "category": "Fruit",
    "proteins": 1.1,
    "carbs": 14
  },
  {
    "id": 8,
    "foodname": "Raspberry",
    "calorie": 52,
    "category": "Fruit",
    "proteins": 1.4,
    "carbs": 15
  },
  {
    "id": 9,
    "foodname": "Broccoli",
    "calorie": 34,
    "category": "Vegetable",
    "proteins": 3.3,
    "carbs": 5
  },
  {
    "id": 10,
    "foodname": "Cauliflower",
    "calorie": 25,
    "category": "Vegetable",
    "proteins": 2.6,
    "carbs": 5
  },
  {
    "id": 11,
    "foodname": "Green Beans",
    "calorie": 31,
    "category": "Vegetable",
    "proteins": 2.4,
    "carbs": 4
  },
  {
    "id": 12,
    "foodname": "Asparagus",
    "calorie": 20,
    "category": "Vegetable",
    "proteins": 2.2,
    "carbs": 2
  },
  {
    "id": 13,
    "foodname": "Spinach",
    "calorie": 23,
    "category": "Vegetable",
    "proteins": 3.5,
    "carbs": 4
  },
  {
    "id": 14,
    "foodname": "Kale",
    "calorie": 33,
    "category": "Vegetable",
    "proteins": 4.3,
    "carbs": 7
  },
  {
    "id": 15,
    "foodname": "Sweet Potato",
    "calorie": 103,
    "category": "Vegetable",
    "proteins": 2,
    "carbs": 27
  },
  {
    "id": 16,
    "foodname": "Potato",
    "calorie": 161,
    "category": "Vegetable",
    "proteins": 4.3,
    "carbs": 37
  },
  {
    "id": 17,
    "foodname": "Carrot",
    "calorie": 41,
    "category": "Vegetable",
    "proteins": 0.9,
    "carbs": 9
  },
  {
    "id": 18,
    "foodname": "Onion",
    "calorie": 40,
    "category": "Vegetable",
    "proteins": 1.4,
    "carbs": 9
  },
  {
    "id": 19,
    "foodname": "Egg",
    "calorie": 77,
    "category": "Protein",
    "proteins": 6.3,
    "carbs": 0.5
  },
  {
    "id": 20,
    "foodname": "Chicken Breast",
    "calorie": 165,
    "category": "Protein",
    "proteins": 31,
    "carbs": 0
  },
  {
    "id": 21,
    "foodname": "Salmon",
    "calorie": 206,
    "category": "Protein",
    "proteins": 22,
    "carbs": 0
  },
  {
    "id": 22,
    "foodname": "Tuna",
    "calorie": 179,
    "category": "Protein",
    "proteins": 39,
    "carbs": 0
  },
  {
    "id": 23,
    "foodname": "Beef",
    "calorie": 250,
    "category": "Protein",
    "proteins": 26,
    "carbs": 0
  },
  {
    "id": 24,
    "foodname": "Pork",
    "calorie": 242,
    "category": "Protein",
    "proteins": 26,
    "carbs": 0
  },
  {
    "id": 25,
    "foodname": "Lamb",
    "calorie": 294,
    "category": "Protein",
    "proteins": 25,
    "carbs": 0
  },
  {
    "id": 26,
    "foodname": "Shrimp",
    "calorie": 85,
    "category": "Protein",
    "proteins": 20,
    "carbs": 0.2
  },
  {
    "id": 27,
    "foodname": "Quinoa",
    "calorie": 120,
    "category": "Grain",
    "proteins": 4.4,
    "carbs": 21
  },
  {
    "id": 28,
    "foodname": "Brown Rice",
    "calorie": 216,
    "category": "Grain",
    "proteins": 4.5,
    "carbs": 45
  },
  {
    "id": 29,
    "foodname": "Oats",
    "calorie": 389,
    "category": "Grain",
    "proteins": 16.9,
    "carbs": 66
  },
  {
    "id": 30,
    "foodname": "Quinoa",
    "calorie": 120,
    "category": "Grain",
    "proteins": 4.4,
    "carbs": 21
  },
  {
    "id": 31,
    "foodname": "Bread",
    "calorie": 265,
    "category": "Grain",
    "proteins": 9.4,
    "carbs": 49
  },
  {
    "id": 32,
    "foodname": "Pasta",
    "calorie": 131,
    "category": "Grain",
    "proteins": 5.5,
    "carbs": 26
  },
  {
    "id": 33,
    "foodname": "Milk",
    "calorie": 60,
    "category": "Dairy",
    "proteins": 3.2,
    "carbs": 5.1
  },
  {
    "id": 34,
    "foodname": "Cheese",
    "calorie": 402,
    "category": "Dairy",
    "proteins": 25,
    "carbs": 2.4
  },
  {
    "id": 35,
    "foodname": "Yogurt",
    "calorie": 59,
    "category": "Dairy",
    "proteins": 3.5,
    "carbs": 5
  },
  {
    "id": 36,
    "foodname": "Butter",
    "calorie": 717,
    "category": "Dairy",
    "proteins": 0.9,
    "carbs": 0.1
  },
  {
    "id": 37,
    "foodname": "Almonds",
    "calorie": 579,
    "category": "Nuts",
    "proteins": 21,
    "carbs": 22
  },
  {
    "id": 38,
    "foodname": "Walnuts",
    "calorie": 654,
    "category": "Nuts",
    "proteins": 15,
    "carbs": 14
  },
  {
    "id": 39,
    "foodname": "Peanuts",
    "calorie": 567,
    "category": "Nuts",
    "proteins": 26,
    "carbs": 16
  },
  {
    "id": 40,
    "foodname": "Cashews",
    "calorie": 553,
    "category": "Nuts",
    "proteins": 18,
    "carbs": 30
  }
]

// Q1. list all the food items
data.forEach((item) => {
  // console.log(`Foodname: ${item.foodname}, Category: ${item.category}`)
})

// Q2. list all the food items with category vegetables
const vege = (data.filter((vegetable)=> vegetable.category.toLowerCase().includes("vegetable")))
// console.log(vege)

// Q3. list all the food items with category fruit
const fruit = (data.filter((fruit)=> fruit.category.toLowerCase().includes("fruit")))
// console.log(fruit)

// Q4. list all the food items with category protein
const protein = data.filter((food) => food.category.toLowerCase().includes("protein"));
// console.log(protein);

// Q5. list all the food items with category nuts
const nuts = (data.filter((nuts)=> nuts.category.toLowerCase().includes("nuts")))
// console.log(nuts)

// Q6. list all the food items with category grains
const grains = (data.filter((grains)=> grains.category.toLowerCase().includes("grain")))
// console.log(grains);

// Q7. list all the food items with category dairy
const dairy = (data.filter((dairy)=> dairy.category.toLowerCase().includes("dairy")))
// console.log(dairy);

// Q8. list all the food items with calorie above 100
const calAbove100 = (data.filter((calorie)=> calorie.calorie > 100))
// console.log(calAbove100);

// Q9. list all the food items with calorie below 100
const calBelow100 = (data.filter((calorie)=> calorie.calorie < 100))
// console.log(calBelow100);

// Q10. list all the food items with highest protein content to lowest
const proHighToLow = (data.slice().sort((a,b) => b.proteins - a.proteins))
console.log(proHighToLow);