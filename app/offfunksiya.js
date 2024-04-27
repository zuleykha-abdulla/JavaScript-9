const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//---------------------------------------

//bu funksiya axtarılan yazının birincisinin neçənci simvoldan başladığını göstərir
var x = "Javascript mohtesem dildir. Hemcinin html dili de mohtesemdir.";
document.write(x.indexOf("mohtesem"));
document.write("<br>");
//------------------------------------------

//
let metn = "Baki gözəl səhərdir, həmçının Gəncə də gözəl səhərdir ";
let cavab = metn.indexOf("gözəl");

document.getElementById("box").innerHTML = cavab;

//--------------------------------------

//
var y = "Javascript mohtesem dildir. Hemcinin html dili de mohtesemdir.";
document.write(y.lastIndexOf("mohtesem"));
