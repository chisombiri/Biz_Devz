const menuBtn = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const video = document.querySelector('.video');
const videoBtn = document.querySelector('.video-btns i');
const videoBar = document.querySelector('.video-bar');

//listening for click on menu button
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menuBtn.classList.toggle('change');
});

//Video controls functionality
//function to play/pause video as well as change buttons
const playPause = () => {
    if(video.paused){
        video.play();
        videoBtn.className = 'far fa-pause-circle';
        video.style.opacity = '0.7';
    } else{
        video.pause();
        videoBtn.className = 'far fa-play-circle';
        video.style.opacity = '0.3';
    }   
};

//play video when btn is clicked
videoBtn.addEventListener('click', () => {
    playPause();
});

//check for when video is playing
video.addEventListener('timeupdate', () => {
    // console.log(video.currentTime, video.duration);

    const barWidth = video.currentTime / video.duration;
    videoBar.style.width = `${barWidth * 100}%`;
    if(video.ended){
        videoBtn.className = 'far fa-play-circle';
        video.style.opacity = '0.3';
    }
});

//initialize swiper for pricing cards
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
        el: ".swiper-pagination",
    }
});
