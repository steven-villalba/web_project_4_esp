// const formElement = document.querySelector(".form");
// const formInput = formElement.querySelector(".form__input");
// const formError = formElement.querySelector(`.${formInput.id}-error`);

const showError = (form, inputElement, errorMessage) => {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__valid");
    errorElement.textContent = errorMessage;
    errorElement.classList.remove("popup__active-error")
}

const hideInputError = (form, inputElement) => {
    const errorElement = form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove("popup__valid");
    errorElement.classList.add("popup__active-error");
    errorElement.textContent = "";
};

const checkInputValidity = (form, inputElement) => {
    if (!inputElement.validity.valid) {
        showError(form, inputElement, inputElement.validationMessage);
    }else {
        hideInputError( form, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggle = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("popup__button-inactive");
        buttonElement.disabled = true;
    }
    else {
        buttonElement.classList.remove("popup__button-inactive");
        buttonElement.disabled = false;
    }
};

const setEventListeners = form => {
    const inputList = Array.from(form.querySelectorAll(".form-input"));
    const buttonElement = form.querySelector(".popup__submit");

    toggle(inputList, buttonElement);

    inputList.forEach(function (inputElement){
        inputElement.addEventListener("input", function (){
            checkInputValidity(form, inputElement);

            toggle(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".popup__container"));

    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form);
    });
};

enableValidation();

///////////////////////////////////////////////////////////////

const showInputError = (form, inputElement, errorMessage) => {
    const errorElement = form.querySelector(`.${inputElement.id}-invalid`);
    inputElement.classList.add("popup__valid");
    errorElement.textContent = errorMessage;
    errorElement.classList.remove("popup__active-error")
}

const hideError = (form, inputElement) => {
    const errorElement = form.querySelector(`.${inputElement.id}-invalid`);

    inputElement.classList.remove("popup__valid");
    errorElement.classList.add("popup__active-error");
    errorElement.textContent = "";
};

const checkValidity = (form, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(form, inputElement, inputElement.validationMessage);
    }else {
        hideError( form, inputElement);
    }
};

const invalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButton = (inputList, buttonElement) => {
    if (invalidInput(inputList)) {
        buttonElement.classList.add("addPhoto__button-inactive");
        buttonElement.disabled = true;
    }
    else {
        buttonElement.classList.remove("addPhoto__button-inactive");
        buttonElement.disabled = false;
    }
};

const $setEventListeners = form => {
    const inputList = Array.from(form.querySelectorAll(".form-input"));
    const buttonElement = form.querySelector(".addPhoto__clic");

    toggleButton(inputList, buttonElement);

    inputList.forEach(function (inputElement){
        inputElement.addEventListener("input", function (){
            checkValidity(form, inputElement);

            toggleButton(inputList, buttonElement);
        });
    });
};

const $enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".addPhoto__container"));

    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        $setEventListeners(form);
    });
};

$enableValidation();