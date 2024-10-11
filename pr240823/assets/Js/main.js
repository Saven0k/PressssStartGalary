// Ловим кнопку и создаем переключатель темы
const buttonChangeThemes = document.querySelector('.button_change_themes');
// Создаем слушателя, 'click'
buttonChangeThemes.addEventListener('click', (e) => {
    document.body.classList.toggle('light')
})



// // Ловим блок со всеми карточками
// const cardsBox = document.querySelector('.mainless')
// // Лоавим блоки с карточками
// const cards = document.querySelectorAll('.card');
// cards.forEach(el => {
//     el.addEventListener('click', (e) => {
//         el.style.position = 'absolute';
//         el.style.left = '50%';
//         el.style.top = '50%';
//         el.style.transform = 'scale(2) translate(-20%, -20%)';
//         el.children[1].style.display = 'flex';
//         el.children[0].style.width = '200px';
//         el.style.width = '40vw';
//         el.style.background = '#000'
//         el.style.borderTopRightRadius = '20px'
//         el.style.borderBottomRightRadius = '20px'
//         el.style.border = '1px solid #fff'
//         el.children[2].style.display = 'flex'
//         el.style.zIndex = '100';
//         cardsBox.style.zIndex = '1'
//         el.children[2].addEventListener('click', (e) => {
//             el.children[1].style.display = 'none';
//             el.children[2].style.display = 'none'
//             el.style.background = 'none';
//             el.style.position = 'relative';
//         })
//     })


// })

// Ловим header, что бы после него вставить картинку
const headerElm = document.querySelector('.header');
const footerElm = document.querySelector('.footer')
// Ловим тег main
const mainElm = document.querySelector('.mainless')

// Ловим все картинки в карточках
const imgElm = mainElm.querySelectorAll('.img-card');


// Бежим по карточкам
imgElm.forEach(el => {

    el.addEventListener('click', (e) => {
        // Создаем элемент для вставки большой карточки
        const newElm = document.createElement('div')
        newElm.classList.add('big__card');
        // Элемент самой карточки
        const cardElm = document.createElement('div')
        cardElm.classList.add('cardElm')

        // Ловим картинку из карточки
        const ImgElm = el.parentElement.children[0].cloneNode(true);
        ImgElm.classList.add("imgElm")
        ImgElm.classList.remove("img-card")
        // Ловим текстовый элемент из карточки
        const PElm = el.parentElement.children[1].cloneNode(true);
        PElm.classList.add("pElm")
        // Ловим крестик
        const closeElm = el.parentElement.children[2].cloneNode(true);
        closeElm.classList.add("close_elm")
        ImgElm.style.display = 'flex';
        PElm.style.display = 'flex';
        closeElm.style.display = 'flex';

        cardElm.appendChild(ImgElm)
        cardElm.appendChild(PElm)
        cardElm.appendChild(closeElm)
        newElm.appendChild(cardElm)
        headerElm.after(newElm)

        // Для тега header и mainless задаем свойства
        headerElm.style.filter = 'brightness(10%)'
        footerElm.style.filter = 'brightness(10%)'
        mainElm.style.display = 'none'

        const bigCardElm = document.body.querySelector('.big__card');

        bigCardElm.scrollIntoView({ block: "center", behavior: "smooth" })

        const ElElm = newElm.children[0].children[2];

        ElElm.addEventListener('click', (e) => {
            headerElm.style.filter = 'brightness(100%)'
            footerElm.style.filter = 'brightness(100%)'
                   mainElm.style.display = 'flex'
           
            document.body.removeChild(bigCardElm)
        })
    })

})
