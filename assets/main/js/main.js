/* * * * * * * * * *
  PAGE LOAD EFFECT
* * * * * * * * * */
function animate(className, animation='fadeInTop', delay=0){

  const elements =  document.getElementsByClassName(className);

  for(i = 0; i < elements.length; i++){
    const e = elements[i];

    e.classList.add('hide');

    setTimeout(() => {
      e.classList.remove('hide');
      e.classList.add(animation); 
      setTimeout(() => e.classList.remove(animation), 1000);
    }, delay)
  }
}

/* * * * * * * * * * * 
  NAVIGATION HANDLER
* * * * * * * * * * */
const showMenu = (toggleId, navId) =>{
    const toggle    = document.getElementById(toggleId);
    const nav       = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    document.getElementById('nav-menu').classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* * * * * * * *
  WORK HANDLER
* * * * * * * */
function makeModal(name){

  const modal = document.getElementById("modal-".concat(name));
  const close = document.getElementById("close-".concat(name))
  
  for(i = 0; i < document.getElementsByClassName(name).length; i++){
    document.getElementsByClassName(name)[i].onclick = function() {
      document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
      modal.style.display = "block";
    }
  }

  close.onclick = function() {
    document.getElementsByTagName("BODY")[0].style.overflow = 'auto';
    modal.style.display = "none";
  }

}
/* * * * * * * * * * * * *  
  RECOMMENDATION HANDLER
* * * * * * * * * * * * */
const slideShiftInterval  = 30000;
var slideInterval          = null;
var slideIndex            = 1;

// Thumbnail image controls
function currentSlide(n) {
  resetProgress();
  showSlides(slideIndex = n);
  animate('recommendation__container', 'fade');
}

function showSlides(n, slideShift) {
  var i;

  const slides = document.getElementsByClassName("slideshow__slide");
  const dots = document.getElementsByClassName("slideshow__dot");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slideshow__active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideshow__active";

  if(slideShift) slideShiftEnabled = false;
}

function resetProgress(){

  if(document.getElementsByClassName("recommendation__progressbar")[0].classList.contains('load-30s'))
    document.getElementsByClassName("recommendation__progressbar")[0].classList.remove('load-30s');
  
  if(!document.getElementsByClassName("recommendation__progressbar")[0].classList.contains('load-30s'))
    setTimeout(() => document.getElementsByClassName("recommendation__progressbar")[0].classList.add('load-30s'), 100);

  clearInterval(slideInterval)
  slideInterval = null;
  slideInterval = setInterval(() => slideShift(false), slideShiftInterval);
}

function slideShift(reverse){
  if(!reverse){
    if(slideIndex >= document.getElementsByClassName("slideshow__dot").length) slideIndex = 1;
    else slideIndex++;
    animate('recommendation__container', 'fadeInLeft');
  }
  else{
    if(slideIndex <= 0) slideIndex = document.getElementsByClassName("slideshow__dot").length;
    else slideIndex--;
    animate('recommendation__container', 'fadeInRight');

  }
  showSlides(slideIndex);
  resetProgress();
}
/* MODALS */
const modals = document.getElementsByClassName('modal');

window.onclick = function(event) {
  for(i = 0; i < modals.length; i++){
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
      document.getElementsByTagName("BODY")[0].style.overflow = 'auto';
    }
  }
}

const cards = [
  "livestock-robotics",
  "corvus-drones",
  "track32",
  "sentencegaming",
]

function initModalController(){
  cards.forEach( card => {
    makeModal(card.toString());
    showSlides(slideIndex);
  });
  slideInterval = setInterval(() => slideShift(false), slideShiftInterval);
}

/* FOR SWIPING */
const containers = document.getElementsByClassName('recommendation')

var initX, diffX = null;

function startTouch(e){
  initX = e.touches[0].clientX;
};

function moveTouch(e){
  if (initX == null) return;
  diffX = initX - e.touches[0].clientX;
};

function moveEnd(e){
  if (Math.abs(diffX) > screen.width / 4){
    if (diffX > 0)slideShift(true);
    else slideShift(false);
    initX = null;
  }
}

for(var i = 0; i < containers.length; i++){
  containers[i].addEventListener("touchstart", startTouch);
  containers[i].addEventListener("touchmove", moveTouch);
  containers[i].addEventListener("touchend", moveEnd);
}


/* * * * * * * * * * 
  LANGUAGE HANDLER
* * * * * * * * * */


function setLang(lang){
  const changables = [
    'home__title',
    'about__text',
    'about__subtitle',
    'work__subtitle',
    'recommendation__subtitle',
    'projects__subtitle',
    'modal__text_livestock-robotics',
    'modal__text_track32',
    'modal__text_corvus-drones',
    'modal__text_sentencegaming',
    'contact__text',
    'recommendation__text_joris',
    'recommendation__text_gerhold',
    'recommendation__text_bastiaan'
  ]

  document.getElementsByClassName('flag__selected')[0].getElementsByClassName('flag__item')[0].src = languages[lang]['flag'];

  const x = document.getElementsByClassName('flag__available')[0].getElementsByClassName('flag__item');

  for(i = 0; i < x.length; i++){
    if (x[i].classList.contains('flag__available__highlight')){
      x[i].classList.remove('flag__available__highlight');
    }
  }
  for(i = 0; i < x.length; i++){
    if (x[i].classList.contains(lang)){
      x[i].classList.add('flag__available__highlight');
    }
  }

  changables.forEach((item) => {
    document.getElementsByClassName(item)[0].innerHTML = languages[lang][item];
    animate(item, 'fadeInTop')
  });
} 

function initLangController(){
  //- Lang Bar popup animation
  document.getElementsByClassName('flag__selected')[0].addEventListener('click', () => { 
    document.getElementsByClassName('flag__available')[0].classList.remove('flag__toggle');
    document.getElementsByClassName('flag__selected')[0].classList.add('flag__toggle');
    animate('flag__selected', 'grow');
  });
  //- Lang Bar popout animation
  for(i = 0; i < 2; i++){
    document.getElementsByClassName('flag__available')[0].getElementsByClassName('flag__item')[i].addEventListener('click', () => {
      document.getElementsByClassName('flag__available')[0].classList.add('flag__toggle');
      document.getElementsByClassName('flag__selected')[0].classList.remove('flag__toggle');
    });
  }

  //- Language update
  Array.from(document.getElementsByClassName('flag__available')[0].getElementsByClassName('flag__item')).forEach((flag__item) => {
    flag__item.addEventListener('click', (e) => {
      for (key in languages){
        if(flag__item.classList.contains(key)){
          setLang(key);
          document.getElementsByClassName('flag__selected')[0].getElementsByClassName('flag__item')[0].classList.remove(
            document.getElementsByClassName('flag__selected')[0].getElementsByClassName('flag__item')[0].classList[document.getElementsByClassName('flag__selected')[0].getElementsByClassName('flag__item')[0].classList.length-1]
          )
          document.getElementsByClassName('flag__selected')[0].getElementsByClassName('flag__item')[0].classList.add(key)  
        }
      }
    });
  });

}

/* CONTROLLER */
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    
    animate('home__img', 'fadeInTop', 100);
    animate('home__button', 'fadeInTop', 200);
    animate('home__social', 'fadeInTop', 300);

    initLangController();

    initModalController();

    if(navigator.language == 'nl-NL') setLang('nl_nl');
    else setLang('en_uk');

  }
};
