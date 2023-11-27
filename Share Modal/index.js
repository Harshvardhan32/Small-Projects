let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

let closeModal = () => {
    modal.style.cssText = "display: none";
    overlay.style.display = 'none';
};

function openModal() {
    modal.style.cssText = "display : block";
    overlay.style.display = 'block';
}
let closeModal1 = () => {
    overlay.style.display = 'none';
};
