const app = Vue.createApp({
    data(){
        return {
            gallery: [
                {image: './images/rainbow_falls.PNG', text: 'Rainbow falls in Hilo, HI - August 2018'}, 
                {image: './images/hawaii_wall.png', text: 'Ancient wall in Southpoint, HI - August 2018'}, 
                {image: './images/mauna_kea.png', text: 'Summit of Mauna Kea - August 2018'}, 
                {image: './images/highland_cows.PNG', text: 'Highland cows in Nairn, Scotland - December 2017'}
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