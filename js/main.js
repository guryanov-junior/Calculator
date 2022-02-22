let btnClear = document.querySelector('.button__clear');
let total = document.querySelector('.value');
let equality = document.querySelector('.equality');

let list = document.getElementsByTagName('span');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function (e) {
    total.innerHTML += this.innerHTML;
  }); /*при нажатии на кнопку её значение записывается в total*/
}

btnClear.addEventListener('click', function (e) {
  total.innerHTML = '';
});

equality.addEventListener('click', function (e) {
  total.innerHTML = eval(total.innerHTML);
});
