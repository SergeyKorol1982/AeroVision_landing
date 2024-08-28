var swiper = new Swiper(".services__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  breakpoints: {
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 50,
      initialSlide: 0,
    },
},
});

var swiper1 = new Swiper(".testimonials__swiper", {
  loop: true,
  slidesPerView: 1.25,
  spaceBetween: 30,
  centeredSlides: false,
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },
  breakpoints: {
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 25,
      initialSlide: 0,
    },
},
});

// header start
let hamburger = document.querySelector('.navbar-toggler-icon');
// let close = document.querySelector('.cross');
let menu = document.querySelector('.header__mobile_hide');
let screenMenu = window.screen.width;
// let topButtonClose = document.querySelector('#top-button');

hamburger.onclick=function () {
    menu.style.display = 'block';
    menu.style.width = '100%';
    menu.style.top = '0';
    hamburger.style.display = 'none';
}

// close.onclick=function () {
//     menu.style.display = 'none';
//     hamburger.style.display = 'block';
// }

// topButtonClose.onclick=function () {
//     if (window.screen.width < 769) {
//         menu.style.display = 'none';
//         hamburger.style.display = 'block';
//     }
//     else {
//         hamburger.style.display = 'none';
//     }
// }

// header end
// form start 

let nameInput = document.getElementById ("contact__form_name-input");
let nameError = document.getElementById ("contact__form_name-error");
let emptyNameError = document.getElementById ("ontact__form_name-empty");

let emailInput = document.getElementById ("contact__form_mail-input");
let emailError = document.getElementById ("contact__form_mail-error");
let emptyEmailError = document.getElementById ("ontact__form_mail-empty");

let phoneInput = document.getElementById ("contact__form_phone-input");
let phoneError = document.getElementById ("contact__form_phone-error");
let emptyPhoneError  = document.getElementById ("contact__form_phone-empty");

let helpInput = document.getElementById ("contact__form_help-input");
let helpError = document.getElementById ("contact__form_help-error");
let emptyHelpError  = document.getElementById ("contact__form_help-empty");

let submitButton = document.getElementById ("contact__button");

let checkbox = document.getElementById ("contact__form_submit");

let validClasses = document.getElementsByClassName ("valid");
let invalidClasses = document.getElementsByClassName ("error");

// name and help varification

const textVerify = (text) => {
  const regex = /^[a-zA-Z]|^[0-9А-Яа-я]/;
  return regex.test(text);
};

// phone verification

const phoneVerify = (number) => {
  const regex = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$|/;
  return regex.test(number);
};

// email verification

const emailVerify = (input) => {
  const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  return regex.test(input);
};


const emptyUpdate = (inputReference,emptyErrorReferense,otherErrorReference) => {
  if (!inputReference.value) {
    emptyErrorReferense.classList.remove("hide");
    emptyErrorReferense.classList.add("hide");
    inputReference.classList.add("error");
  }
  else {
    emptyErrorReferense.classList.add("hide");
  }
};
// for styling 
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};
// for no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};

// name
nameInput.addEventListener("input", () => {
  if (textVerify(nameInput.value)) {
    nameError.classList.add("hide");
    validInput(nameInput);
  } else {
    errorUpdate (nameInput,nameError);
    emptyUpdate (nameInput,emptyNameError,nameError);
  }
});

// mail
emailInput.addEventListener("input", () => {
  if (textVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate (emailInput,emailError);
    emptyUpdate (emailInput,emptyEmailError,emailError);
  }
});

// phone

phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    errorUpdate (phoneInput,phoneError);
    emptyUpdate (phoneInput,emptyPhoneError,phoneError); 
  }
});

// help us
helpInput.addEventListener("input", () => {
  if (textVerify(helpInput.value)) {
    helpError.classList.add("hide");
    validInput(helpInput);
  } else {
    errorUpdate (helpInput,helpError);
    emptyUpdate (helpInput,emptyHelpError,helpError);
  }
});

submitButton.addEventListener ("click", () => {
  if (validClasses.length == 4 && checkbox.checked) {
    alert("Sucsess");
  } else {
    alert("Error");
  }
});
// form end

// send form start
const TOKEN = "7533450268:AAHQFLShsY0YZbMFH4S1ZyuylLOp_DKt3so";
const CHAT_ID = "-1002189495450";
const URI_API = `https://api.telegram.org/bot${ TOKEN}/sendMessage`;

document.getElementById('contact__form').addEventListener('submit', function(e){
  e.preventDefault();
  console.log("1111111111");
  let = message = `<b>Заявка с сайта</b>\n`;
  message += `<b>Sender: </b> ${ this.name.value }\n`;
  message += `<b>Email: </b> ${ this.email.value }\n`;
  message += `<b>Phone: </b> ${ this.phone.value }\n`;
  message += `<b>Text: </b> ${ this.help.value }\n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
  .then((res) => {
    this.name.value = "";
    this.email.value = "";
    this.phone.value = "";
    this.help.value = "";
  })
});

// send form end