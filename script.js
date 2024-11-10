// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Skill Bars
const skills = [
    { name: 'C/C++', level: 90 },
    { name: 'Python', level: 95 },
    { name: 'JavaScript', level: 85 }
];

const skillsContainer = document.querySelector('.skills ul');
skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.innerHTML = `<strong>${skill.name}</strong>: ${skill.level}%`;
    skillsContainer.appendChild(skillItem);
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});
