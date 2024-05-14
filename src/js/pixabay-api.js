 const API_KEY = '43819074-06fd45097a02a2f47bb2a7010'; // Ключ
 const BASE_URL = 'https://pixabay.com/api/';  // url pixabay
// const search = 'cat';
// const params = `?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true `;   // параметри вказувати через &

//  export const fetchPhotosByQuery = (search = 'cat') => {
    
//   return  fetch(`${BASE_URL}${params}`).then(response => {
//     if (!response.ok) {
//          throw new Error(response.statusText);
//      }
//      return response.json();
//    });
//   }


export function fetchPhotosByQuery(query) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&per_page=15&safesearch=true&orientation=horizontal`)
    .then(response => {
        if (!response.ok) {
        throw new Error(response.statusText);
    }
        return response.json();
    });

}
// fetchPhotosByQuery().then(imagesData => {
//     console.log(imagesData.hits);
// });