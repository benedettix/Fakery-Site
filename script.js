//SLIDER
let sliderImages = document.querySelectorAll('.slider-images img');
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');


let imageIndex = 0;

const hideImages = () => {
    sliderImages.forEach(img => {
        img.style.display = "none";
    })
}

const moveLeft = () => {
    hideImages();
    imageIndex--;
    if(imageIndex === -1) {
        imageIndex = sliderImages.length - 1;
    }
    sliderImages[imageIndex].style.display = "block";
}

const moveRight = () => {
    hideImages();
    imageIndex++;
    if(imageIndex === 3) {
        imageIndex = 0;
    }
    sliderImages[imageIndex].style.display = "block";
}

//EVENTS
leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);

//RESPONSIVE BUTTON
let resBtn = document.querySelector('#res-btn');
let headerUl = document.querySelector('.header ul');

const showHideBtn = () => {
if(resBtn.innerHTML === "MENU") {
    resBtn.innerHTML = "CLOSE";
    headerUl.classList.add('show')
    headerUl.classList.remove('hide')
}else if(resBtn.innerHTML === "CLOSE"){
    resBtn.innerHTML = "MENU";
    headerUl.classList.add('hide')
    headerUl.classList.remove('show')
}

}
resBtn.addEventListener('click', showHideBtn);

//CATEGORIES
let portfolioCategories = document.querySelectorAll('.portfolio-categories button');
let portfolioSingleItem = document.querySelectorAll('.portfolio-single-item');

portfolioCategories.forEach(btns => {

    btns.addEventListener('click', function() {
        let self = this;
        let dataCategory = this.getAttribute('data-category');
        portfolioSingleItem.forEach(item => {
            item.style.display = "none";
        })
        if (this.getAttribute('data-category') === "sve") {
            portfolioSingleItem.forEach(item => {
                item.style.display = "block";
            })
        }
        portfolioSingleItem.forEach(item => {
            if(item.getAttribute('data-category').includes(dataCategory)) {
                item.style.display = "block";
            }
        })
    })
})

//POP UP

let popupBtn = document.querySelector('.modal-section');
let popupModal = document.querySelector('.popup-modal');
let popupOverlay = document.querySelector('.overlay');
let closeModal = document.querySelector('#closeModal');

popupBtn.addEventListener('click', function() {
    popupModal.style.display = "block"
    popupOverlay.style.display = "block"

})

const closeBtn = () => {
    popupModal.style.display = "none"
    popupOverlay.style.display = "none"
}

closeModal.addEventListener('click', closeBtn);