/*main Code
document.getElementById("firstClassPlusBtn").addEventListener("click",function() {
const firstClassInput = document.getElementById("firstClassInput");
const firstClassInputNumber = parseInt(firstClassInput.value);
const firstClassNewNumber = firstClassInputNumber + 1;
 firstClassInput.value = firstClassNewNumber;
 subTotal();
});

document.getElementById("firstClassMinusBtn").addEventListener("click",function() {
const firstClassInput = document.getElementById("firstClassInput");
const firstClassInputNumber = parseInt(firstClassInput.value);
const firstClassNewNumber = firstClassInputNumber - 1;
 firstClassInput.value = firstClassNewNumber;
 subTotal();
 });


 document.getElementById("economyClassPlusBtn").addEventListener("click",function() {
    const economyClassInput = document.getElementById("economyClassInput");
    const economyClassInputNumber = parseInt(economyClassInput.value);
    const economyClassNewNumber = economyClassInputNumber + 1;
     economyClassInput.value = economyClassNewNumber;
     subTotal();
    });
    
    document.getElementById("economyClassMinusBtn").addEventListener("click",function() {
    const economyClassInput = document.getElementById("economyClassInput");
    const economyClassInputNumber = parseInt(economyClassInput.value);
    const economyClassNewNumber = economyClassInputNumber - 1;
    economyClassInput.value = economyClassNewNumber;
    subTotal();
});
        


function subTotal() {
const firstClassInput = document.getElementById("firstClassInput");
const firstClassInputNumber = parseInt(firstClassInput.value);

const economyClassInput = document.getElementById("economyClassInput");
const economyClassInputNumber = parseInt(economyClassInput.value);

const totalPrice = firstClassInputNumber * 150 + economyClassInputNumber * 100;
document.getElementById("total-price").innerText = totalPrice;

const vat = totalPrice * 0.1;
document.getElementById("vat").innerText = vat;

const grandTotal = totalPrice + vat;
document.getElementById("grand-total").innerText = grandTotal;
}

document.getElementById("bookNow").addEventListener("click",function() {
    alert("Want To GO : New York, United States?")
})
*/


document.getElementById("firstClassPlusBtn").addEventListener("click",function() {
handlePrice(true);
subTotal();
});
      
document.getElementById("firstClassMinusBtn").addEventListener("click",function() {
handlePrice(false);
subTotal();
});

document.getElementById("economyClassPlusBtn").addEventListener("click",function() {
economyPrice(true);
subTotal();
});
      
document.getElementById("economyClassMinusBtn").addEventListener("click",function() {
economyPrice(false);
subTotal();
});
  
function handlePrice(isIncrease) {
const firstClassInput = document.getElementById("firstClassInput");
const firstClassInputNumber = parseInt(firstClassInput.value);
let firstClassNewNumber = firstClassInputNumber;
  
    if (isIncrease == true) {
        firstClassNewNumber = firstClassInputNumber + 1;
    }
  
    if (isIncrease == false && firstClassInputNumber > 0) {
        firstClassNewNumber = firstClassInputNumber - 1;
    }

    firstClassInput.value = firstClassNewNumber;
    subTotal();    
}

function economyPrice(isIncrease) {
const economyClassInput = document.getElementById("economyClassInput");
const economyClassInputNumber = parseInt(economyClassInput.value);
let economyClassNewNumber = economyClassInputNumber;
  
    if (isIncrease == true) {
        economyClassNewNumber = economyClassInputNumber + 1;
    }
  
    if (isIncrease == false && economyClassInputNumber > 0) {
        economyClassNewNumber = economyClassInputNumber - 1;
    }
economyClassInput.value = economyClassNewNumber;
subTotal();    
}

function subTotal() {
    const firstClassInput = document.getElementById("firstClassInput");
    const firstClassInputNumber = parseInt(firstClassInput.value);
    
    const economyClassInput = document.getElementById("economyClassInput");
    const economyClassInputNumber = parseInt(economyClassInput.value);
    
    const totalPrice = firstClassInputNumber * 150 + economyClassInputNumber * 100;
    document.getElementById("total-price").innerText = totalPrice;
    
    const vat = totalPrice * 0.1;
    document.getElementById("vat").innerText = vat;
    
    const grandTotal = totalPrice + vat;
    document.getElementById("grand-total").innerText = grandTotal;
    }
    
    document.getElementById("bookNow").addEventListener("click",function() {
        alert("Want To GO : New York, United States?")
})














