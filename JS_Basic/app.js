// document.write("Over Write<br>"); //HTML tag using in js file
// console.log('Abdullah Al Mamun');

// Variable data type Practice
// var let const
var name = "Abdullah Al Mamun"; //String Variable
var age = 28; //Number Variable
var hight = 5.10; //Number Variable
let isMale = true; //Boolean
let isFemale = false;
let gendar = ((isMale = true)? isMale : isFemale )

let hobbies = ['Coding', 'Learning', 'Waching']; //Array but type object
let numbers = {
    num1: '01309068352',
    num2: '01310107526'
}
let maritual;
let bb = null;
document.write("Name :" + name + " 'data type' " + typeof name +"<br>");
document.write("Age :" + age + " 'data type' " + typeof age + "<br>");
document.write("Hight :" + hight + " Feets"+ " 'data type' " + typeof hight +"<br>");
document.write("Gender Check : Male " + gendar + " 'data type' " + typeof isMale + " <br>");
document.write("Hobbies : " + hobbies + " 'data type' " + typeof hobbies + " <br>");
document.write("Numbers : " + numbers.num2 + " 'data type' " + typeof numbers + " <br>");
document.write("Maritual : " + maritual + " 'data type' " + typeof maritual + " <br>");
document.write("Bank Balance : " + bb + " 'data type' " + typeof bb + " <br>");