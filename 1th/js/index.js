const colors = ["green", "red", "rgba(133,122,200)", "f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //取得隨機數範圍為0-3 colors[3]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    //math.floor 取得最大整數(無條件進位法，包含負數)
    return Math.floor(Math.random() * colors.length);
}