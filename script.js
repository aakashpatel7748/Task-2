const loader = document.querySelector(".loader")

setTimeout(() => {
    loader.style.display = "none"
}, 3000)



// =================

const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");

body.addEventListener("mousemove", function (e) {

    cursor.style.transform = `translate(${e.x + 10}px, ${e.y + 10}px)`;
});

// ======================

let arr = [
    "hero1.avif", 
    "hero2.avif",
     "hero3.avif"
]

let h1 = ["Let's Make Your best trip with us", "Natural Wonder of the world", "Explore beauty of the world"];
let button1 = ["Explore Tours"];
let button2 = ["Our services"]

let index = 0;

function chengeBackgroung() {
    const text = document.querySelector("#text")
    const pragraph = document.querySelector("#p")
    const btn1 = document.querySelector("#btn1")
    const btn2 = document.querySelector("#btn2")
    const heroSection = document.querySelector(".hero-section")

    heroSection.style.backgroundImage = `url("${arr[index]}")`;
    pragraph.textContent = "Get unforgetable pleasure with us"
    btn1.innerText = button1;
    btn2.innerText = button2;
    text.innerText = h1[index];
    index = (index + 1) % arr.length;
}

setInterval(()=>{
    chengeBackgroung()
   
}, 4000)













