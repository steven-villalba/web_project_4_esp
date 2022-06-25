
const active =document.querySelector(".popup");
const clickk =document.querySelector(".profile__btn-edit");
const inactive =document.querySelector(".popup__icon-close");

const save = document.querySelector(".popup__submit");
const inputName =document.querySelector(".popup__input");
const inputAbout = document.querySelector(".popup__input-about");
const changeName = document.querySelector(".profile__name");
const changeAbout = document.querySelector(".profile__profession");

function  addForm(){
    active.style.display = "block";
}

function close(){
    active.style.display = "none";
}

function saveOn(evt){
    evt.preventDefault();
    active.style.display = "none";
    changeName.textContent = inputName.value;
    changeAbout.textContent = inputAbout.value;
}
function pressEsc(evt){
    if (evt.key === "Escape"){
        active.style.display = "none";
    }
}

active.addEventListener("click", function (evt){
    if (evt.target === inputAbout ||  evt.target === inputName) {
        active.style.display = "block";
    }
    else {
        active.style.display = "none";
    }
});

document.addEventListener("keydown",  pressEsc);

clickk.addEventListener("click", addForm );
inactive.addEventListener("click", close);
save.addEventListener("click", saveOn);



//Quitar tarjeta

const tarjeta = document.querySelectorAll(".images__target");
const eliminarTarjeta = document.querySelector(".images__trash");

//imágenes desde javascript

const $imagesTarget = document.querySelector(".images__box"),
$template = document.querySelector("#template-images").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    logoTrash: "images/trash.png"
    },
    {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    logoTrash: "images/trash.png"
    },
    {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    logoTrash: "images/trash.png"
    },
    {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    logoTrash: "images/trash.png"
    },
    {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    logoTrash: "images/trash.png"
    },
    {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
    logoTrash: "images/trash.png"
    }
];


cardContent.forEach((el) => {
    $template.querySelector(".images__img").setAttribute("src",el.link);
    $template.querySelector(".images__trash").setAttribute("src",el.logoTrash);
    $template.querySelector(".images__img").setAttribute("alt",el.name);
    $template.querySelector(".images__title").textContent = el.name;

    let $clone = document.importNode($template,true);

    $clone.querySelector(".images__trash").addEventListener("click", function(ev){
        if (ev.target.classList.contains("images__trash")){
            const item = ev.target.closest(".images__target");
            item.remove()
        }
    });

    $clone.querySelector(".images__heart").addEventListener("click", function(evt){
        evt.target.classList.toggle("images__heart-active");
    });

    $clone.querySelector(".images__img").addEventListener("click", function(){
        const photo = document.querySelector(".show-img__image");
        const textPhoto = document.querySelector(".show-img__text");
        const showPhoto = document.querySelector(".show-img");
        photo.setAttribute("src",el.link);
        textPhoto.textContent = el.name;

        showPhoto.style.display = "block";
    });

    $fragment.append($clone);
    
});

$imagesTarget.append($fragment);

const containPhoto = document.querySelector(".show-img");
const closePhoto = document.querySelector(".show-img__icon-close");

closePhoto.addEventListener("click", function(){
    containPhoto.style.display = "none";
});

containPhoto.addEventListener("click", function (){
    containPhoto.style.display = "none";
});

document.addEventListener("keydown", function (evento){
    if (evento.key === "Escape"){
        containPhoto.style.display = "none";
    }
});

//Ventana modal  Add photo

const openWindow =document.querySelector(".addPhoto");
const addPhoto = document.querySelector(".profile__btn-add");
const closeForm = document.querySelector(".addPhoto__icon-close");

const crear = document.querySelector(".addPhoto__clic");
const inputNamePhoto =document.querySelector(".addPhoto__name");
const inputPhoto = document.querySelector(".addPhoto__photo");

function  appear(){
    openWindow.style.display = "block";
}

function disappear(){
    openWindow.style.display = "none";
}

document.addEventListener("keydown", function (event){
    if (event.key === "Escape") {
        openWindow.style.display = "none";
    }
});

openWindow.addEventListener("click", function (evt){
    if (evt.target === inputNamePhoto || evt.target === inputPhoto){
        openWindow.style.display = "block";
    }
    else {
        openWindow.style.display = "none";
    }
});

addPhoto.addEventListener("click", appear);
closeForm.addEventListener("click", disappear);

//agregar tarjeta


function addTarget(e){
    e.preventDefault();
    openWindow.style.display = "none";
    const photoTemplate =document.querySelector("#template-images").content;
    const newElement = photoTemplate.querySelector(".images__target").cloneNode(true);

    newElement.querySelector(".images__img").src = inputPhoto.value;
    newElement.querySelector(".images__title").textContent = inputNamePhoto.value;

    newElement.querySelector(".images__heart").addEventListener("click", function(evt){
        evt.target.classList.toggle("images__heart-active");
    });

    newElement.querySelector(".images__trash").addEventListener("click", function(ev){
        if (ev.target.classList.contains("images__trash")){
            const item = ev.target.closest(".images__target");
            item.remove()
        }
    });

    newElement.querySelector(".images__img").addEventListener("click", function(){
        const photo = document.querySelector(".show-img__image");
        const textPhoto = document.querySelector(".show-img__text");
        const showPhoto = document.querySelector(".show-img");
        photo.setAttribute("src",inputPhoto.value);
        textPhoto.textContent = inputNamePhoto.value;

        showPhoto.style.display = "block";
    });
    
    $imagesTarget.prepend(newElement);
}

crear.addEventListener("click", addTarget);