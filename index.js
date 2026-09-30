let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;   //沒有slideshow的頁面就直接跳過

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 3 seconds
}

//產品圖示區塊
let currentSlide = 0;
const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");

const visibleSlides = 3
const totalSlides = cards.length;

function moveSlide(direction) {
  const maxSlide = totalSlides - visibleSlides;

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxSlide) currentSlide = maxSlide;

  const slideWidth = cards[0].offsetWidth + 40; //卡片寬 + gap
  carousel.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

//導覽列區塊
//when the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  document.getElementById('myDropdown').classList.toggle("show");
}
 
function toggleLevel2(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("myDropdown1-2").classList.toggle("show");
}
 
//Close the dropdown if the user clicks outside of it
document.addEventListener('click', function(e) {
    if (!e.target.closest('.navproduct') && !e.target.closest('.level1-item')) {
        document.getElementById('myDropdown').classList.remove('show');
        document.getElementById('myDropdown1-2').classList.remove('show');
    }
});



/*document.addEventListener('click', function(e) {
    if (!e.target.closest('.navproduct')) {
        document.getElementById('myDropdown').classList.remove('show');
        document.getElementById('myDropdown1-2').classList.remove('show');
    }
});*/ 


//Full Screen Overlay-產品類別
  function openCategoryOverlay() {
    document.getElementById("categoryOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeCategoryOverlay() {
    document.getElementById("categoryOverlay").classList.remove("active");
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeCategoryOverlay();
    }
  });

//手機版選單的開關
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

menuToggle.addEventListener("click", function() {
  mobileNav.classList.toggle("show");
});

//About 關於菘啟-願景與使命, 從左右兩側滑進場
const vandm = document.querySelector("#vandm");
const vandmH2 = document.querySelector("#vandm h2");
const vandmH3 = document.querySelector("#vandm h3");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    vandmH2.classList.add("animate");
    vandmH3.classList.add("animate");
    
    observer.unobserve(vandm);
  }
});

observer.observe(vandm);


    
    
 