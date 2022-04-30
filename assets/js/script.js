const openModal = document.querySelector('openModal');
const modal = document.querySelector('modal');

openModal.addEventListener('click', (e)=>{
    modal.classList.add('.active');
});
