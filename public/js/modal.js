function modalShow(key) {
  modalClose();
  document.querySelector(key).style.display = 'flex';
}

function modalClose() {
  document.querySelectorAll('.modal__container').forEach(modal => {
    modal.style.display = 'none';
  });
}

document.addEventListener('click', function (e) {
  const modal = e.target.closest('.modal_close');

  if (modal) {
    e.preventDefault();
    modalClose();
  }
});