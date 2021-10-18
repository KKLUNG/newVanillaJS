//set initial count
let count = 0;
let nu1 = 0;
let nu2 = 0;
let nu3 = 0;
let nu4 = 0;
let nu5 = 0;


const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const num1 = document.querySelector(".in");
const num2 = document.querySelector(".de");
const num3 = document.querySelector(".re");
const num4 = document.querySelector(".mult");
const num5 = document.querySelector(".divis");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        //e.currentTarget.classList 回應按鈕事件
        const style = e.currentTarget.classList;
        if (style.contains('decrease')) {
            count--;
            nu2++;
        } else if (style.contains('increase')) {
            count++;
            nu1++;
        } else if (style.contains('take')) {
            count = count * 2;
            nu4++;
        } else if (style.contains('division')) {
            count = count / 2;
            nu5++;
        } else if (style.contains('reset')) {
            count = 0;
            nu3++;
        } else if (style.contains('restart')) {
            nu1 = 0;
            nu2 = 0;
            nu3 = 0;
            nu4 = 0;
            nu5 = 0;
        }

        // 改變value tag的值
        value.textContent = count;
        num1.textContent = nu1;
        num2.textContent = nu2;
        num3.textContent = nu3;
        num4.textContent = nu4;
        num5.textContent = nu5;
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count == 0) {
            value.style.color = "black";
        }
    })
});