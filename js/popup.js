const open = document.getElementById('open');
const popup = document.getElementById('popup');
const cancel = document.getElementById('cancel');

open.addEventListener('click', () => {
    popup.classList.add('show');
})

cancel.addEventListener('click', () => {
    popup.classList.remove('show');
})