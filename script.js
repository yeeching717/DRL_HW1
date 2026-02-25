function updateTime() {
    const now = new Date();
    
    // Formatting time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // Formatting date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// Update every second
setInterval(updateTime, 1000);

// Initialize immediately
updateTime();

// Add a subtle parallax effect based on mouse movement
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.glass-container');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
