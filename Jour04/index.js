//Code de la matinée 
// ***************objets 
const key = "firstname";

// const user = ["John", "Doe", "50", "France", "Paris"];

const user = {
    firstname:"John",
    lastname: "Doe",
    age:50,
    address: {
        country:"France",
        city: "Paris",
        floor:4,
    }
    favoriteFood: ["nutella", "brocoli"],
};

console.log(user.firstname);
console.log(user["lastname"]);
console.log(user[key]);
console.log(user["adresse"["floor"]);
console.log(user.favoritefood[1]);
console.log(user.adress.city);

const friends = [
    {
        username:"Mary",
        lastname:"Doe",
    },
    {
        username:"Jane",
        lastname:"Doe",
    },
];

for (let i = 0; i <friends.length; i++) {
    // const oneFriend = frinds[i];
    // console.log(oneFriend.username);
    console.log(friends[i].username);
}

console.log("keys:", Objet.keys(user));
console.log("Values:", Object.values(user));

const keys = Object.keys(user);
// On obtient : ['firstname', lastname','age', 'adress','favoritefood']

for(let i =0; i <keys.length;i++){
    console.log(keys[i], user[keys[i]]);
}
//*************** FONCTIONS
//fonction sert à grouper du code et de ne pas ré-écrire toujours la même chose
function  sayHello(){
    // console.log("Hello");
    // console.log("How are you ?");

    let x = 22;
    x++;
    console.log("x dans la fonction:", x);
}

sayHello();
sayHello();

const n =   8;

function add(a,b){
    console.log(a + b);
}

add(5, 8, 7, 9);
add(1, 2);

function doSomething(array) {
    array.push(3)
}

const tab = [1,2];
doSomething(tab);
// il y a eu mutation
console.log(tab);

function increment(a){
    a = a + 1;
    console.log("a:",a);
}

const y = 1;
increment(y);
console.log(y);

// add two numbers and return the result
function addNumbers(a,b) {
    const res = a+b;
    return res;
}

const addNumbers = addNumbers(3,4);
console.log("addNumbers:", addNumbers);