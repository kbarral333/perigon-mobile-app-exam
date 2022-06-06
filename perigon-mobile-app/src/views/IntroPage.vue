<template>
    <span class="dot huge mt-5 mb-4"></span>
    <h4 class="mt-3">{{title}}</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ac neque, enim cursus est facilisis.</p>
    <span v-for="p in progress" v-bind:key="p">
        <span class="dot mx-1" :class="p"></span>
    </span>
    <div class="button-area">
        <button class="btn btn-dark" @click="nextPage">NEXT</button>
        <br>
        <button class="btn" @click="goToLogin">SKIP</button>
    </div>
</template>

<script>
export default {
    name: 'IntroPage',
    data (){
        return {
            title: '',
            progress: ['','',''],
            pages: ['Buy Pass', 'Book Ride', 'Pay at your convenience']
        }
    },
    mounted() {
        this.title = this.pages[0]
        this.progress[0] = 'selected'
    },  
    methods: {
        nextPage() {
            var curIndx = 0
            curIndx = this.pages.indexOf(this.title)
            if(curIndx < 2){
                this.progress[curIndx] = ''
                curIndx ++
                this.title = this.pages[curIndx]
                this.progress[curIndx] = 'selected'
            }else{
                this.goToLogin()
            }
        },
        goToLogin() {
            this.$router.push('PerigonLogin')
        }
    }
}
</script>

<style scoped>
    .dot {
        height: 6.9px;
        width: 6.9px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    .huge{
        height: 169.9px;
        width: 169.9px;
    }
    .selected {
        background-color: rgb(0, 0, 0);
    }
</style>