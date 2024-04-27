const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//---------------------------------------------------------

//Bir yazının sonuna başqa yazını əlavə etmək üçün istfadə olunur
let yazi1 = " Abdullayev";
let yazi2 = yazi1.concat("Orxan");
console.log(yazi2);
document.getElementById("insan").innerHTML = yazi2;

//
let text1 = "deniz";
let text2 = "mehsullari";
let result = text1.concat(text2);
console.log(result);
document.getElementById("box").innerHTML = result;
//------------------------------------------------------------

//Bir yazının sonuna başqa yazını əlavə etmək üçün istfadə olunur
let write1 = "qirmizi";
let write2 = "qelem";
let read = write1.concat(write2);
console.log(read);
document.getElementById("qutu").innerHTML = read;
//-----------------------------------------

//Bir yazının sonuna başqa yazını əlavə etmək üçün istfadə olunur
let write3 = "Xezer";
let write4 = "denizi";
let read2 = write3.concat(write4);
console.log(read2);
document.getElementById("reng").innerHTML = read2;
//-----------------------------------------

//trim() funksiyası – Yazının sağ və sol tərəfindəki boşluqları silmək üçün istifadə olunur
var yazi3 = " Salam ";
yazi4 = yazi3.trim();
console.log(yazi4);
document.getElementById("clean").innerHTML = yazi4;
//----------------------------------------------

//trim() funksiyası – Yazının sağ və sol tərəfindəki boşluqları silmək üçün istifadə olunur
let metn = "        Welcome to Baku!     ";
let result2 = metn.trim();
document.getElementById("clean2").innerHTML = metn;
document.getElementById("clean3").innerHTML = result2;
//------------------------------------------------------

// charAt() funksiyası – Yazının qeyd etdiyimiz nömrədəki simvolunu götürmək üçün istifadə olunu
var yazi6 = "Azerbaycan";
yazi7 = yazi6.charAt(0);
document.getElementById("clean4").innerHTML = yazi7;
console.log(yazi7);
//-------------------------------------------

//kiçik hərfləri böyük hərflərə çevirmək üçün istifadə olunur.
var x = "toUpperCase() funksiyası";
var y = x.toUpperCase();
document.getElementById("upinfo").innerHTML = y;

//--------------------------------------------

//kiçik hərfləri böyük hərflərə çevirmək üçün istifadə olunur.
let text6 = "Nəticədə yazıdakı kiçik hərflər böyük hərflərə çevrilmiş olur";
let result9 = text6.toUpperCase();
document.getElementById("upper").innerHTML = result9;
//---------------------------------------------

//Yazıdakı böyük hərfləri kiçik hərflərlə əvəzləmək üçün istifadə olunur
var z = "NƏTİCƏDƏ cümlədəki BÖYÜK HƏRFLƏR KİÇİK hərflərlə əvəzlənmiş olur.";
var s = z.toLowerCase();
document.getElementById("lower").innerHTML = s;
//------------------------------------------

//
let metn8 = "WELCOME TO COUNTRY!";
let result11 = metn8.toLowerCase();

document.getElementById("lower2").innerHTML = result11;
