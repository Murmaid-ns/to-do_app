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


const accumulator = {
    sum(...args) {
        this.result = args.reduce((sum, current) => sum + current, this.result);
        return this.result;
    },
    diff(...args) {
        this.result = args.reduce((diff, current) => diff - current, this.result);
        return this.result;
    },
    mul(...args) {
        this.result = args.reduce(
            (mul, current) => (mul || 1) * current,
            this.result
        );
        return this.result;
    },
    div(...args) {
        this.result = args.reduce((div, current) => div / current, this.result);
        return this.result;
    },
    result: 0,
    reset() {
        this.result = 0;
        return this.result;
    }
};

accumulator.sum(2, 2);
console.log(accumulator.result); // 4
accumulator.sum(2, 2, 3);
console.log(accumulator.result); // 11
accumulator.div(2);
console.log(accumulator.result); // 5.5
accumulator.diff(1);
console.log(accumulator.result); // 4.5
accumulator.mul(10);
console.log(accumulator.result);// 9
accumulator.reset();
console.log(accumulator.result); // 0

fetch('http://api.giphy.com/v1/gifs/trending?api_key=0zRG8OoWXqE5oL5Dt9nqeOk06wBeTGCM&limit=10').then(res => {
    res.json().then((data)=>{
        data.data.forEach((el) => {
           const elUrl = el.images.original.url;
           const img = document.createElement('img');
           const divGif = document.querySelector('.gify');
           img.src = elUrl;
           img.classList.add('gifs')
            console.dir(img);
            divGif.append(img);
        })
    })
})
