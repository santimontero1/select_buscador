function selectSearch(nombre){
    // elementos html
    const select = document.getElementById(`select_${nombre}`);
    const options_buscador = document.querySelector(`.options_buscador_${nombre}`);
    const value = document.getElementById(`input_select_${nombre}`);
    const opciones = document.querySelectorAll(`#options_${nombre} > .option_${nombre}`);
    const contenido_select = document.querySelector(`#select_${nombre} .select_contenido_${nombre}`);
    const buscador = document.getElementById(`buscador_${nombre}`);
    const opciones_buscadas = document.querySelector(`#options_${nombre}`);
    // elementos html
    const opciones_values = []
    opciones.forEach(opcion => opciones_values.push(opcion.children[0].querySelector(`.valor`).innerText))

    buscador.addEventListener(`keyup`, function(e){
        const elementos = opciones_values.filter(opcion => opcion.includes(e.target.value))
        let contenedor = ``
        opciones.forEach(opcion => {
            for (let i = 0; i < elementos.length; i++) {
                const elemento = elementos[i];
                if(opcion.children[0].querySelector(`.valor`).innerText == elemento){
                    contenedor += opcion.innerHTML;
                }
            }
        })
        let contenedorPadre = `<a href="#" class="option_${nombre}"> ${contenedor} </a>`
        opciones_buscadas.innerHTML = contenedorPadre
        const opciones2 = document.querySelectorAll(`#options_${nombre} > .option_${nombre}`);
        cargarOpciones(opciones2)
    })

    function cargarOpciones(arrayContenedor){
        arrayContenedor.forEach(opcion => {
            opcion.addEventListener(`click`, function(e){
                e.preventDefault(); // al ser un <a> evita q recarge la pag
                contenido_select.innerHTML = e.currentTarget.innerHTML;
                options_buscador.classList.toggle(`activo`);
                value.value  =  e.currentTarget.querySelector(`.valor`).innerText;
                console.log(value.value)
            })
        });
    }
    cargarOpciones(opciones)

    select.addEventListener(`click`, function(){
        options_buscador.classList.toggle(`activo`); // cuando hace click le agrego la clase si no la tiene y si la tiene se la saca
    })

}

selectSearch('probando')
selectSearch('hola')



let aqui = document.getElementById(`aqui`)

function crearSelect(){
    const contenedorSelect = document.createElement(`div`)
    contenedorSelect.innerHTML = `<div class="select_contenedor">
        <input type="hidden" value="" name="select_value" id="input_select" >
        <div class="select_vista" id="select">
            <div class="select_contenido">
                <h1 class="titulo"> Selecciona Codigo Postal</h1>
            </div>
        </div>
        <div class="options_buscador">
            <div class="buscador_contenido">
                <input type="text" name="buscador" id="buscador">
            </div>
            <div class="select_options" id="options">
                <a href="#" class="option">
                    <div class="option_contenido">
                        <p class="valor">valor 1</p>
                    </div>
                </a>
                <a href="#" class="option">
                    <div class="option_contenido">
                        <p class="valor">valor 2</p>
                    </div>
                </a>
                <a href="#" class="option">
                    <div class="option_contenido">
                        <p class="valor">valor 3</p>
                    </div>
                </a>
            </div>
        </div>
    </div>`
    aqui.append(contenedorSelect)
}

// crearSelect()
