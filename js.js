let lamp=document.getElementById("lamp");
let lamp1=document.getElementById("lamp1");
let lamp2=document.getElementById("lamp2");
let lamp3=document.getElementById("lamp3");
let lamp4=document.getElementById("lamp4");

lamp1.addEventListener('click',() => {
    lamp.style.filter = "none";
})
lamp2.addEventListener('click',() => {
    lamp.style.filter = "hue-rotate(45deg)";
})
lamp3.addEventListener('click',() => {
    lamp.style.filter = "hue-rotate(150deg)";
})
lamp4.addEventListener('click',() => {
    lamp.style.filter = "hue-rotate(280deg)";
})

let minus = document.getElementById("minus");
let count = document.getElementById("count");
let plus = document.getElementById("plus");
let total = document.getElementById("total");

var coun = 1;
var a = 59.80;
total.innerText = "$" + a;
count.innerText = coun;

minus.addEventListener('click', () =>{
    coun -=1;
    a -= 59.80;
    if(coun < 0) {
        coun = 0;
    }
    if(a<0) {
        a= 0;
    }
    count.innerText = coun;
    total.innerText ="$" + a.toString().substring(0, 5);
})

plus.addEventListener('click', () =>{
    coun +=1;
    a += 59.80;
    if(coun > 10) {
        coun = 10;
    }
    if(a > 598) {
        a= 598;
    }
    count.innerText = coun;
    total.innerText ="$" + a.toString().substring(0, 5);
})