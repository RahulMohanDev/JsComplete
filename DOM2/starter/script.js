'use strict';
const buttonList = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

function modalOpen() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function modalClose() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let element of buttonList) {
  element.addEventListener('click', modalOpen);
}

closeModal.addEventListener('click', modalClose);
