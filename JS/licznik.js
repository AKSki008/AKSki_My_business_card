let licznik = document.querySelector(".licznik");
let liczPages = document.querySelector(".howmuch")
let stron = document.querySelectorAll(".boxes .pages")
let aplikacji = document.querySelectorAll(".boxes .apps")

let year = new Date();
let month = new Date();
let days = new Date();
let a = year.getFullYear()-2023;
let b = month.getMonth()-1;
let today = new Date();

if( b==-1){
    licznik.innerHTML =  a-1 + " rok, " + (b=11) + " miesięcy i " + days.getDate() + " dni";
}else if(b==0){
    licznik.innerHTML =  a + " rok, " + (b=0) + " miesięcy i " + days.getDate() + " dni";
}
else if(b==1){
    licznik.innerHTML =  a + " rok, " + (b=2) + " miesięcy i " + days.getDate() + " dni";
}
else{
    licznik.innerHTML =  a + " rok, " + (b=b+1) + " miesięcy i " + days.getDate() + " dni";
};


// licznik.innerHTML =  a + " rok i " + b + " miesięcy i " + days.getDate() + " dni";
liczPages.innerHTML =  stron.length+1 + " stron i " +aplikacji.length + " aplikacji";

