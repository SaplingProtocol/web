var isMenuOpen = false;

function toggleMenu() {
    if (isMenuOpen === true) {
        document.getElementById('nav-links-mobile').classList.remove("mobile-visible");
        document.getElementById('nav-links-mobile').classList.add("mobile-hidden");
        document.getElementById('menu-close-text').style.display = "none";
        document.getElementById('menu-open-text').style.display = "inline";
        isMenuOpen = false;
    } else {
        document.getElementById('nav-links-mobile').classList.remove("mobile-hidden");
        document.getElementById('nav-links-mobile').classList.add("mobile-visible");
        document.getElementById('menu-open-text').style.display = "none";
        document.getElementById('menu-close-text').style.display = "inline";
        isMenuOpen = true;
    }
}

function onDomReady () {
    document.getElementById('menu-button').addEventListener('click', function(e) {
        toggleMenu();
    });
}
  
if (document.addEventListener) {
    document.addEventListener( "DOMContentLoaded", function() {
        document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
        onDomReady();
    }, false );
}

