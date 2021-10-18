const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        //這邊做字串相加，因為hexColor是一個陣列。
        hexColor += hex[getRandomNumber()];
    }
    // color.textContent是會在畫面上顯示的顏色編碼
    color.textContent = hexColor;
    // 修改背景顏色(js修改html)
    document.body.style.background = hexColor;
})

// 這邊取得直接退位的一個隨機數
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}