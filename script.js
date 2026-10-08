document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    const updateButtonText = (isDark) => {
        if (themeToggleButton) {
            themeToggleButton.textContent = isDark ? '☀️ Light' : '🌙 Dark';
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateButtonText(true);
    } else {
        updateButtonText(false);
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateButtonText(isDark);
        });
    }
});