document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("a"); 
    let currentURL = window.location.href; 

    links.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add("active"); 
        }
    });
});