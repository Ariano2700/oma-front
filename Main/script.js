
const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
//const itemsWithSubmenu = document.querySelectorAll('.has-submenu');

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});

//------------------------------------


document.addEventListener("DOMContentLoaded", function () {
    const initiativeDropdowns = document.querySelectorAll(".initiative-dropdown");
  
    initiativeDropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
  
        const options = dropdown.querySelector(".initiative-options");
  
        // Cierra todas las opciones
        initiativeDropdowns.forEach(function (otherDropdown) {
          if (otherDropdown !== dropdown) {
            otherDropdown.querySelector(".initiative-options").classList.remove("show");
          }
        });
  
        // Abre o cierra las opciones
        options.classList.toggle("show");
      });
    });
  
    // Cierra el menú desplegable si se hace clic fuera de él
    document.addEventListener("click", function (event) {
      initiativeDropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
          dropdown.querySelector(".initiative-options").classList.remove("show");
        }
      });
    });
  });
  







