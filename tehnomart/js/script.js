var link = document.querySelector(".btn--write-us");

var popup = document.querySelector(".modal-feedback");

var close = popup.querySelector(".modal-window-close");

var form = popup.querySelector(".feedback-form");

var login = popup.querySelector("[name=feedback-name]");

var e_mail = popup.querySelector("[name=feedback-e-mail]");

var textarea = popup.querySelector("[name=feedback-textarea]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-content-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !e_mail.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      }
    }
  });


var mapLink = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");

var mapClose = mapPopup.querySelector(".modal-window-close");


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-content-show");

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
  if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
      }
    }
  });


var productBuy = document.querySelectorAll(".js-buy");
var addCartPopup = document.querySelector(".modal-product-add");
var addCartPopupClose = addCartPopup.querySelector(".modal-window-close");


productBuy.forEach(function (entry) {
  entry.addEventListener("click", function(evt) {
  evt.preventDefault();
  addCartPopup.classList.add("modal-content-show");
});
});

addCartPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addCartPopup.classList.remove("modal-content-show");
});
