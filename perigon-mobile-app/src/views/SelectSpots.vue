<template>
<div class="page-header py-2 px-4">
    <span class="d-flex justify-content-center">
        <font-awesome-icon @click="goToBookAClass" class="d-flex align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="align-center mx-5 mb-3">PERIGON 45</h3>
    </span>
</div>
    <div class="page-body">
        <div class="row legends pt-2 px-5 mx-5 mb-5">
            <div class="col d-flex justify-content-center">
                <span class="dot small align-self-center"></span>
                <label class="align-self-center">Available</label>
            </div>
            <div class="col d-flex justify-content-center">
                <span class="dot small selected align-self-center"></span>
                <label class="align-self-center">Booked</label>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular selected d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular selected d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular selected d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular selected d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular selected d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center invis"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2 invis">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2 invis">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2 invis">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2 invis">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2 invis">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center invis"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2 invis">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mb-2 invis">
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot d-flex align-self-center"></span>
                    </div>
                    <div class="col-2 p-0">
                        <span class="dot regular d-flex align-self-center"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-footer align-bottom py-2 px-5">
        <div class="row">
            <div class="col d-flex justify-content-center flex-column">
                <label class="d-flex align-self-left">Passes</label>
                <p class="d-flex align-self-left"><b>{{passCtr}} LEFT</b></p>
            </div>
            <div class="col d-grid d-flex justify-content-center flex-column">
                <button @click="goToBookSummary" class="btn btn-dark btn-sm">CONFIRM SPOT(S)</button>
            </div>
        </div>
        <div class="row p-1">
            <div class="col d-flex justify-content-center flex-column">
                <label class="d-flex align-self-left">Session</label>
                <p class="d-flex align-self-left"><b>{{sesh}} MINS</b></p>
            </div>
            <div class="col d-flex justify-content-center flex-column">
                <label class="d-flex align-self-left">Date</label>
                <p class="d-flex align-self-left"><b>{{date}}</b></p>
            </div>
            <div class="col d-flex justify-content-center flex-column">
                <label class="d-flex align-self-left">Time</label>
                <p class="d-flex align-self-left"><b>{{time}}</b></p>
            </div>
        </div>
    </div>
</template>

<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default {
    name: 'SelectSpots',
    components:{
        FontAwesomeIcon
    },
    data(){
        return{
            passCtr: 5,
            sesh: 45,
            date: 'JUNE 6',
            time: '5:00 PM'
        }
    },
    methods: {
        goToBookAClass(){
            this.$router.push('BookAClass')
        },
        goToBookSummary(){
            this.$router.push('BookSummary')
        },
        select(passedClass){
            if(this.passCtr > 0){
                console.log(passedClass)
                this.passCtr--
            }
        }
    }
}
</script>

<style scoped>
.dot {
    border: 1px solid white;
    background-color: rgba(187, 187, 187, 0);
    border-radius: 50%;
    display: inline-block;
}
.invis{
   visibility: hidden; 
}
.regular{
    height: 20.69px;
    width: 20.69px;
}
.large{
    height: 30.69px;
    width: 30.69px;
}
.small{
    height: 10.69px;
    width: 10.69px;
}
.selected{
    background-color: rgb(0, 0, 0);
}
label{
    font-size: xx-small;
    color: rgb(157, 157, 157);
}
p{
    font-size: x-small;
}
button{
    font-size: small;
}
.page-body{
    background-color: rgb(112, 112, 112) ;
}
.page-body label{
    color: white;
}
</style>