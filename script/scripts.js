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
    changeName.innerHTML = inputName.value;
    changeAbout.innerHTML = inputAbout.value;
}
clickk.addEventListener("click", addForm );
inactive.addEventListener("click", close);
save.addEventListener("click", saveOn);