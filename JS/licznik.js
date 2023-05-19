let licznik = document.querySelector(".licznik");
let liczPages = document.querySelector(".howmuch")
let stron = document.querySelectorAll(".boxes .pages")
let aplikacji = document.querySelectorAll(".boxes .apps")

let year = new Date();
let month = new Date();
let days = new Date();

// licznik.innerHTML = year.getFullYear()-2023 + " lat, " ;
licznik.innerHTML =  month.getMonth()-1 + " miesięcy i " + days.getDate() + " dni";
liczPages.innerHTML =  stron.length+1 + " stron i " +aplikacji.length + " aplikacji";

