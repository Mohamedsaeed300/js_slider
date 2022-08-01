// let sliderImages = Array.from (document.querySelectorAll(".slider-container img"))
// let slideCount = sliderImages.length
// let currentSlide = 1
// let slideNumberElement = document.getElementById ("slider-number")
// let indicator = document.querySelector(".indicator")
// let nextButton = document.getElementById ("next")
// let prevButton = document.getElementById ("prev")
// // Event function
// nextButton.onclick = nextSlide
// prevButton.onclick = prevSlide

// // create Ul element

// let paginationElement = document.createElement("ul")
// paginationElement.setAttribute("id","pagination-ul")

// // create li
// for(let i = 1 ; i <= slideCount ; i++) {
//     let paginationitem = document.createElement("li")
//     paginationitem.setAttribute("data-index", i)
//     paginationitem.appendChild(document.createTextNode(i))
//     paginationElement.appendChild(paginationitem)
// }
// indicator.append(paginationElement)
// let paginationCreatedUl = document.getElementById("pagination-ul")
// let paginationBollets = Array.from (document.querySelectorAll("#pagination-ul li"))

// // click on bullets

// for (let i = 0;i < paginationBollets.length;i++){
//     paginationBollets[i].onclick = function() {
//         currentSlide = parseInt(this.getAttribute("data-index"))
//         theChecker()
//     }
// }

// // All function
// theChecker()

// // Next Slide
// function nextSlide() {
//     if(nextButton.classList.contains("disabled")) {
//         return false
//     }else{
//         currentSlide++
//         theChecker()
//     }
// }

// // prev Slide

// function prevSlide() {
//     if(prevButton.classList.contains("disabled")) {
//         return false
//     }else{
//         currentSlide--
//         theChecker()
//     }
// }
// // cheker function
// function theChecker() {
//     // create slide number
//     slideNumberElement.textContent = `slide # ` + (currentSlide) + ' of ' + (slideCount)
//     // remove All Active
//     removeAllActive()
//     // set Active class in current slide
//     sliderImages[currentSlide -1].classList.add ("active")
//     // set Active class in pagination item
//     paginationCreatedUl.children[currentSlide-1].classList.add ("active")
//     // add disabled 
//     if (currentSlide == 1) {
//         prevButton.classList.add ("disabled")
//     }else {
//         prevButton.classList.remove ("disabled")
//     }
//     if (currentSlide == slideCount) {
//         nextButton.classList.add ("disabled")
//     }else {
//         nextButton.classList.remove ("disabled")
//     }
// }
// function removeAllActive() {
//     sliderImages.forEach(function(img) {
//         img.classList.remove("active")
//     })
//     paginationBollets.forEach(function(bullet) {
//         bullet.classList.remove("active")
//     })
// }

var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))
var slideCount = sliderImages.length
var currentSlide = 1
var sliderNumberElement = document.getElementById("slider-number")
var prevButton = document.getElementById("prev")
var nextButton = document.getElementById("next")
var indicator = document.getElementById("indicator")

prevButton.onclick = prevSlide
nextButton.onclick = nextSlide

var paginationElemeny = document.createElement("ul")
paginationElemeny.setAttribute("id", "pagination-ul") 
    for(let i = 1; i <= slideCount;i++) {
        let paginationItem = document.createElement("li")
        let insideImg = document.createElement("img")
        insideImg.style.width = "100%"
        insideImg.style.height = "100%"
        insideImg.style.borderRadius = "50%"
        insideImg.src = (`images/shuffle-0${i}.jpg`)
        paginationItem.setAttribute("data-index", i) 
        paginationItem.appendChild(insideImg)
        paginationElemeny.appendChild(paginationItem)
    }
    indicator.appendChild(paginationElemeny)

    let paginationBollets = Array.from(document.querySelectorAll("#pagination-ul li"))

    for(let i =0; i< paginationBollets.length;i++) {
        paginationBollets[i].onclick = function() {
            currentSlide = +this.getAttribute("data-index")
            theCheker()
        }
        
    }
function theCheker() {
    sliderNumberElement.textContent = "slide # " + currentSlide + " of " + (slideCount) 
    removeAll()
    sliderImages[currentSlide - 1].classList.add("active")
    paginationElemeny.children[currentSlide-1].classList.add("active")
    if(currentSlide == 1) {
        prevButton.classList.add("disabled")
    }else{
        prevButton.classList.remove("disabled")
    }
    if(currentSlide == slideCount) {
        nextButton.classList.add("disabled")
    }else{
        nextButton.classList.remove("disabled")
    }

}
theCheker()

function removeAll() {
    sliderImages.forEach(img => {
        img.classList.remove("active")
    });
    paginationBollets.forEach(bollets => {
        bollets.classList.remove("active")
    });
}

function prevSlide() {
    if(prevButton.classList.contains("disabled")) {
        return false
    }else {
        currentSlide --
        theCheker()
    }
}
function nextSlide() {
    if(nextButton.classList.contains("disabled")) {
        return false
    }else {
        currentSlide ++
        theCheker()
    }
}
