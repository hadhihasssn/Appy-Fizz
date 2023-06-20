// function show(){
//     document.getElementById("X-icon").style.display="block";
//     document.getElementById("three-bar").style.display="none";
//     document.getElementById("drop-top-2").style.display="block";
//     document.getElementById("link-ul").style.display="none";
// }

function show() {
    let menu = document.getElementById("drop-top-2");
    let xIcon = document.getElementById("X-icon");
    let bar = document.getElementById("three-bar");

    menu.classList.add('drop-top-3');
    xIcon.classList.add('X-icon');
    bar.classList.remove('three-bar');
}

function hiddenNav() {
    let menu = document.getElementById("drop-top-2");
    let xIcon = document.getElementById("X-icon");
    let bar = document.getElementById("three-bar");

    console.log('helloi');
    menu.classList.remove('drop-top-3')
    xIcon.classList.remove('X-icon');
    bar.classList.add('three-bar');
}


window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    var image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}