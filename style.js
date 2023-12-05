document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const navList = document.querySelector('.nav-list');

    toggleButton.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});

