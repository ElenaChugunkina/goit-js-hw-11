
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



 import { createGalleryItemMarkup } from "./js/render-functions";
 import { fetchPhotosByQuery } from "./js/pixabay-api";

 const galleryEl = document.querySelector('.gallery');
 const searchForm = document.querySelector('.js-search-form');
 const loader = document.querySelector('.js-loader');
 

 let lightbox;


function onSearchFormSubmit (event) {
    event.preventDefault();
    const searchQuery = event.target.elements.searchKey.value.trim();
  
    if (searchQuery === "") {
        galleryEl.innerHTML = '';
        event.target.reset();
        iziToast.show({
            
            message: 'Input field can not be empty',
            messageColor: 'black',
            close: true,
            backgroundColor: 'orange',
            timeout: 3000,
        });
        return;
    }
    galleryEl.innerHTML = '';
    loader.classList.remove('is-hidden');
    
    fetchPhotosByQuery(searchQuery).then(imagesData => {
       
        galleryEl.innerHTML = createGalleryItemMarkup(imagesData.hits);
        
       
        if (imagesData.total === 0) {
            event.target.reset();
            iziToast.show({
            
                message: "Sorry, there are no images matching your search query. Please try again!",
                messageColor: 'blue',
                close: true,
                backgroundColor: 'yellow',
                timeout: 3000,
            });

        }
        if (!lightbox) {
            lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionPosition: 'bottom',
                captionDelay: 250
            });
        } else {
            lightbox.refresh();
        }
    })
    .catch(error => console.log(error))
    .finally(() => {
        event.target.reset();
        loader.classList.add('is-hidden');
    });
}



searchForm.addEventListener("submit", onSearchFormSubmit);