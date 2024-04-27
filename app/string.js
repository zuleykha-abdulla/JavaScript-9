const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//-----------------------------------------

//
let metn = "Baki gozel seherdir";
let length = metn.length;
document.getElementById("box").innerHTML = length;
//-----------------------------------------------

//istifadəçi bir yazı daxil edib və bizə o yazının hərf sayı, yəni, uzunluğu lazımdır
var ad, uzunluq;
ad = prompt("Adiniz:");
uzunluq = ad.length;
document.write(uzunluq);

//-----------------------------------------------------
