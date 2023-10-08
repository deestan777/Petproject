// Отримуємо посилання на елемент, який ви хочете зробити "sticky"
var stickyElement = document.querySelector('.nav');

// Функція, яка перевіряє положення елемента і додає/видаляє клас "sticky"
function toggleStickyClass() {
    var rect = stickyElement.getBoundingClientRect();
    if (rect.top <= 0) {
        stickyElement.classList.add('sticky');
    } else {
        stickyElement.classList.remove('sticky');
    }
}

// Викликаємо функцію при скролі сторінки
window.addEventListener('scroll', toggleStickyClass);

const submitButton = document.getElementById('submit');

submitButton.addEventListener('mouseenter', () => {
    submitButton.style.background = "linear-gradient(180deg, rgba(254, 200, 241, 0.90) -22.92%, rgba(237, 146, 215, 0.00) 20.75%), radial-gradient(89.95% 197.97% at 19.06% 100%, #541095 0%, #BD4CE0 100%)";
});

submitButton.addEventListener('mouseleave', () => {
    submitButton.style.background = "linear-gradient(180deg, rgba(254, 200, 241, 0.90) -22.92%, rgba(237, 146, 215, 0.00) 26.73%), radial-gradient(137.13% 253.39% at 76.68% 66.67%, #602EA6 0%, #C977D6 100%)";
});
