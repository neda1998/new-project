const navItem = document.getElementById('nav-item');
const listRight = document.getElementById('list-right');
const imgMain = document.getElementById('img-main');
const itemBoxes = document.querySelectorAll('.item-box');
const hiddenMenu = document.querySelector('#hidden-menu');
const button = document.querySelector('#go-up')
const btn = document.querySelector('#btn-nav')
const listButton = document.querySelector('#list-button')
const headerBg = document.getElementById('header-bg')

//add toggle to menu
function toggleMenu() {
    if (listRight.style.display === 'block') {
        listRight.style.display = "none";
    } else {
        listRight.style.display = "block"
    }


    // move body with click to iconList
    imgMain.classList.toggle('move');
}




//add class to item menu
itemBoxes.forEach((itemBox) => {
    itemBox.addEventListener('click', () => {
        itemBox.classList.toggle("open-dropdown")
    })
})


//add onclick in button go to up of page
function goUp() {
    window.scrollTo(0, 0)
}

//change backgroundColor of header when scroll
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > headerBg.offsetHeight + 50) {
        headerBg.classList.add('change-bg')
    } else {
        headerBg.classList.remove('change-bg')
    }
}

//create slideshow

const img = document.querySelectorAll('.box');
const sliders = document.querySelectorAll('.btn-circle')




let index = 1;
showImg(index)


function slide(e) {
    showImg(index += e)
}

function btnSlide(e) {
    showImg(index = e)
}


function showImg(e) {
    let i;
    if (e > img.length) {
        index = 1
    }

    if (e < 1) {
        index = img.length
    }

    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none"
    }

    img[index - 1].style.display = "block";
    

}