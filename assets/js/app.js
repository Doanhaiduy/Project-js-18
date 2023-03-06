let body = document.querySelector("body");
let container = document.querySelector(".container");
let pre = document.querySelector(".btn.pre");
let next = document.querySelector(".btn.next");

let count = 1;
pre.addEventListener("click", () => {
    count--;
    if (count < 1) {
        count = 5;
    }

    container.style.backgroundImage = `url(./assets/img/background-${count}.png)`;
    body.style.backgroundImage = `url(./assets/img/background-${count}.png)`;
});

next.addEventListener("click", () => {
    count++;
    if (count > 5) {
        count = 1;
    }

    container.style.backgroundImage = `url(./assets/img/background-${count}.png)`;
    body.style.backgroundImage = `url(./assets/img/background-${count}.png)`;
});
