document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const certCards = document.querySelectorAll('.cert-card');
    const closeBtn = document.querySelector('.lightbox-close');

    // Add a click event to each certificate card
    certCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src;
            
            // Show the lightbox
            lightbox.style.display = 'flex';
            // Set the image inside the lightbox
            lightboxImg.src = imgSrc;
        });
    });

    // Function to close the lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
    };

    // Close the lightbox when the close button is clicked
    closeBtn.addEventListener('click', closeLightbox);

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});