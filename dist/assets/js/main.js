const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// slider range
const range = document.querySelectorAll(".range-slider span input");
progress = document.querySelector(".range-slider .progress");
let gap = 0.1;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(range[0].value);
    let maxRange = parseInt(range[1].value);

    if (maxRange - minRange < gap) {
      if (e.target.className === "range-min") {
        range[0].value = maxRange - gap;
      } else {
        range[1].value = minRange + gap;
      }
    } else {
      progress.style.left = (minRange / range[0].max) * 100 + "%";
      progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
      inputValue[0].value = minRange;
      inputValue[1].value = maxRange;
    }
  });
});


// Tabs panel
let tabsContainer = document.querySelector("#tabs");
let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");
    let tabContents = document.querySelector("#tab-contents");
    let parentClassList = e.target.parentElement.classList;

    parentClassList.add("bg-gradient-light");
    for (let i = 0; i < tabContents.children.length; i++) {
        
        var tabToggler =  tabTogglers[i].parentElement.classList

        tabToggler.remove("bg-red-300", "text-white", "bg-gradient-light");
        tabToggler.add("bg-gradient-light");
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
            continue;
        }
        tabContents.children[i].classList.add("hidden");
      
    }
    parentClassList.add("bg-red-300", "text-white");
    parentClassList.remove("bg-gradient-light");
  });
});


$(document).ready(function(){
  $('.slider-hidden').slick({
    dots: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '13%',
    prevArrow: '.buttons-slider .slick-prev',
    nextArrow: '.buttons-slider .slick-next',
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          centerPadding: '0',
        }
      }
    ]
  });
});