// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Conyers Nelson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let totQty = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb or minus-go
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`

//Quanity button totals
const gbQuantity = document.querySelector("#qty-gb")
const ccQuantity = document.querySelector("#qty-cc")
const sugarQuantity = document.querySelector("#qty-sugar")
const totalQuantity = document.querySelector("Total")

//Gingerbread Cookies
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
        gb ++
        gbQuantity.textContent = ` ${gb}`
      
        
     // HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
gbMinusBtn.addEventListener("click", function(){
        if(gb >0){
            gb = gb - 1
            gbQuantity.textContent = `${gb}`
        }

        console.log("the gbminus button")
})

//Chocolatechip Cookie **********************************************

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
        cc ++
        ccQuantity.textContent = ` ${cc}`
     // HINT: You can delete this console.log after you no longer need it!
console.log('ChocolateChip + button was clicked!')

})
ccMinusBtn.addEventListener("click", function(){
        if(cc >0){
            cc = cc - 1
            ccQuantity.textContent = `${cc}`
            
        }

        console.log("the ccminus button")
})

//Sugar Sprinkle Cookie **********************************************

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar ++
    sugarQuantity.textContent = ` ${sugar}`
 // HINT: You can delete this console.log after you no longer need it!
console.log('SugarSprinkle + button was clicked!')

})
sugarMinusBtn.addEventListener("click", function(){
    if(sugar >0){
        sugar = sugar - 1
        sugarQuantity.textContent = `${sugar}`
        return sugar
    }

    console.log("the ccminus button")

})
// Total order********************************************************  



