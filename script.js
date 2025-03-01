let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

function calcuatea_age() {
let birthday = document.querySelector(".birthday").value;
  if (birthday == "") {
    alert("Please Enter Currect Birthdate");
  } else {
    let age = getAge(birthday);
    result.innerText = `Your Age is ${age} ${age > 1 ? "Years" : "year"} Old`;
  }
}

function getAge(birthday){
    let currentdate=new Date()
    let birthdate=new Date(birthday);
    let age =currentdate.getFullYear()-birthdate.getFullYear()
    let month=currentdate.getMonth()-birthdate.getMonth()
    if(month<0||(month===0 && currentdate.getDate()<birthdate.getDate())){ 
        age--;
    }
    return age;
}

btn.addEventListener('click',calcuatea_age)


