const url = 'https://saralynleonard.github.io/CS601_TermProject_Leonard/js/education.json'

async function fetchEducation() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const educationOutput = document.getElementById('educationOutput');
        educationOutput.innerHTML = buildEducationList(data);
    } catch(err) {
        console.log(err)
    }
}

fetchEducation();

function buildEducationList(data) {
    const educationList = data.map(item => {
        const degree = item.degree;
        return `<div id="educationOutput">
        <ul id="education">    
            <li><strong>${degree.type} in ${degree.program} | ${degree.school}</strong></li>
            <li><i class="material-icons">calendar_month</i> ${degree.attended}</li>
            <li><i class="material-icons">room</i> ${degree.location}</li>
        </ul>
        </div>`
    })
    return `${educationList.join('')}`;
}