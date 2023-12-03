const nav = document.getElementById('nav-main');
nav.innerHTML = createNavigation();

const footer = document.getElementById('footer-main');
footer.innerHTML = createFooter(); 

function createNavigation() {
    return `<ul class="nav-list">
    <li class="nav-item">
        <a href="./index.html">Home</a> 
    </li>
    <li class="nav-item">
        <a href="./experience.html">Experience</a>
    </li>
    <li class="nav-item">
        <a href="./education.html">Education</a>
    </li>
    <li>
        <a href="./projects.html">Projects</a>
    </li>
    <li class="nav-item">
        <a href="./gallery.html">Gallery</a>
    </li>
    <li class="nav-item">
        <a href="./contact.html">Contact</a>
    </li>
</ul>`
}

function createFooter() {
    return `<p id="footer-icons">
    <a href="https://github.com/saralynleonard?tab=repositories"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/saralyn-leonard-437689a4/"><i class="fa-brands fa-linkedin"></i></a>
</p>
<p>
    &copy; 2023 Saralyn Leonard
</p>`
}