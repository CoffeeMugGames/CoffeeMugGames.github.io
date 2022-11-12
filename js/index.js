function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('chad');

        if (scroll > 200) {
            botonArriba.style.right = 20 + "px";
        } else{
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba();