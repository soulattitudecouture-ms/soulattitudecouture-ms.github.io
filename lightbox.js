document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-nav.prev");
    const nextBtn = document.querySelector(".lightbox-nav.next");

    // Select ALL product images automatically
    const images = Array.from(document.querySelectorAll(".product-item img"));
    let currentIndex = 0;

    if (!images.length) return;

    function openLightbox(index) {
        currentIndex = index;
        const img = images[currentIndex];

        lightboxImg.src = img.src;
        caption.textContent = img.alt || "";
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
        lightboxImg.src = "";
        document.body.style.overflow = "";
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }

    // Click on image → open
    images.forEach((img, index) => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => openLightbox(index));
    });

    // Controls
    closeBtn.addEventListener("click", closeLightbox);
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Close on backdrop click
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard support
    document.addEventListener("keydown", e => {
        if (lightbox.style.display !== "flex") return;

        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
    });
});
