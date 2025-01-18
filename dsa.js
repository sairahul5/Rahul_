// Example JavaScript for additional effects
document.addEventListener("DOMContentLoaded", function() {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', () => {
            tag.style.transform = 'scale(1.1)'; // Scale up on hover
        });
        tag.addEventListener('mouseout', () => {
            tag.style.transform = 'scale(1)'; // Scale back down
        });
    });
}); 