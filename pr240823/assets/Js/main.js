// Ловим кнопку и создаем переключатель темы
const buttonChangeThemes = document.querySelector('.button_change_themes');
// Создаем слушателя, 'click'
buttonChangeThemes.addEventListener('click', (e) => {
    document.body.classList.toggle('light')
})

