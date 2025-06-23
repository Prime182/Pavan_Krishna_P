let slideIndexes = {}; // Object to store slideIndex for each slideshow

function initSlideshow(slideshowId) {
    slideIndexes[slideshowId] = 1;
    showSlides(slideIndexes[slideshowId], slideshowId);
}

function plusSlides(n, slideshowId) {
    showSlides(slideIndexes[slideshowId] += n, slideshowId);
}

function currentSlide(n, slideshowId) {
    showSlides(slideIndexes[slideshowId] = n, slideshowId);
}

function showSlides(n, slideshowId) {
    let i;
    let slideshowContainer = document.getElementById(slideshowId);
    if (!slideshowContainer) {
        console.error(`Slideshow container with ID "${slideshowId}" not found.`);
        return;
    }
    let slides = slideshowContainer.getElementsByClassName("mySlides");
    let dots = slideshowContainer.getElementsByClassName("dot");

    console.log(`showSlides called for ID: ${slideshowId}, n: ${n}`);
    console.log(`Number of slides: ${slides.length}, Number of dots: ${dots.length}`);

    if (n > slides.length) {slideIndexes[slideshowId] = 1}
    if (n < 1) {slideIndexes[slideshowId] = slides.length}

    console.log(`Current slideIndex for ${slideshowId}: ${slideIndexes[slideshowId]}`);

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0) {
        slides[slideIndexes[slideshowId]-1].style.display = "block";
        dots[slideIndexes[slideshowId]-1].className += " active";
    } else {
        console.warn(`No slides found for slideshow ID: ${slideshowId}`);
    }
}

// Initialize all slideshows on page load
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.slideshow-container').forEach(container => {
        if (container.id) {
            initSlideshow(container.id);
        }
    });
});
