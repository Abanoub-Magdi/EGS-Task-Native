
// #region Dynamic-Part


function handleInteraction(index) {
    // Reset all titles and descriptions
    document.querySelectorAll('.title-container').forEach(t => {
        t.querySelector('.title').style.color = '';
        t.querySelector('.title').style.transform = '';
            
        t.querySelector('.description').style.display = 'none';
    });

    
    // Change clicked title style
    const titleContainer = document.querySelector(`.title-container[data-index="${index}"]`);
    const title = titleContainer.querySelector('.title');

    title.style.color = 'red';
    title.style.transform = 'translateX(5rem)';



    // Show description
    const description = titleContainer.querySelector('.description');
    description.style.display = 'block';

    // Rotate images
    const baseImage = document.querySelector('.base-image');
    const dottedImage = document.querySelector('.dotted-image');
    baseImage.style.transform = `rotate(${index * 10}deg)`;
    dottedImage.style.transform = `rotate(${index * 15}deg)`;

    // Update main image
    document.querySelectorAll('.main-image').forEach((img, imgIndex) => {
        if (imgIndex === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });

    // Highlight the corresponding secondary image
    document.querySelectorAll('.secondary-image').forEach((img, imgIndex) => {
        if (imgIndex === index) {
            img.classList.remove('gray');
            img.style.transform = 'scale(1.2)';
        } else {
            img.classList.add('gray');
            img.style.transform = 'scale(1)';
        }
    });
}

document.querySelectorAll('.title-container').forEach((container, index) => {
    container.querySelector('.title').addEventListener('click', () => {
        handleInteraction(index);
    });
});

document.querySelectorAll('.secondary-image').forEach((image, index) => {
    image.addEventListener('click', () => {
        handleInteraction(index);
    });
});

//#endregion


































// document.addEventListener("DOMContentLoaded", () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');
    
//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });

//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', () => {
//             navLinks.classList.remove('active');
//         });
//     });

//     // Smooth scroll for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();

//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // Carousel functionality
//     const carouselImages = document.querySelector('.carousel-images');
//     const prevButton = document.querySelector('.carousel-prev');
//     const nextButton = document.querySelector('.carousel-next');
//     let currentIndex
// let images = Array.from(carouselImages.children);