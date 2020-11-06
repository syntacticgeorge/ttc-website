//Select nav elements

const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
    selectElement('.nav-items').classList.toggle('active');
});





























// document.getElementById('s-img-container').querySelector('img').src="../../img/assets/uiux.svg";

// function uiux() {
//     document.getElementById('s-img-container').querySelector('img').src="../../img/assets/uiux.svg";
// }

// function uxresearch() {
//     document.getElementById('s-img-container').querySelector('img').src="../../img/assets/growth.svg";
// }