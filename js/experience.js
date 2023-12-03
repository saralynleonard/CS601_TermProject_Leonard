const url = "https://saralynleonard.github.io/CS601_TermProject_Leonard/experience.json";

async function fetchExperience() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const experienceOutput = document.getElementById('experienceOutput');
        experienceOutput.innerHTML = buildExperienceList(data);
    } catch(err) {
        console.log(err)
    }
}

fetchExperience();

function buildExperienceList(data) {
    const experienceList = data.map(item => {
        const experience = item.experience;
        return `<div id="experienceOutput">
        <ul id="experience">    
            <li><strong>${experience.position} | ${experience.organization}</strong></li>
            <li><i class="material-icons">calendar_month</i> ${experience.date_range}</li>
            <li><i class="material-icons">room</i> ${experience.location}</li>
            <li id="experience_task">${experience.task1}</li>
            <li id="experience_task">${experience.task2}</li>
            <li id="experience_task">${experience.task3}</li>
            <li id="experience_task">${experience.task4}</li>
        </ul>
        </div>`
    })
    return `${experienceList.join('')}`;
}