const form = document.querySelector('#meme-info');
const imgSrc = document.querySelector('#img-src');
const tText = document.querySelector('#top-text');
const bText = document.querySelector('#bottom-text');
//const buttons = document.querySelectorAll('.remove-button');
let btnCounter = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!imgSrc.value || !tText.value || !bText.value) {
        alert('Please give all informatoin!')
        return
    }
    
    //Create elements for new img 
    const divImg = document.createElement('div');
    const memeImg = document.createElement('img');
    const memeTop = document.createElement('div');
    const memeBtm = document.createElement('div');
    const rmvButton = document.createElement('button');

    divImg.setAttribute('class', 'container')
    memeImg.setAttribute('src', imgSrc.value);
    memeTop.setAttribute('class', 'top-text');
    memeBtm.setAttribute('class','bottom-text') 
    btnCounter += 1;
    rmvButton.setAttribute('class', 'remove-button');
    rmvButton.classList.add(btnCounter.toString());

    memeTop.innerText = tText.value;
    memeBtm.innerText = bText.value; 
    rmvButton.innerText = 'X';

    //Append new elements in html
    e.target.insertAdjacentElement('afterEnd', divImg);
    divImg.appendChild(memeImg);
    divImg.appendChild(memeTop);
    divImg.appendChild(memeBtm);
    divImg.appendChild(rmvButton);

    rmvButton.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })

    form.reset();
})


    


// https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg
// https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg
// https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg