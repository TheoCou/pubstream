document.addEventListener("DOMContentLoaded", e => {
    let el = document.querySelector("h1")

    let i = 0;

    let a = prompt(`Avez vous ${i} enfants ? (y/n)`);
    while(a != "y" && i < 3){
        

        if(a === "n"){
            i++;
        }

    a = prompt(`Avez vous ${i} enfants ? (y/n)`);
    }

    
})