document.addEventListener("DOMContentLoaded", function() {
    // 默认显示全部图片
    filterImages('all');

    const buttons = document.querySelectorAll('.category-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterImages(category);
            setActiveButton(button);
        });
    });
});

function filterImages(category) {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function setActiveButton(clickedButton) {
    const buttons = document.querySelectorAll('.category-button');

    buttons.forEach(button => {
        if (button === clickedButton) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
