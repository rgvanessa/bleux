const details = document.querySelector('.details');
const summary = document.querySelector('.menu-hamburguer');

details.addEventListener('toggle', function() {
    if (details.open) {
        summary.classList.add('open');
    } else {
        summary.classList.remove('open');
    }
});
