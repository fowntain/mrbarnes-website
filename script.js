window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    // Add a delay before hiding the loading screen (e.g., 2 seconds)
    setTimeout(function() {
        // Hide the loading screen
        loadingScreen.style.display = 'none';

        // Show the content by removing 'hidden' and adding 'fade-in'
        content.classList.remove('hidden');
        content.classList.add('fade-in');
    }, 750); // 2000 milliseconds = 2 seconds delay
});
