function nextPage() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function showLetter() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}

function cakePage() {
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");
}

function celebrate() {
    document.getElementById("page4").classList.add("hidden");
    document.getElementById("page5").classList.remove("hidden");

    confetti();
}

function confetti() {
    for (let i = 0; i < 120; i++) {

        let item = document.createElement("div");

        item.innerHTML = ["🎉","🎈","❤️","✨","🎊"][Math.floor(Math.random()*5)];

        item.style.position = "fixed";
        item.style.left = Math.random()*100 + "vw";
        item.style.top = "-20px";
        item.style.fontSize = (20 + Math.random()*20) + "px";
        item.style.animation = "fall 4s linear forwards";

        document.body.appendChild(item);

        setTimeout(()=>{
            item.remove();
        },4000);
    }
}

let style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}
`;

document.head.appendChild(style);
