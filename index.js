// Imprime un mensaje en la consola
console.log("Hola Superheroe")

// Define un array de objetos que contiene información sobre varios superhéroes
const bd=[
    {
        nombre: "MAGNETO",
        url_imagen: "https://cdn.marvel.com/content/1x/058mgn_com_crd_02.png"
    },
    {
        nombre:"CYCLOPS",
        url_imagen:"https://cdn.marvel.com/content/1x/191cyc_com_crd_01.png",
    },
    {
        nombre:"PHOENIX",
        url_imagen:"https://cdn.marvel.com/content/1x/186jgr_com_crd_01.png",
    },
    {
        nombre:"BEAST",
        url_imagen:"https://cdn.marvel.com/content/1x/190bhm_com_crd_01.png",
    },
    {
        nombre:"WOLVERINE",
        url_imagen:"https://cdn.marvel.com/content/1x/034wlv_com_crd_01.jpg",
    },
];

// Define una función para mostrar los superhéroes en la página
function mostrarSupereroes(){
    // Inicializa una cadena vacía para almacenar las tarjetas HTML
    let targetas = "";
    // Recorre el array de superhéroes
    for(let i = 0; i< bd.length; i++){
        // Imprime en la consola el nombre y la URL de la imagen del superhéroe actual
        console.log("i: ", bd[i].nombre, bd[i].url_imagen);
        // Añade una tarjeta HTML para el superhéroe actual a la cadena
        targetas= targetas + `
        <div class="tarjeta">
        <div class="imagen">
        <img src=${bd[i].url_imagen} alt="IMagen de magneto">
        </div>
        <div class="nombre">${bd[i].nombre}</div>
        </div>
        `
    }
    // Inserta las tarjetas HTML en el contenedor de la página
    document.querySelector(".contenedor").innerHTML = targetas;
}

// Llama a la función para mostrar los superhéroes cuando se carga la página
mostrarSupereroes()

// Selecciona el botón de la página
const botton = document.querySelector("button");

// Añade un evento de clic al botón
botton.addEventListener("click", function(e){
    // Previene el comportamiento por defecto del botón (submit)
    e.preventDefault();
    // Imprime un mensaje en la consola cuando se hace clic en el botón
    console.log("Se ha hecho click en el boton");

    // Captura el valor del campo de entrada del nombre del superhéroe
    let nombre = document.querySelector("#nombreSuper").value;
    // Captura el valor del campo de entrada de la URL de la imagen del superhéroe
    let url = document.querySelector("#url_super").value;
    // Imprime en la consola el nombre y la URL capturados
    console.log("Nombre y url", nombre, url)
    
    // Crea un nuevo objeto con los valores capturados
    const nuevoSuper =
    {
        nombre:nombre,
        url_imagen:url,
    }
    
    // Imprime en la consola el nuevo superhéroe
    console.log("Nuevo superheroe", nuevoSuper);

    // Añade el nuevo superhéroe al array de superhéroes
    bd.push(nuevoSuper);
    // Imprime en la consola la base de datos actualizada
    console.log("Base de datos actualizada", bd);
    // Llama a la función para mostrar los superhéroes actualizados en la página
    mostrarSupereroes()
});


