//
function CalculateAge (StrBirthDate) {
const currentDate = new Date ();// il faut déclarer une varibale (ont va délcarer le jour, le mois et l'année) ==> 2022-10-12T 00:00:000Z
const currentyear = currentDate.getFullYear();
const birthDate = new Date (StrBirthDate);//1996-10-12 13T 00:00:000Z
Const birthYear = birthDate.getFullYear (); // 1996
if (birthDate.getMonth()<currentDate.getMonth(){
    return currentyear-birthYear
    {else}
    return (currentyear-birthYear)-1;
}
}
console.log(CalculateAge ("1973-06-13"));