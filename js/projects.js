const app = Vue.createApp({
    data(){
        return {
            projects: [
                {project_title: 'Simple Form Validation', description: 'Built using HTML, CSS, and JavaScript.', url: 'file:///C:/Users/Saralyn/Desktop/Boston%20University/MET_CS_601/Week%204/CS601_HW4_Leonard/index.html'},
                {project_title: 'JSON and Fetch', description: 'Built using HTML, CSS, and JavaScript.', url: 'https://saralynleonard.github.io/CS601_HW5_Leonard/'},
                {project_title: 'Personal Website', description: 'An old personal website built using HTML and CSS.', url: 'https://saralynleonard.com/'}
            ],
            currentIndex: 0
        }
    },
    methods: {
        nextProject() {
            this.currentIndex = (this.currentIndex +1)
        },
        previousProject() {
            this.currentIndex = (this.currentIndex - 1 + this.projects.length)
        }
    },
    computed: {
        currentProject() {
            return this.projects[this.currentIndex]
        }
    }
})

app.mount('#app')