const hamburgerIcon= document.querySelector('.hamburger-menu-container')
const headerContent= document.querySelector('header-content')

hamburgerIcon.addEventListener('click', () => {
    headerContent.classList.add('menu-open')
})