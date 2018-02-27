window.onload = function() {
    click();
}

function click() {
    document.getElementById("opa").onclick = function() {
        document.getElementById("article-gao1").style.opacity = 1;
        document.getElementById("article-gao2").style.opacity = 1;
        document.getElementById("opa").style.opacity = 0;
    }
}