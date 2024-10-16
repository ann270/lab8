// Для десктопної версії
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');
let currentSlide = 0;
let autoSlideTimeout;
function showSlide(index) {
  const offset = -index * 100;
  slider.style.transform = `translateX(${offset}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentSlide = index;
  resetAutoSlide();
}
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    showSlide(index);
  });
});
function autoSlide() {
  autoSlideTimeout = setTimeout(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 5000);
}
function resetAutoSlide() {
  clearTimeout(autoSlideTimeout);
  autoSlide();
}
if (window.innerWidth > 768) {
  autoSlide();
}

// Для мобільної версії
const mobileImages = document.querySelectorAll('.image-container img');
const mobileDots = document.querySelectorAll('.dot');
let currentMobileSlide = 0;
function showMobileSlide(index) {
  mobileImages.forEach(img => img.classList.remove('active'));
  mobileImages[index].classList.add('active');
  mobileDots.forEach(dot => dot.classList.remove('active'));
  mobileDots[index].classList.add('active');
  currentMobileSlide = index;
}
mobileDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    showMobileSlide(index);
  });
});
showMobileSlide(currentMobileSlide);
function mobileAutoSlide() {
  setInterval(() => {
    currentMobileSlide = (currentMobileSlide + 1) % mobileImages.length;
    showMobileSlide(currentMobileSlide);
  }, 5000);
}
if (window.innerWidth <= 1024) {
  mobileAutoSlide();
}

document.addEventListener("DOMContentLoaded", function() {
    showText('info1', document.querySelector(".about-button.active"));
});

function showText(info, button) {
    var textElement = document.getElementById("dynamic-text");
    textElement.classList.add('fade-out');
    setTimeout(() => {
        if (info === 'info1') {
            textElement.innerHTML = '<span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>';
        } else if (info === 'info2') {
            textElement.innerHTML = '<span>Another piece of text for the second button.</span>';
        } else if (info === 'info3') {
            textElement.innerHTML = '<span>This is the content for the third button.</span>';
        }
        textElement.classList.remove('fade-out');
    }, 200);
    var buttons = document.getElementsByClassName("about-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    button.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#date-input", {
    dateFormat: "Y-m-d",
    disableMobile: true,
    onReady: function(selectedDates, dateStr, instance) {
      instance.input.removeAttribute('readonly');
      instance.input.placeholder = "Date";
    }
  });
  flatpickr("#time-input", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    time_24hr: false,
    minuteIncrement: 30,
    disableMobile: true,
    onReady: function(selectedDates, dateStr, instance) {
      instance.input.placeholder = "Time";
    }
  });
});

const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialSlider = document.querySelector('.testimonial-slider');
function handleSlider() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (isMobile) {
        testimonialSlider.scrollTo({
          left: index * testimonialSlider.clientWidth,
          behavior: 'smooth'
        });
      } else if (isTablet) {
        testimonialSlider.scrollTo({
          left: index * (testimonialSlider.clientWidth / 2),
          behavior: 'smooth'
        });
      } else {
        testimonialSlider.scrollTo({
          left: index * (testimonialSlider.clientWidth / 3),
          behavior: 'smooth'
        });
      }
      testimonialDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  handleSlider();
  window.addEventListener('resize', handleSlider);
});