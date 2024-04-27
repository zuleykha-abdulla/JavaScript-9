const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);

//----------------------------------------------------
//Səhifənin yerləşdiyi host adını və portu bizə verməkdədir.
document.write(location.host);
document.write("<br>");
document.write("<br>");

//---------------------------------------

//səhifənin host adını bizə verməkdədir
document.write(location.hostname);
document.write("<br>");
document.write("<br>");
//-------------------------------------

//Beləliklə host adını dəyişirik və başqa bir sayta keçmiş oluruq.
//document.write(location.hostname);
//location.hostname = "www.google.az";
//-------------------------------------------

//origin xüsusiyyəti — protokolu, host adını və portu bizə verməkdədir
//document.write(location.origin);
//------------------------------------------------

//səhifənin yerləşdiyi fayl yolunu bizə göstərəcə
//document.write(location.pathname);
//--------------------------------------------

//
let hostName = location.hostname;
console.log(hostName);
