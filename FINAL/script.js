let toggleNavStatus = false;
let getSidebar = document.querySelector(".navSidebar");
let getSidebarUl = document.querySelector(".navSidebar ul");
let getSidebarTitle = document.querySelector(".navSidebar span");
let getSidebarLinks = document.querySelectorAll(".navSidebar a");

function close() { 
        getSidebar.style.width = "60px";
        getSidebarTitle.style.opacity = "0";
        
        let arrayLength = getSidebarLinks.length
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
        }

let toggleNav = function(){
    if (toggleNavStatus === false ) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
        }
        else if (toggleNavStatus === true ) {   
        close();
}
}

function red() { 
    document.body.style.background = "red"; 
    document.getElementById("redNav").style.backgroundColor="#ffd3cc";
    
    document.getElementById("greenNav").style.backgroundColor="green";
    document.getElementById("blueNav").style.backgroundColor="blue";
    document.getElementById("yellowNav").style.backgroundColor="yellow";
    document.getElementById("orangeNav").style.backgroundColor="#ff9500";
    document.getElementById("color").innerHTML = "RED";
    close();
    
}
function green() { 
    document.body.style.background = "green"; 
    document.getElementById("redNav").style.backgroundColor="red";
    document.getElementById("greenNav").style.backgroundColor="#caffc9";
    document.getElementById("blueNav").style.backgroundColor="blue";
    document.getElementById("yellowNav").style.backgroundColor="yellow";
    document.getElementById("orangeNav").style.backgroundColor="#ff9500";
    document.getElementById("color").innerHTML = "GREEN";
    close();
}
function blue() { 
    document.body.style.background = "blue"; 
    document.getElementById("redNav").style.backgroundColor="red";
    document.getElementById("greenNav").style.backgroundColor="green";
    document.getElementById("blueNav").style.backgroundColor="#cccfff";
    document.getElementById("yellowNav").style.backgroundColor="yellow";
    document.getElementById("orangeNav").style.backgroundColor="#ff9500";
    document.getElementById("color").innerHTML = "BLUE";
    close();
}
function yellow() { 
    document.body.style.background = "yellow"; 
    document.getElementById("redNav").style.backgroundColor="red";
    document.getElementById("greenNav").style.backgroundColor="green";
    document.getElementById("blueNav").style.backgroundColor="blue";
    document.getElementById("yellowNav").style.backgroundColor="#fff7d9";
    document.getElementById("orangeNav").style.backgroundColor="#ff9500";
    document.getElementById("color").innerHTML = "YELLOW";
    close();
}
function orange() { 
    document.body.style.background = "#ff9500"; 
    document.getElementById("redNav").style.backgroundColor="red";
    document.getElementById("greenNav").style.backgroundColor="green";
    document.getElementById("blueNav").style.backgroundColor="blue";
    document.getElementById("yellowNav").style.backgroundColor="yellow";
    document.getElementById("orangeNav").style.backgroundColor="#FFDBA3";
    document.getElementById("color").innerHTML = "ORANGE";
    close();
}

document.getElementById("toggle").onmouseover = function() {mouseOver()};
document.getElementById("toggle").onmouseout = function() {mouseOut()};

function mouseOver() {
    toggleNav();
}

function mouseOut() {
    close(); 
}

