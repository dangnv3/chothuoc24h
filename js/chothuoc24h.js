$(document).ready(function(){
    $(".product-lists").owlCarousel({
      items: 2, // Show one product at a time on mobile
      loop: true,
      margin: 10,
      nav: true, // Show navigation arrows
      dots: true, // Show dots for navigation
      responsive: {
          0: {
              items: 2 // 1 item on very small screens
          },
          480: {
              items: 3 // 2 items on small screens
          },
          768: {
              items: 3 // 3 items on medium screens
          },
          992: {
              items: 4 // 4 items on larger screens
          },
          1200: {
              items: 6 // 6 items on large screens
          }
      }
    });
  });

  document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-item').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < slider.children.length - 1) {
        index++;
    } else {
        index = 0;
    }
    slider.style.transform = `translateX(${-index * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = slider.children.length - 1;
    }
    slider.style.transform = `translateX(${-index * 100}%)`;
});