let yearOfBirth = prompt("2007"); 
let currentYear = new Date().getFullYear(); 

if (yearOfBirth > currentYear) {

alert("Вы еще не родились");
} else {
let age = currentYear - yearOfBirth; 

if (age < 30) {
alert("Вы младше 30 лет");
} else if (age < 60) {
alert("Вы старше 30, но младше 60 лет");
} else {
alert("Вам старше 60 лет");
}
}





