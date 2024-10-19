document.addEventListener("DOMContentLoaded", function() {
    const upArrow = document.getElementById("upArrow");
    
    // Add a scroll event listener
    window.addEventListener("scroll", function() {
    if (window.scrollY > 100) { 
        upArrow.style.display = "block"; 
    } else {
        upArrow.style.display = "none"; 
    }
    });
    
    upArrow.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    });

function Resume_download(){
    alert(`Comimg soon!`)
}