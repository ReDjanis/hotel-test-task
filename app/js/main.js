'use strict'

const motivators = document.querySelectorAll('.card__motivator');
const buttonsBooking = document.querySelectorAll('.card__button');
const linksPayment = document.querySelectorAll('.card-reserved__link');

motivators.forEach(item => {
    let parentElem = item.closest('.card');
    if (parentElem) {
        if (parentElem.dataset.motivator === 'true') {
            item.classList.add('motivator-active');
        }
    }
});

buttonsBooking.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        let currentCard = btn.closest('.card');

        currentCard.addEventListener('mouseleave', addClass);

        currentCard.addEventListener('click', () => {
            if (currentCard.classList.contains('card-reserved')) {
                currentCard.classList.remove('card-reserved');
                currentCard.removeEventListener('mouseleave', addClass);
            }
        });
    });
});

linksPayment.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
    })
})

function addClass() {
    event.target.classList.add('card-reserved');
}







