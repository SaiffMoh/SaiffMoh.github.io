document.addEventListener('DOMContentLoaded', () => {
    // Fetch GitHub repositories
    fetch('https://api.github.com/users/SaiffMoh/repos')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(repo => {
                const projectCard = `
                    <div class="col-md-4">
                        <div class="card project-card">
                            <div class="card-body">
                                <h5 class="card-title">${repo.name}</h5>
                                <p class="card-text">${repo.description || 'No description available'}</p>
                                <a href="${repo.html_url}" target="_blank" class="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                `;
                projectList.innerHTML += projectCard;
            });
        })
        .catch(error => console.error('Error fetching GitHub repos:', error));

    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});