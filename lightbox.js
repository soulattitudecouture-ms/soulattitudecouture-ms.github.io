document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.lightbox-trigger');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // If page has no lightbox elements, exit safely
    if (!triggers.length || !lightbox || !lightboxImg || !closeBtn) return;

    triggers.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        }
    });
});
