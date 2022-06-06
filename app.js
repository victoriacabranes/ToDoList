const form = document.querySelector('#toDoForm');
const input = document.querySelector('#inputTask');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submited')
    const task = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = task;
    list.append(newLi);
    input.value = '';

    newLi.addEventListener('click', function (e) {
        this.remove();
    })
});

const form2 = document.querySelector('#toDoForm2');
const input2 = document.querySelector('#inputTask2');
const list2 = document.querySelector('#list2');

form2.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submited')
    const task2 = input2.value;
    const newLi2 = document.createElement('li');
    newLi2.innerText = task2;
    list2.append(newLi2);
    input2.value = '';

    newLi2.addEventListener('click', function (e) {
        this.remove();
    })
});

const form3 = document.querySelector('#toDoForm3');
const input3 = document.querySelector('#inputTask3');
const list3 = document.querySelector('#list3');

form3.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submited')
    const task3 = input3.value;
    const newLi3 = document.createElement('li');
    newLi3.innerText = task3;
    list3.append(newLi3);
    input3.value = '';

    newLi3.addEventListener('click', function (e) {
        this.remove();
    })
});

