document.addEventListener('DOMContentLoaded', () => {
    const triggers = Array.from(document.querySelectorAll('.lightbox-trigger'));
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-nav.prev');
    const nextBtn = document.querySelector('.lightbox-nav.next');

    if (!triggers.length || !lightbox) return;

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + triggers.length) % triggers.length;
        lightboxImg.src = triggers[currentIndex].src;
    }

    triggers.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index);
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    document.addEventListener('keydown', e => {
        if (lightbox.style.display !== 'flex') return;

        if (e.key === 'Escape') lightbox.style.display = 'none';
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
});
