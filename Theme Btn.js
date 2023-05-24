let toggleBox = document.querySelector('.toggle-box-label-left')
let body = document.querySelector('.light-theme')
let sectionBlock = document.querySelector('.block2-lightTheme')
let navDark = document.querySelector('.nav-dark')
let pDark = document.querySelector('.dark')
let divDarks = document.querySelectorAll('.div-dark')

toggleBox.onclick = function() {
    body.classList.toggle('dark-theme')
    body.classList.toggle('light-theme')

    navDark.classList.toggle('nav-light')
    navDark.classList.toggle('dark-light')

    sectionBlock.classList.toggle('block2-darkTheme')
    sectionBlock.classList.toggle('block2-lightTheme')

    pDark.classList.toggle('dark')
    pDark.classList.toggle('light')
}
