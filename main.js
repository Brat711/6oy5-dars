const inputBox = document.getElementById('input__box');
const listContainer = document.getElementById('list__container');
const darkModeBtn = document.querySelector('.darc__mond');
const lightModeBtn = document.querySelector('.blc__mond');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write a task');
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;

        let btnDlt = document.createElement('img');
        btnDlt.src = 'images/trash-svgrepo-com 1.png';
        btnDlt.alt = 'Delete';
        btnDlt.style.cursor = 'pointer';
        li.appendChild(btnDlt);
li.className = 'li__idm'
        btnDlt.className = 'btn__delit'
        
        btnDlt.addEventListener('click', () => {
            li.remove();
        });

        listContainer.appendChild(li);

        inputBox.value = '';
    }
}

darkModeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
});

lightModeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
});
