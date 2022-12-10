
var course = "";
var backgroundColor = "";
var img = "";
function changePage(element) {
    course = element.getElementsByTagName("h2")[0].innerHTML;
    backgroundColor = element.style.backgroundColor;
    img = element.getElementsByTagName("img")[0].src;
    window.location.href = 'course.html';
}

function whenLoad() {
    console.log(course);
    document.getElementById("course-name").innerHTML = "Därıs" + " " + course;

}



    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });
    const nextSlide = document.querySelector(".btn-next");

    let curSlide = 0;
    let maxSlide = slides.length - 2;

    nextSlide.addEventListener("click", function () {
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });

    const prevSlide = document.querySelector(".btn-prev");

    prevSlide.addEventListener("click", function () {
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });


