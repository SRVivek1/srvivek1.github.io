// Theme Switching
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.className = ''; // Reset classes
        document.body.classList.add(btn.dataset.theme);
    });
});

// Expandable Topics
document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const subtopics = btn.nextElementSibling;
        subtopics.style.display = subtopics.style.display === 'block' ? 'none' : 'block';
    });
});

// Box Animation on Load
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.content-box');
    boxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        setTimeout(() => {
            box.style.transition = 'all 0.5s ease';
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 200);
    });
});