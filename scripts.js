function navigateToPage(pageNumber) {
    // Hide all pages with animation
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.opacity = 0;
        setTimeout(() => {
            page.style.display = 'none';
            page.classList.remove('active');
        }, 500);
    });

    // Show the selected page with animation
    const selectedPage = document.getElementById(`page${pageNumber}`);
    setTimeout(() => {
        selectedPage.style.display = 'block';
        setTimeout(() => {
            selectedPage.style.opacity = 1;
            selectedPage.classList.add('active');
        }, 50); // A small delay for the display to take effect
    }, 500);
}

//dont leave me...
window.addEventListener("beforeunload", function (e) {
// Cancel the event (so the browser won't exit/reload immediately)
e.preventDefault();
// Prompt a confirmation dialog
e.returnValue = '';
});


//cursor

window.addEventListener("load", (event) => {
    new cursoreffects.ghostCursor();
  });