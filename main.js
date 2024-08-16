const form_registrer = document.getElementById("form_registrer")

form_registrer.addEventListener("submit", validar_formulario)

function validar_formulario(e){
    e.preventDefault()

    const name_user = document.getElementById("name_user").value
    const sex_user = document.querySelector('input[name="sex"]:checked')
    const age_user = document.getElementById("age_user").value
    const juego_user = document.querySelectorAll('input[name="juego"]:checked')
    const juegosSeleccionados = Array.from(juego_user).map(juego => juego.value).join(", ")
    const ciudad_user = document.getElementById("ciudad_user").value
    const pelicula_user = document.getElementById("pelicula_user").value
    const span_error = document.getElementById("span_error")

    span_error.innerHTML = ""
    let valid = true;


    //validar nombre
    if(name_user.match(/[0-9]/)){
        span_error.innerHTML = "El nombre no debe tener ningun numero."
        valid = false
    }else if(name_user.match(/[!+-@#$%^&*();,.¿?":{}|<>]/)){
        span_error.innerHTML = "El nombre no debe tener ningun caracter especial."
        valid = false
    }else if(name_user == ""){
        span_error.innerHTML = "Debes escribir algun nombre."
        valid = false
    }

    //validar sexo
    if(!sex_user){
        span_error.innerHTML = "Debes seleccionar un sexo."
        valid = false
    }

    //validar edad
    if(age_user == ""){
        span_error.innerHTML = "Debes escribir alguna edad."
        valid = false
    }

    //validar juegos
    if(juego_user.length < 1) {
        span_error.innerHTML = "Debes elegir almenos un juego."
        valid = false
        
    }
    
    //validar ciudad
    if(ciudad_user === ""){
        span_error.innerHTML = "Debes elegir una ciudad."
        valid = false;
    }

    //validar pelicula
    if(pelicula_user == "Elige tu pelicula preferida"){
        span_error.innerHTML = "Debes elegir una pelicula."
        valid = false;
    }

    //mensaje de salida
    if(valid == true){
        alert("Hola "+name_user+" tu sexo es: "+sex_user.value+". Tu edad es de: "+age_user+" años. Tu juego favorito es: "+juegosSeleccionados+". Vives en: "+ciudad_user+". Tu pelicula favorita es: "+pelicula_user)
        span_error.innerHTML = ""
    }

}


pelicula_user.addEventListener("change", mostrar_Pelicula)

function mostrar_Pelicula(){
    const pelicula_user = document.getElementById("pelicula_user")
    const span_pelicula = document.getElementById("span_pelicula")
    const img_pelicula = document.getElementById("img_pelicula")
    const pelicula_seleccionada = pelicula_user.options[pelicula_user.selectedIndex]
   
    span_pelicula.innerHTML = pelicula_seleccionada.value

    if(pelicula_user.value == "X-men"){
        img_pelicula.innerHTML = '<img src="assets/xmen-5.jpg" class="img_pelicula">'

    }else if(pelicula_user.value == "Gran Torino"){
        img_pelicula.innerHTML = '<img src="assets/grantorino.jpg" class="img_pelicula">'

    }else if(pelicula_user.value == "Los 8 odiosos"){
        img_pelicula.innerHTML = '<img src="assets/Los_odiosos_ocho-327104058-large.jpg" class="img_pelicula">'

    }else if(pelicula_user.value = "Elige tu pelicula preferida"){
        span_pelicula.innerHTML = ""
        img_pelicula.innerHTML = ""
    }


}
