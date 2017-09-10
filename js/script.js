//Форма обратной связи
var link = document.querySelector(".contacts__button");

var popup = document.querySelector(".modal__contact");
var close = popup.querySelector(".modal__close");
var overlay = document.querySelector(".modal__overlay");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var comment = popup.querySelector("[name=comment]");

var storage = localStorage.getItem("name");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show-anim");
  overlay.classList.add("modal--show");

  if (storage) {
    name.value = storage;
    comment.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show-anim");
  overlay.classList.remove("modal--show");
  popup.classList.remove("modal--error");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show-anim");
  overlay.classList.remove("modal--show");
  popup.classList.remove("modal--error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove("modal--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal--error");
  } else {
    localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show-anim")) {
      popup.classList.remove("modal--show-anim");
      overlay.classList.remove("modal--show");
      popup.classList.remove("modal--error");
    }
  }
});

//Модальная карта
var mapLink = document.querySelector(".contacts__map");

  var mapPopup = document.querySelector(".modal__map");
  var mapClose = mapPopup.querySelector(".modal__close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal--show-anim");
    overlay.classList.add("modal--show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal--show-anim");
    overlay.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal--show-anim")) {
        mapPopup.classList.remove("modal--show-anim");
        overlay.classList.remove("modal--show");
      }
    }
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal--show-anim");
    overlay.classList.remove("modal--show");
  });
