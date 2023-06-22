
var images_dt = [
    {
        title: "THE CHICKEN <br> BURGER",
        price: "&#8377; 140 ",
        MRP: "&#8377; 160",
        calorie: 7845,
        fat: 84,
        protein: 78
    },
    {
        title: "THE PINK <br> BURGER",
        price: "&#8377; 100 ",
        MRP: "&#8377; 140",
        calorie: 4512,
        fat: 65,
        protein: 82
    },
    {
        title: "THE BLACK <br> BURGER",
        price: "&#8377; 90",
        MRP: "&#8377; 120 ",
        calorie: 6545,
        fat: 115,
        protein: 56
    },
    {
        title: "THE RED <br> BURGER",
        price: "&#8377; 120",
        MRP: "&#8377; 140 ",
        calorie: 9845,
        fat: 68,
        protein: 86
    },
    {
        title: "THE GREEN <br> BURGER",
        price: "&#8377; 70 ",
        MRP: "&#8377; 110 ",
        calorie: 1256,
        fat: 45,
        protein: 123
    },
    {
        title: "THE TORNADO <br> BURGER",
        price: "&#8377; 360",
        MRP: "&#8377; 440 ",
        calorie: 5678,
        fat: 92,
        protein: 99
    },
    {
        title: "THE COMBO <br> BURGER",
        price: "&#8377; 250 ",
        MRP: "&#8377;300 ",
        calorie: 3245,
        fat: 49,
        protein: 78
    },
];
var index = 0;
var len = Array.from(document.getElementsByClassName('main_imgs')).length * 310;

var images_off = function () {
    Array.from(document.getElementsByClassName('main_imgs')).forEach(function (el) {
        el.style.width = "35%";
        el.style.filter = "blur(1.5px)";
    });
};
var icon_off = function () {
    Array.from(document.getElementsByClassName('pagi_img')).forEach(function (el) {
        el.style.transforn = "unset";
        el.style.opacity = "0.3";
    });
};
document.getElementsByClassName('fa-angle-right')[0].addEventListener('click', function () {
    index += 310;
    if (index > (len) - 310) {
        index = (len) - 310;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    images_off();
    console.log(index);
    document.getElementsByClassName('main_imgs')[index / 310].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index / 310].style.filter = "blur(0px)";
    document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 310)].title;
    document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index / 310)].price} <sup> <del>${images_dt[(index / 310)].MRP} </del> </sup>`;
    document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
    document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
    document.getElementById('protein').innerText = images_dt[(index / 310)].protein;
    icon_off();
    document.getElementsByClassName('pagi_img')[index / 310].style.transforn = "scale(1.1)";
    document.getElementsByClassName('pagi_img')[index / 310].style.opacity = 1;
});
document.getElementsByClassName('fa-solid fa-angle-left')[0].addEventListener('click', function () {
    index -= 310;
    if (index < 0) {
        index = 0;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    images_off();
    document.getElementsByClassName('main_imgs')[index / 310].style.width = "60%";
    document.getElementsByClassName('main_imgs')[index / 310].style.filter = "blur(0px)";
    document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 310)].title;
    document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index / 310)].price} <sup> <del>${images_dt[(index / 310)].MRP} </del> </sup>`;
    document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
    document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
    document.getElementById('protein').innerText = images_dt[(index / 310)].protein;
    icon_off();
    document.getElementsByClassName('pagi_img')[index / 310].style.transforn = "scale(1.1)";
    document.getElementsByClassName('pagi_img')[index / 310].style.opacity = 1;
});
Array.from(document.getElementsByClassName('pagi_img')).forEach(function (el, i) {
    el.addEventListener('click', function () {
        index = 310 * i;
        document.getElementsByClassName('images')[0].scrollLeft = index;
        images_off();
        document.getElementsByClassName('main_imgs')[index / 310].style.width = "60%";
        document.getElementsByClassName('main_imgs')[index / 310].style.filter = "blur(0px)";
        document.getElementsByClassName('title')[0].innerHTML = images_dt[(index / 310)].title;
        document.getElementsByClassName('price')[0].innerHTML = `${images_dt[(index / 310)].price} <sup> <del>${images_dt[(index / 310)].MRP} </del> </sup>`;
        document.getElementById('calorie').innerText = images_dt[(index / 310)].calorie;
        document.getElementById('fat').innerText = images_dt[(index / 310)].fat;
        document.getElementById('protein').innerText = images_dt[(index / 310)].protein;
        icon_off();
        document.getElementsByClassName('pagi_img')[index / 310].style.transforn = "scale(1.1)";
        document.getElementsByClassName('pagi_img')[index / 310].style.opacity = 1;
    });
});
