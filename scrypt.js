let a = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let m = 0;
function addarray(index) {
    if (a[index] === -1) {
        if (m % 2 == 0) {
            a[index] = 1;
            document.getElementById(`area${index + 1}`).innerHTML = "&#x2716;";
            document.getElementById(`area${index + 1}`).style.fontSize = "65px";
            document.getElementById(`area${index + 1}`).style.display = "flex";
            document.getElementById(`area${index + 1}`).style.alignItems = "center";
            document.getElementById(`area${index + 1}`).style.justifyContent = "center";
        }
        else {
            a[index] = 0;
            document.getElementById(`area${index + 1}`).innerHTML = "&#9675;";
            document.getElementById(`area${index + 1}`).style.fontSize = "80px";
            document.getElementById(`area${index + 1}`).style.display = "flex";
            document.getElementById(`area${index + 1}`).style.alignItems = "center";
            document.getElementById(`area${index + 1}`).style.justifyContent = "center";
        }
        m++;
    }
    console.log(a);
}


function r1() {
    if (a[0] === 1 && a[1] === 1 && a[2] === 1) {
        crosswin();
    }
    else if (a[0] === 0 && a[1] === 0 && a[2] === 0) {
        circlewin();
    }
}
function r2() {
    if (a[3] === 1 && a[4] === 1 && a[5] === 1) {
        crosswin();
    }
    else if (a[3] === 0 && a[4] === 0 && a[5] === 0) {
        circlewin();
    }
}
function r3() {
    if (a[6] === 1 && a[7] === 1 && a[8] === 1) {
        crosswin();
    }
    else if (a[6] === 0 && a[7] === 0 && a[8] === 0) {
        circlewin();
    }
}
function c1() {
    if (a[0] === 1 && a[3] === 1 && a[6] === 1) {
        crosswin();
    }
    else if (a[0] === 0 && a[3] === 0 && a[6] === 0) {
        circlewin();
    }
}
function c2() {
    if (a[1] === 1 && a[4] === 1 && a[7] === 1) {
        crosswin();
    }
    else if (a[1] === 0 && a[4] === 0 && a[7] === 0) {
        circlewin();
    }
}
function c3() {
    if (a[2] === 1 && a[5] === 1 && a[8] === 1) {
        crosswin();
    }
    else if (a[2] === 0 && a[5] === 0 && a[8] === 0) {
        circlewin();
    }
}
function v1() {
    if (a[0] === 1 && a[4] === 1 && a[8] === 1) {
        crosswin();
    }
    else if (a[0] === 0 && a[4] === 0 && a[8] === 0) {
        circlewin();
    }
}
function v2() {
    if (a[2] === 1 && a[4] === 1 && a[6] === 1) {
        crosswin();
    }
    else if (a[2] === 0 && a[4] === 0 && a[6] === 0) {
        circlewin();
    }
}
function checkwin(index) {
    if (index === 0) {
        r1();
        c1();
        v1();
    }
    else if (index === 1) {
        r1();
        c2();
    }
    else if (index === 2) {
        r1();
        c3();
        v2();
    }
    else if (index === 3) {
        r2();
        c1();
    }
    else if (index === 4) {
        r2();
        c2();
        v1();
        v2();
    }
    else if (index === 5) {
        r2();
        c3();
    }
    else if (index === 6) {
        r3();
        c1();
        v2();
    }
    else if (index === 7) {
        r3();
        c2();
    }
    else if (index === 8) {
        r3();
        c3();
        v1();
    }
    nowin();
}

function crosswin() {
    let html = `
    <div class="container">CROSS WIN</div>`
    document.querySelector('.js-win').innerHTML = html;
    setTimeout(() => {
        location.reload();
    }, 1500);
}
function circlewin() {
    let html = `
    <div class="container">CIRCLE WIN</div>`
    document.querySelector('.js-win').innerHTML = html;
    setTimeout(() => {
        location.reload();
    }, 1500);
}

function nowin() {
    let p = 0;
    for (let i = 0; i < 9; i++) {
        if (a[i] !== -1) {
            p++;
        }
    }
    if (p === 9) {
        let html = `
        <div class="container">NO-ONE WIN</div>`
        document.querySelector('.js-win').innerHTML = html;
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}