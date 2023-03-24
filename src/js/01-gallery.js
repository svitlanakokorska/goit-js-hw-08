import { galleryItems } from "./gallery-items";

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(galleryItems);
const items = [];

//Перебирання масиву об'єктів методом forEach
galleryItems.forEach((element) => {
    
  //Створення тегів галереї і класів до тегів
  
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");

  galleryLink.href = element.original;
  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = element.preview;

  galleryImage.setAttribute("title", element.description);
  

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);

//Затримка зображення
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});