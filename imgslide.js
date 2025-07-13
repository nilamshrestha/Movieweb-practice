function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');

    video.paused ? video.play() : video.pause();
    trailer.classList.toggle('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
}
function autoSlide() {
    const instance = M.Carousel.getInstance(document.querySelector('.carousel'));
    instance.next();
}

// Add this inside the $(document).ready block
$(document).ready(function () {
    $('.carousel').carousel();
    setInterval(autoSlide, 5000); // Adjust the interval as needed (in milliseconds)
});


function changeBg(bg, title) {
    // alert("Hello");
    const contents = document.querySelectorAll('.content');
    const banner = document.querySelector('.banner'); // Add dot before 'banner'
    banner.style.background = `url("${bg}")`; // Fix syntax for background property
    banner.style.backgroundSize = 'cover'; // Fix typo in 'cover'
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
          
        }
    });
    
}
