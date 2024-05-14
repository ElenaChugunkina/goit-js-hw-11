import{i as c,S as p}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d=o=>o.map(e=>`<li class="img">
         <a class="gallery-link" href="${e.largeImageURL}">
           <img class="gallery-image" src= "${e.webformatURL}"
            data-source="${e.largeImageURL}"
             alt="${e.tags}"/>
             <ul class="description">
                    <li>
                    <p>Likes</p>
                    <p class="likes-one">${e.likes}</p>
                    </li>
                    <li>
                    <p>Views</p>
                    <p class="likes-one">${e.views}</p>
                    </li>
                    <li>
                    <p>Comments</p>
                    <p class="likes-one">${e.comments}</p>
                    </li>
                    <li>
                    <p>Downloads</p>
                    <p class="likes-one">${e.downloads}</p>
                    </li>
                </ul>
          </a>
        
       </li>`).join(""),f="43819074-06fd45097a02a2f47bb2a7010",m="https://pixabay.com/api/";function h(o){return fetch(`${m}?key=${f}&q=${o}&image_type=photo&per_page=15&safesearch=true&orientation=horizontal`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const i=document.querySelector(".gallery"),y=document.querySelector(".js-search-form"),u=document.querySelector(".js-loader");let a;function g(o){o.preventDefault();const e=o.target.elements.searchKey.value.trim();if(e===""){i.innerHTML="",o.target.reset(),c.show({message:"Input field can not be empty",messageColor:"black",close:!0,backgroundColor:"orange",timeout:3e3});return}i.innerHTML="",u.classList.remove("is-hidden"),h(e).then(s=>{i.innerHTML=d(s.hits),s.total===0&&(o.target.reset(),c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"blue",close:!0,backgroundColor:"yellow",timeout:3e3})),a?a.refresh():a=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(s=>console.log(s)).finally(()=>{o.target.reset(),u.classList.add("is-hidden")})}y.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
