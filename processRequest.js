function openCalcPage() {
    window.open("Mulch-Area-Calculator.html", "_self");
}

function openHomePage() {
    window.open("Mulch-Gravel-Site.html","_self");
}

function openAboutUs() {
    window.open("About-Us.html", "_self");
}

function calcArea() {

    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var depth = document.getElementById("depth").value;
    depth = depth / 12;

    var area = length * width * depth;

    area = area / 3;

    var result = area + " yd^3"

    document.getElementById("result").textContent = result;
}

document.getElementById("mulchCalc").addEventListener("click", openCalcPage);
document.getElementById("homePage").addEventListener("click", openHomePage);
document.getElementById("aboutUs").addEventListener("click", openAboutUs);