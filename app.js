Vue.component('card', {
    props: ['title','content'],

    data() {
        
        return{

            claps : 0
        
        }
    },

    template: `
                <div class="card text-mute">
                            <div class="card-body">
                                <h3 class="card-title">
                                    {{ title }}
                                </h3>
                                <div class="card-text">
                                    {{ content }}    
                                </div>
                                <div class="text-center text-muted display-3">{{ claps }}</div>
                                <button @click="clapForArticle" class="btn btn-info btn-sm">clap for me</button>
                                <button @click="deleteArticle" class="btn btn-danger btn-sm">Delete me</button>
                            </div>
                </div>
    `,

    methods: {

        deleteArticle(){
            this.$emit('delete-article',this.title);
        },
        clapForArticle(){
            this.claps++;
        }
    }

});

new Vue ({
  
    el:'#app',

    data:{
        articles:[
            {
            title:'title1',
            content:'content1'
            },
            {
            title:'title2',
            content:'content2'
            },
            {
            title:'title3',
            content:'content3'
            }
    
    ]},

    methods: {

        removeArticle(event){
            console.log("article in parent deleted")
            console.log(event); //this returns the title
            this.articles = this.articles.filter(article => article.title !==event )
        }
    }
  
})