import('./assets/styles/main.scss');

const addButton = document.getElementById('add-button');
const input = document.getElementById('input');
const ol = document.getElementById('list');
const delButton = document.getElementById('del-button');
const list = document.querySelector('#list');
const delSelButton = document.getElementById('del-selected-button');

function adLiOnList() {
  const liLast = document.createElement('li');
  liLast.innerHTML = input.value;
  liLast.classList.add('list-item');
  input.value = '';
  ol.append(liLast);
}

addButton.addEventListener('click', () => {
  if (input.value !== '') {
    adLiOnList();
  }
});

input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault();
    if (input.value !== '') {
      e.preventDefault();
      adLiOnList();
    }
  }
});

list.addEventListener('click', (e) => {
  const el = e.target.closest('.list-item');
  if (!el) {
    return;
  }
  el.classList.add('selected');
  delSelButton.addEventListener('click', () => {
    const selectedEl = document.querySelectorAll('.selected');
    selectedEl.forEach((elem) => {
      elem.parentNode.removeChild(elem);
    });
  });
});

delButton.addEventListener('click', () => {
  const listElements = document.querySelectorAll('.list-item');
  listElements.forEach((el) => {
    el.parentNode.removeChild(el);
  });
});
