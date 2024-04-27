const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);

//Javascriptdə istifadəçinin ekranı haqqında məlumatları özündə saxlayan screen obyekti
document.write("En: " + `<h1>${screen.width}</h1>`);
document.write("<br>");
document.write("Uzunluq:" + `<h1>${screen.height}</h1>`);

//------------------------------------------------

//Windows Taskbar istisna olmaqla ekranın enini və uzunluğunu göstərməkdədir.
document.write("En: " + screen.availWidth);
document.write("<br>");
document.write("Uzunluq: " + screen.availHeight);

//
