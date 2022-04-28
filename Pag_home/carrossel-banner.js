function images () {
    let arrayImg = ["./img/carrossel-banner/carrossel1.webp","./img/carrossel-banner/carrossel2.webp","./img/carrossel-banner/carrossel3.webp"];
    let diretorio = document.getElementById('carrossel-banner-img').getAttribute('src');
    let img = document.getElementById('carrossel-banner-img');
    
    if (diretorio == arrayImg[0]){
        img.setAttribute('src', arrayImg[1]);
        // img.style.height = '150px'
        img.style.width = '100vw'
    } else if (diretorio == arrayImg[1]){
        img.setAttribute('src', arrayImg[2]);
        // img.style.height = '150px'
        img.style.width = '100vw'
    } else {
        img.setAttribute('src', arrayImg[0]);
        // img.style.height = '150px'
        img.style.width = '100vw'

    }
}

setInterval(images, 1500)