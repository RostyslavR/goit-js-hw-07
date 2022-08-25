import { galleryItems } from "./gallery-items.js";
// Change code below this line
let instance = null;
const refGallery = document.querySelector(".gallery");

const galleryMarkUp = galleryItems.map(makeGalleryItem).join("");
refGallery.innerHTML = galleryMarkUp;

refGallery.addEventListener("click", onGalleryClick);

function makeGalleryItem(item) {
  return `<div class="gallery__item">
  <a class="gallery__link" desable href="${item.original}">
    <img
      class="gallery__image glightbox"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
}

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const refLink = event.target.closest(".gallery__link");
  makeBackDrop(refLink.href);
  instance.show();
  addKeyListenner();
}

function makeBackDrop(image) {
  instance = basicLightbox.create(`<img src="${image}">`);
}

function onKeyPressed(event) {
  if (event.code !== "Escape") {
    return;
  }
  removeKeyListenner();
  instance.close();
}

function addKeyListenner() {
  window.addEventListener("keydown", onKeyPressed);
}

function removeKeyListenner() {
  window.removeEventListener("keydown", onKeyPressed);
}

console.log(galleryItems);
