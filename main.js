let images = document.querySelectorAll(".slides img");
let imgFinSlide = document.querySelectorAll(".fifth-sec-img-cont img");
let prevBtn = document.getElementById("prev");
let prevBtnMob = document.getElementById("prev-mob");
let prevBtnMobFin = document.getElementById("prev-mob-final");
let nxtBtn = document.getElementById("next");
let nxtBtnMob = document.getElementById("next-mob");
let nxtBtnMobFin = document.getElementById("next-mob-final");
let imgNum = 0;
let imgNumFinSlide = 0;


// Инициализация первой картинки первого слайда
document.addEventListener("DOMContentLoaded", firstImg);

// Инициализация первой картинки второго слайда для моб версии
document.addEventListener("DOMContentLoaded", firstImgLastSlide);

//Назначение кнопок перелистывания фоток для первого слайда
prevBtn.addEventListener("click", prevImg)

function prevImg() {
    imgNum--;
    showImg(imgNum);
}

nxtBtn.addEventListener("click", nxtImg)

function nxtImg() {
    imgNum++;
    showImg(imgNum);
}

//Назначение кнопок перелистывания фоток для первого слайда для моб версии
prevBtnMob.addEventListener("click", prevImg)

nxtBtnMob.addEventListener("click", nxtImg)


//Назначение кнопок перелистывания фоток последнего слайда для моб версии

prevBtnMobFin.addEventListener("click", prevImgFinSlide = () => {
    imgNumFinSlide--;
    showImgFinSlide(imgNumFinSlide);
})

nxtBtnMobFin.addEventListener("click", nxtImgFinSlide = () => {
    imgNumFinSlide++;
    showImgFinSlide(imgNumFinSlide);
})


//Функция для инициализации фоток для первого слайда
function firstImg() {
    if (images.length > 0) {
        images[imgNum].style.display = "block"
    }
}

//Функция для инициализации фоток для последнего слайда для моб версии

function firstImgLastSlide() {
    if (imgFinSlide.length > 0) {
        imgFinSlide[imgNum].style.display = "block"
    }
}

//Функции для отображения фоток при нажатии кнопок для первого слайдов
function showImg(n) {
    if (n >= images.length) {
        imgNum = 0;
    } else if (n < 0) {
        imgNum = images.length - 1;
    }

    images.forEach(image => {
        image.style.display = "none";
    })

    images[imgNum].style.display = "block";
}


//Функции для отображения фоток при нажатии кнопок для последнего слайда для моб версии
function showImgFinSlide(n) {
    if (n >= imgFinSlide.length) {
        imgNumFinSlide = 0;
    } else if (n < 0) {
        imgNumFinSlide = imgFinSlide.length - 1;
    }

    imgFinSlide.forEach(imageFin => {
        imageFin.style.display = "none";
    })

    imgFinSlide[imgNumFinSlide].style.display = "block";
}