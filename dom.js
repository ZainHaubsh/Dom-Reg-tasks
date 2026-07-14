let hello = document.querySelector(".hello");
hello.onmouseover = function () {
    hello.style.backgroundColor = "yellow";
    hello.style.fontWeight = "bold";
}
hello.onmouseout = function () {
    hello.style.backgroundColor = "white";
    hello.style.fontWeight = "normal";
}


let country = document.getElementById("country");
let flag = document.getElementById("flag");

country.onchange = function () {
    if (this.value === "") {
        flag.style.display = "none";
        return;
    }

    flag.style.display = "block";

    switch (this.value) {
        case "Jordan":
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/250px-Flag_of_Jordan.svg.png";
            flag.alt = "Jordan Flag";
            break;
        case "UK":
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png";
            flag.alt = "UK Flag";
            break;
        case "Germany":
            flag.src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png";
            flag.alt = "Germany Flag";
            break;
        case "USA":
            flag.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png";
            flag.alt = "USA Flag";
            break;
        default:
            flag.style.display = "none";
    }
}

let pass = document.getElementById("pass");
let pass2 = document.getElementById("pass2");
let error = document.getElementById("error");
let error2 = document.getElementById("error2");

pass.oninput = function () {
    if (this.value.length < 6) {
        error.innerHTML = "Password too short";
    } else {
        error.innerHTML = "";
    }
}
pass2.oninput = function () {
    if (pass2.value !== pass.value) {
        error2.innerHTML = "Passwords don't match";
    } else {
        error2.innerHTML = "";
    }
}

function toggle(element, shouldShow) {
    let parentItem = element.closest('.box');
    let contentBox = parentItem.querySelector('.boxcontent');
    let showLink = parentItem.querySelector('.show-link');

    if (shouldShow) {
        contentBox.style.display = "block";
        showLink.style.display = "none";
    } else {
        contentBox.style.display = "none";
        showLink.style.display = "inline";
    }
}

let text = document.getElementById("text");
let family = document.getElementById("fontfamily");
let size = document.getElementById("fontsize");
let italic = document.getElementById("italic");
let bold = document.getElementById("bold");
let underline = document.getElementById("underline");

family.onchange = function () {
    text.style.fontFamily = this.value;
}

size.onchange = function () {
    text.style.fontSize = this.value + "px";
}

italic.onchange = function () {
    text.style.fontStyle = this.checked ? "italic" : "normal";
}

bold.onchange = function () {
    text.style.fontWeight = this.checked ? "bold" : "normal";
}

underline.onchange = function () {
    text.style.textDecoration = this.checked ? "underline" : "none";
}

let blueBox = document.querySelector(".bluebox");
let speedInput = document.getElementById("speedInput");

speedInput.oninput = function () {
    let timeValue = this.value + "s";
    blueBox.style.setProperty('--box-speed', timeValue);
}