/*main finction*/
document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    console.log("loaded!!!")

    let parents, elments, title, dates, footer
    parents = document.querySelector("body")
    title = document.querySelector("h1")
    footer = document.querySelector("footer p")
    title.textContent += "en javascript"

    dates = new Date().getFullYear() // méthode date
    console.log(dates)
    footer.textContent += dates //2021

    console.log(parents.parentElement) //parent de body
    console.log(parents.childNodes[3].childNodes) //les enfants de body


    for (let i = 0; i < parents.childNodes.length; i++) { //insérer le DOM
        console.log(parents.childNodes[i]);
    }

})
window.addEventListener("load", () => {
    const user = {
        first_name: "Tony",
        last_name: "Montana",
        age: 35,
        taille: 170
    }
    console.table(user)
    const new_user = Object.create(user)
    new_user.first_name = "Bruce"
    new_user.last_name = "Wayne"
    new_user.age = 40
    new_user.taille = 190
    const add_user = {
        user,
        new_user
    }

    for (rows in add_user.user) {
        console.table(rows, add_user.user[rows])
    }
    //object & method
    const persona = ({
        nom: "Kent",
        prenom: "Clark",
        alias: "Superman",
        age: 40,
        set_out() {
            console.log(`${this.nom} ${this.prenom} ${this.alias} ${this.age}`)
        }
    })
    let print_out = persona.set_out()
    console.log(print_out)
    const new_persona = Object.create(persona)
    new_persona.nom = "Allen"
    new_persona.prenom = "Barry"
    new_persona.alias = "Flash"
    new_persona.age = 26

    new_persona.set_out()