// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
function createGalleryMurkup(items) {
    return items
    .map(({ preview, original, description }) => {

       return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
        .join('');
}
const galleryContainer = document.querySelector('.gallery');
const galleryMurkup = createGalleryMurkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMurkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
}
);


