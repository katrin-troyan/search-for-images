import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox;

export const cleanGallery = () => {
  gallery.innerHTML = '';
};

export const renderImages = images => {
  const card = images
    .map(
      ({ webformatURL, largeImageURL, tags }) =>
        `<a class="gallery-item" href="${largeImageURL}">
          <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" />
            
          </div>
        </a>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', card);

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};
