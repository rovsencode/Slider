const imagesOnGalery = document.querySelectorAll(".gallery a");
const newPopup = document.querySelector(".popup");
const sliderImg=document.querySelector(".slider img")
const closeBtn = document.querySelector(".close-icon")
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let nextElement;
imagesOnGalery.forEach((img)=>{
      img.addEventListener("click", function(e){
          e.preventDefault();   
          this.classList.add("showSlider");
        //   nextElement = this.nextElementSibling.getAttribute("")
          let imgSource = this.getAttribute("href")
          sliderImg.setAttribute("src",imgSource)
          newPopup.style.display = "flex"
            
      })
});
nextBtn.addEventListener("click",next )
function next() {    let change;
    let sliderShow = document.querySelector(".showSlider");
    if (sliderShow.nextElementSibling) {
        sliderShow.nextElementSibling.classList.add("showSlider");
        change = sliderShow.nextElementSibling.getAttribute("href");
        
    }
    else {
        sliderShow.parentElement.children[0].classList.add("showSlider");
        
    }
 sliderShow.classList.remove("showSlider");

 sliderImg.setAttribute("src",change)
    
}
prevBtn.addEventListener("click",prev )
function prev() {
      let change;
    let sliderShow = document.querySelector(".showSlider");
    if (sliderShow.previousElementSibling) {
        sliderShow.previousElementSibling.classList.add("showSlider");
        change = sliderShow.previousElementSibling.getAttribute("href");
        
    }
    else {
        sliderShow.parentElement.children[2].classList.add("showSlider");
        
    }
 sliderShow.classList.remove("showSlider");

 sliderImg.setAttribute("src",change)
    
}
function close(){
    newPopup.style.display="none"
}

document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("popup")){
        close()
        console.log(e.target);
    }
})

closeBtn.addEventListener("click", function(){
    close()
})
 
document.addEventListener("keydown",function(e){
    if (e.key==="Escape") {
        close()
    }
})
setInterval(next, 5000);
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        next();
    }
    else if (e.key === "ArrowLeft") {
        prev();
    }
})