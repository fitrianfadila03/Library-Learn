const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach((star) => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        
        stars.forEach((s) => s.classList.remove('selected'));

        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }

        ratingValue.textContent = `Rating: ${rating}`;
    });
});
