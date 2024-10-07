// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills
const skills = [
    { name: 'C/C++', level: 90 },
    { name: 'Python', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Machine Learning', level: 85 }
];

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');
    skillItem.innerHTML = `
        <h3>${skill.name}</h3>
        <div class="skill-bar">
            <div class="skill-level" style="width: ${skill.level}%"></div>
        </div>
    `;
    skillsContainer.appendChild(skillItem);
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form submission (you'll need to implement the backend for this)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});