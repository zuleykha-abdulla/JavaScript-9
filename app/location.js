const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//----------------------------------------------

//başqa bir səhifəni yükləmək üçün istifadə olunur.
function funksiya() {
  location.assign("http://google.az");
}
//-------------------------------------------

//əvvəlki səhifəyə geri qayıtmaq olmur.
function myfunksiya() {
  location.replace("https://www.javascript.com/learn/numbers");
}
//-----------------------------------------------

//cari səhifəni yeniləmək üçün istifadə olunur
function loadfunksiya() {
  location.reload();
}
//-----------------------------------

//— səhifənin url ünvanını bizə göstərməkdədir.
function hreffunksiya() {
  location.href =
    "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_loc_href_set";
}
//------------------------------------------
