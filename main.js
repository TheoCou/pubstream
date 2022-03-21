document.addEventListener("DOMContentLoaded",(e)=>{
    console.log(e.target)
    let el, contents, bdd, User, age, first_name, last_name, city
    console.log(typeof age)
    el = document.querySelector("main")
    elements = document.createElement("p")
    el.appendChild(elements)
    age = prompt("Veuillez saisir votre age?")
    console.log(age)
    age ? el
})