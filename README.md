JAVASCRIPT ANTIGUO 

function abrirMenu() {
    "use strict";
    console.log("abrir");
    /* Cambio en el color de fondo y en el tamaño*/
    var menu = document.getElementById("menu");
    menu.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    menu.style.width = "100%";
    menu.style.height = "100%";
    /* Se muestran las opciones */
    var opciones = document.getElementById("menu").firstElementChild.children;
    for (var i = 1; i < opciones.length; i = i + 1) {
        opciones[i].style.display = "block";
    }
}

function cerrarMenu() {
    "use strict";
    console.log("cerrar");
    /* Cambio en el color de fondo y en el tamaño*/
    var menu = document.getElementById("menu");
    menu.style.backgroundColor = "transparent";
    menu.style.width = "auto";
    menu.style.height = "auto";
    /* Se ocultan las opciones */
    var opciones = document.getElementById("menu").firstElementChild.children;
    for (var i = 1; i < opciones.length; i = i + 1) {
        opciones[i].style.display = "none";
    }
}

function menu() {
    "use strict";
    if (document.getElementById("menu").firstElementChild.children[1].style.display === "block") {
        cerrarMenu();
    } else {
        abrirMenu();
    }
}

function cambiaFoto(numero) {
    "use strict";
    var imagen = document.getElementsByClassName("galeria")[0].children[numero - 1].firstElementChild;
    var ruta_antigua = imagen.getAttribute("src");
    var ruta_nueva = ruta_antigua.replace("flor", "fruto");
    imagen.setAttribute("src", ruta_nueva);
}

function restauraFoto(numero) {
    "use strict";
    var imagen = document.getElementsByClassName("galeria")[0].children[numero - 1].firstElementChild;
    var ruta_antigua = imagen.getAttribute("src");
    var ruta_nueva = ruta_antigua.replace("fruto", "flor");
    imagen.setAttribute("src", ruta_nueva);
}


// BUCLES DE JS
//Para generar un bucle sobre un array podemos usar la función built-in de JS llamada forEach()

let figures = document.querySelectorAll(".galeria figure");
console.log(figures);

//La funcion forEach() tiene dos parametros que podemos activar. 
//El primer parametro me permite acceder al elementos del array de la vuelta
//El segundo parametro me da el numero de vuelta (es decir el índice)
figures.forEach(function(figure, index){
    // console.log(figure);
    // console.log(index);

    figure.addEventListener("mouseover", function(){
        console.log("over");
        cambiaFoto(index + 1);
        
    })

    figure.addEventListener("mouseout", function(){
        console.log("out");
        restauraFoto(index + 1);
        
    })
    
});




// Seleccionamos los enlaces <a> del menu y los guardamos en una variable (esto guardará un array) esta variable se puede llamar links

//Recorremos el array de esa variable links con la funcion forEach() 

//Dentro de la funcion anonima del forEach() le asignamos un evento click a cada uno de los links (cada link individual se puede llamar link como parametro)

//Dentro del evento click se llamará a la función para cerrar el menu

//NOTA: Borrar los eventos onclick del HTML

let links = document.querySelectorAll("#menu a")

links.onClick(function(link){


    link.addEventListener("click", function(){
        cerrarMenu();
        
    })
    
});





<section class="timeline">
            <ul>
                <li>
                    <div>
                        <time>Siglo I d.C.</time> Los romanos construyen el icónico Acueducto, una obra maestra de ingeniería que abasteció de agua a la ciudad durante siglos.
                    </div>
                </li>
                
                <li>
                    <div>
                        <time>Siglo VIII</time> Durante la ocupación musulmana, Segovia fue temporalmente abandonada, aunque su muralla y ubicación estratégica permanecieron intactas.
                    </div>
                </li>
                
                <li>
                    <div>
                        <time>Siglo XI</time> Alfonso VI reconquista Segovia y promueve su repoblación. Se construyen la muralla y las primeras iglesias románicas, sentando las bases de su legado medieval.
                    </div>
                </li>

                <li>
                    <div>
                        <time>Siglo XIII</time> El Alcázar se convierte en una de las principales residencias reales. Desde sus muros, se gestionaron importantes decisiones de la monarquía castellana.
                    </div>
                </li>

                <li>
                    <div>
                        <time>1520</time> Segovia se une a la Guerra de las Comunidades contra Carlos I, destacándose como uno de los focos de resistencia más importantes en Castilla.
                    </div>
                </li>

                <li>
                    <div>
                        <time>1525</time> Comienza la construcción de la actual Catedral de Segovia tras la destrucción de la anterior durante la revuelta comunera. Su estilo gótico tardío es una joya arquitectónica.
                    </div>
                </li>
                <li>
                    <div>
                        <time>1764</time> Carlos III impulsa la fundación de la Real Fábrica de Cristales de La Granja, convirtiendo a esta localidad en un referente de la artesanía y la industria.
                    </div>
                </li>

                <li>
                    <div>
                        <time>1985</time> La UNESCO declara el casco histórico de Segovia y su Acueducto como Patrimonio de la Humanidad, reconociendo su importancia histórica y cultural.
                    </div>
                </li>
            </ul>
        </section>
