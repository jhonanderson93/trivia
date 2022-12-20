function pintarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}

pintarNombre()

const temas = [
    "Jasmine" , "Bella" , "Blanca Nieves" , "Ariel" , "Cenicienta" , "Aurora"
]