const themeToggle = document.getElementById('checkbox');
const modeIndicator = document.querySelector('.mode-indicator');

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
    modeIndicator.textContent = 'Dark Mode';
} else {
    modeIndicator.textContent = 'Light Mode';
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        modeIndicator.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        modeIndicator.textContent = 'Light Mode';
        localStorage.setItem('theme', 'light');
    }
});

// Page View Counter
document.addEventListener('DOMContentLoaded', function() {
    const viewCountElement = document.getElementById('page-view-count');
    let pageViews = localStorage.getItem('pageViews');

    if (pageViews) {
        pageViews = parseInt(pageViews) + 1;
    } else {
        pageViews = 1;
    }

    localStorage.setItem('pageViews', pageViews);
    viewCountElement.textContent = `Page Views: ${pageViews}`;
});
