const nombre = document.getElementById("name")
const email = document.getElementById("email")
const forms = document.getElementById("forms")
const parrafo = document.getElementById("warningg")

forms.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length <6){
        warnings += 'El nombre no es Valido <br>'
        entrar = true  
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El Email no es Valido <br>'
        entrar = true     
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})