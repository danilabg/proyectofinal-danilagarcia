'use strict'

var container = document.querySelector("#container");
var botonLight = document.querySelector("#boton_light");
var botonDark = document.querySelector("#boton_dark");
var containerFormacion = document.querySelector("#container_formacion");
var containerExperiencia = document.querySelector("#container_experiencia");
var body = document.body;

botonLight.addEventListener("click", function () {
    container.className = "light",
        containerFormacion.className = "light",
        containerExperiencia.className = "light",
        body.style.backgroundImage = "url('https://p4.wallpaperbetter.com/wallpaper/233/250/483/triangle-abstract-gradient-soft-gradient-wallpaper-preview.jpg')";
});

botonDark.addEventListener("click", function () {
    container.className = "dark",
        containerFormacion.className = "dark",
        containerExperiencia.className = "dark";
    body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://p4.wallpaperbetter.com/wallpaper/233/250/483/triangle-abstract-gradient-soft-gradient-wallpaper-preview.jpg')";


});

botonLight.style.marginTop = "10px";
botonLight.style.marginBottom = "10px";
botonLight.style.backgroundColor = "#ccc";
botonLight.style.border = "2px solid white";
botonLight.style.borderRadius = "7px";
botonLight.style.boxShadow = "2px 2px 5px white";
botonLight.style.padding = "6px";
botonLight.style.color = "black";

botonDark.style.marginTop = "10px";
botonDark.style.marginBottom = "10px";
botonDark.style.backgroundColor = "grey";
botonDark.style.border = "2px solid white";
botonDark.style.borderRadius = "7px";
botonDark.style.boxShadow = "2px 2px 5px white";
botonDark.style.padding = "6px";
botonDark.style.color = "white";






















































