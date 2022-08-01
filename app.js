const navUl = document.querySelector("nav ul")

const menu = document.getElementById("hamburger");

const close = document.getElementById("icon-close");

menu.addEventListener('click', ()=>{
    navUl.classList.toggle("open");
    if(navUl.classList.contains("open")){
        menu.classList.add("hide")
        close.classList.add("show");
        close.addEventListener('click', ()=>{
            close.classList.remove("show")
            navUl.classList.remove("open")
            menu.classList.remove("hide")

        })
    }
       
}) 

// console.log(navUl)

// console.log(menu)
// console.log(close)

