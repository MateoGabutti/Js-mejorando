const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")
let modoOscuro
if(localStorage.getItem("theme")){
    modoOscuro = localStorage.getItem("theme")
}else {
    localStorage.setItem("theme", "light")
}

if(modoOscuro == "dark"){
    document.body.classList.add("darkMode")
}

botonDarkMode.addEventListener("click", () => {
    document.body.classList.add("darkMode")
    localStorage.setItem("theme", "dark")
})

botonLightMode.addEventListener("click", () => {
    document.body.classList.remove("darkMode")
    localStorage.setItem("theme", "light")
})

class FikaRemera{
    constructor(color, tela, talle, ){
        this.color = color
        this.tela = tela
        this.talle = talle
    }
}
const carritoRemera = []

const form = document.getElementById("idForm")
form.addEventListener("submit", (event) =>{
    event.preventDefault()

    let color = document.getElementById("inputColor").value
    let tela = document.getElementById("inputTela").value
    let talle = document.getElementById("inputTalle").value

    const remeraElegida = new FikaRemera (color, tela, talle)
    carritoRemera.push(remeraElegida)
    console.log(carritoRemera)  

    form.reset()
})

const divVacio = document.getElementById("divVacio")
const boton = document.getElementById("boton")
boton.addEventListener("click", () => {
    carritoRemera.forEach(remerones => {
        divVacio.innerHTML += `
        <div>
            <h3>color: ${remerones.color}</h3>
            <h3>tela: ${remerones.tela}</h3>
            <h3>talle: ${remerones.talle}</h3>
        </div>
        `
    })
})



/*const input1 = document.getElementById("input1")
input1.addEventListener("input", () => {
    console.log(input1.value)
})


const input2 = document.getElementById("input2")
input2.addEventListener("input", () => {
    console.log(input2.value)
})

const boton = document.getElementById("Boton")
boton.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log(`Agregaste esto a tu carrito `)
}


const remera1 = new FikaRemera("negra", "lana", "S", )
const remera2 = new FikaRemera("blanca", "algodon", "M", )
const remera3 = new FikaRemera("celeste", "seda", "L", )
const remera4 = new FikaRemera("Marron", "lino", "XS", )

const remeras = [remera1, remera2, remera3, remera4]*/