function openTab(evt, tabName) {
    // Hide all tab content
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active"));

    // Remove "active" class from all buttons
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Show the current tab and add active class to the button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");

    // Scroll to top when switching
    window.scrollTo(0, 0);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.project-card');
hiddenElements.forEach((el) => observer.observe(el));


