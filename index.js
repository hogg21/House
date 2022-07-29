const buttons = document.querySelectorAll('.button-page')
const gallery = document.querySelectorAll('.slider-image')
const contacts = document.querySelector('.contact')
const price = document.querySelector('.price')
const portfolio = document.querySelector('.portfolio')


function redirectToContact() {
    window.location.href = 'contacts.html'
}
function redirectToPrice() {
    window.location.href = 'price.html'
}
function redirectToPortfolio() {
    window.location.href = 'portfolio.html'
}
contacts.addEventListener('click', redirectToContact)
price.addEventListener('click', redirectToPrice)
portfolio.addEventListener('click', redirectToPortfolio)

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        speed: 1200,
        centerMode: true
    })
})