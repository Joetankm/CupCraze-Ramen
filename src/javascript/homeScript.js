let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-button');

  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('liked');
    });
  });
});

function buttonActive() {
  const element = document.getElementById('hiddenItems');
  const button = document.getElementById('showAll');
  const down = document.getElementById('downIcon');
  const up = document.getElementById('upIcon');
  const bottomItem = document.getElementById('buttonContainerBottom');
  
  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'flex';
    button.classList.add('toggled');
    down.style.display='none';
    up.style.display='block';
    bottomItem.style.display='flex';

  } else {
    element.style.display = 'none';
    button.classList.remove('toggled');
    down.style.display='block';
    up.style.display='none';
    bottomItem.style.display='none';
  }
}

function filter(brand) {
  const type = document.getElementsByClassName(brand);
  const all_item = document.getElementsByClassName('listItem');
  const button = document.getElementById(brand + 'Filter');
  const all = document.getElementById('allFilter');
  let allBlock = true;

if (all.classList.contains('toggled')){
  all.classList.remove('toggled');
}

for (let i = 0; i < all_item.length; i++) {
    if (all_item[i].style.display !== 'flex' && all_item[i].style.display !== '') {
        allBlock = false;
        break;
    }
}

if (allBlock) {
    for (let i = 0; i < all_item.length; i++) {
        all_item[i].style.display = 'none';
    }
}

if (type[0].style.display === 'none') {
    for (let i = 0; i < type.length; i++) {
        type[i].style.display = 'flex';
    }
    button.classList.add('toggled');
} else {
    for (let i = 0; i < type.length; i++) {
        type[i].style.display = 'none';
    }
    button.classList.remove('toggled');
}
}

function allFilter(){
  const all_item = document.getElementsByClassName('listItem');
  const button = document.getElementById('allFilter');
  const all_button=document.getElementsByClassName('filterButton')
  for (let i = 0; i < all_item.length; i++) {
    all_item[i].style.display='flex'
    console.log('hello')
  }
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove('toggled')
  }
  button.classList.add('toggled');
}

function logout() {
  alert("Thanks for visiting !!");
  window.location.href = 'index.html';
}