const url = "http://127.0.0.1:5500/js/projects.json";

async function fetchProjects() {
    try {
        const response = await fetch(url);
        const data = await response.json();const projectsOutput = document.getElementById('projectsOutput');
        projectsOutput.innerHTML = buildProjectList(data);
    } catch(err) {
        console.log(err)
    }
}

fetchProjects();

function buildProjectList(data) {
    const projectList = data.map(item => {
        const project = item.project;

        return `<div id="projectOutput">
        <ul id="project">
            <a href="${project.url}"><li><strong>${project.title}</strong></li>
            <li>${project.description}</li>
        </ul>
        </a>
        </div>
        `
    })
    return `${projectList.join('')}`
}