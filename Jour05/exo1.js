// 01 - Calculator 
function calculate(number, operator,number1){ // Créer une fonction calculate qui recevra 3 paramètres (deux entiers et un opérateur, +, -, x, / ou %)
   //
   if (operator === "+"){ // créer une condition (méthode au choix) pour chaque valeur possible de l'opérateur
       return console.log (number+number1); // qui retournera le résultat du calcul 
   } else if (operator === "-"){
       return console.log (number-number1);
   }else if (operator === "*"){
        return console.log (number*number1);
    }else if (operator === "%"){
        return console.log (number%number1);
    }else if (operator === "/"){
        return console.log (number/number1);
    }
}
console.log(calculate(process.agrv[2],process.agrv[3],process.agrv[4]));