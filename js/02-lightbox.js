import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refGallery = document.querySelector(".gallery");
const galleryMarkUp = galleryItems.map(makeGalleryItem).join("");
refGallery.innerHTML = galleryMarkUp;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function makeGalleryItem(item) {
  return `
  <li>
  <a class="gallery__item" href="${item.original}">
  <img
  class="gallery__image" src="${item.preview}"
  alt="${item.description}"
  />
  </a>
  </li>`;
}

console.log(galleryItems);
