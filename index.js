console.log("Hola Superheroe")

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

let targetas = "";


function mostrarSupereroes(){

    for(let i = 0; i< bd.length; i++){
        console.log("i: ", bd[i].nombre, bd[i].url_imagen);
        targetas= targetas + `
        <div class="tarjeta">
        <div class="imagen">
        <img src=${bd[i].url_imagen} alt="IMagen de magneto">
        </div>
        <div class="nombre">${bd[i].nombre}</div>
        </div>
        `
    }

    document.querySelector(".contenedor").innerHTML = targetas;

}
mostrarSupereroes()

