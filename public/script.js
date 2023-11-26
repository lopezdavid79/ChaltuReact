//voy a consumir la api de scrollIntoView para que me lleve despacio

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click',function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            console.log(seccionScroll)
            const seccion = document.querySelector(seccionScroll);
            console.log(seccion)

            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}
