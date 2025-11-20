let totalcard = 4;
let conatiner = document.getElementById("data-cont");
let tags = document.getElementById("stags");
let prev = document.getElementById("previous");
let nxt = document.getElementById("next");
let pagecount = document.getElementById("count");
let ott = document.querySelectorAll(".num");

let cards = Array.from(conatiner.getElementsByClassName('card'));

const totalpages = Math.ceil(cards.length/totalcard);
let currentpage = 1;

function displaycard(page){
    const startindex = (page-1)*totalcard;
    const endindex = startindex+totalcard;
    cards.forEach((card, index) =>{
        if(index >=startindex && index<endindex){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    })
}

function updatepagination(){
    pagecount.textContent = `Page ${currentpage} of ${totalpages}`;
    prev.disabled = currentpage === 1;
    nxt.disabled = currentpage === totalpages;
    ott.forEach((link) =>{
        const sty = parseInt(link.getAttribute('data-page'));
        link.classList.toggle('active', sty === currentpage);
    })

}

prev.addEventListener("click", () =>{
    if(currentpage > 1){
        currentpage--;
        displaycard(currentpage);
        updatepagination();
    }
})

nxt.addEventListener("click" , () =>{
    if(currentpage<totalpages){
        currentpage++;
        displaycard(currentpage);
        updatepagination();
    }
})

ott.forEach((link) =>{
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        const gud = parseInt(link.getAttribute('data-page'));
        if(gud != currentpage){
            currentpage = gud;
            displaycard(currentpage);
            updatepagination();
        }
    })
})

displaycard(currentpage);
updatepagination();
