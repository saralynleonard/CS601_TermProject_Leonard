const app = Vue.createApp({
    data(){
        return {
            gallery: [
                {image: './images/rainbow_falls.PNG', text: 'Rainbow Falls in Hilo, HI - August 2018'}, 
                {image: './images/hawaii_wall.png', text: 'Ancient wall in Southpoint, HI - August 2018'}, 
                {image: './images/mauna_kea.png', text: 'Sunset from the summit of Mauna Kea - August 2018'}, 
                {image: './images/highland_cows.PNG', text: 'Highland cows in Nairn, Scotland - December 2017'},
                {image: './images/kozushima.png', text: 'Ocean view from Kozushima Island, Japan - July 2019'},
                {image: './images/sunset.png', text: 'Sunset at my childhood home'}
            ],

            galleryIndex: 0
        };
    },
    methods: {
        nextImage() {
            this.galleryIndex = (this.galleryIndex + 1)
        },
        previousImage() {
            this.galleryIndex = (this.galleryIndex -1)
        }
    },
    computed: {
        currentGalleryImage() {
            return this.gallery[this.galleryIndex]
        }
    }
})

app.mount('#app')