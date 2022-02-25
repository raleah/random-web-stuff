var userCents = 0;
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;

function calculateChange(){

    userCents = document.getElementById("userCents").value;
    userCents = parseFloat(userCents);

    while (userCents >= 25){
        quarters++;
        userCents -= 25;
    }
    
    while (userCents >= 10){
        dimes++;
        userCents -= 10;
    }

    while (userCents >= 5){
        nickels++;
        userCents -= 5;
    }

    while (userCents >= 1){
        pennies++;
        userCents -= 1;
    }
    
    document.getElementById("quarters").value = quarters;
    document.getElementById("dimes").value = dimes;
    document.getElementById("nickels").value = nickels;
    document.getElementById("pennies").value = pennies;
}
