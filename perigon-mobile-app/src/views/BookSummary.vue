<template>
    <div class="page-header">
    <span class="d-flex justify-content-center">
        <font-awesome-icon class="align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="mx-5 mb-3">Book Summary</h3>
    </span>
</div>
    <div class="page-body p-5">
        <div>
            <p>You're about to book {{seats}} seat(s) for this class. Kindly enter the full name of your guest/s below.</p>
            <p class="m-0 align-center">Session {{session}}</p>
            <p class="m-0 align-center">Date {{date}}</p>
            <p class="m-0 align-center">Time {{time}}</p>
        </div>
        <h3>GUEST NAME</h3>
        <div v-for="g,index in guests" :key="g">
            <label>Guest {{index + 1}} name</label>
            <p>{{g}}</p>
        </div>
    </div>
    <div class="page-footer p-3 align-bottom">
        <div class="d-grid">
            <button class="btn btn-block btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">BOOK NOW</button>
        </div>
    </div>
    <div class="modal fade mt-5 p-5" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <h4><b>PURCHASE SUCCESSFUL</b></h4>
                <p>You have successfully booked <b>{{seats}} seats</b> for this class.</p>
            </div>
            <div class="d-grid px-3 mb-3">
                <button @click="goToPopulatedAppHomePage" class="btn btn-dark btn-lg btn-block modal-action" data-bs-dismiss="modal">BACK TO ACCOUNT</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default {
    name: 'PersonalInfo',
    components: {
        FontAwesomeIcon,
    },
    data(){
        return{
            session: 45,
            date: 'JUNE 6, 2022',
            time: '6:00 PM',
            amt: 0,
            pack: 5,
            passName: 'Ta',
            price: 6990,
            expiry: 69,
            seats: 3,
            guests: ['John Doe', 'Jane Doe']
        }
    },
    methods: {
        goToPopulatedAppHomePage(){
            this.$router.push('PopulatedAppHomePage')
        },
        goToBookAClass(){
            this.$router.push('BookAClass')
        }
    }
}
</script>

<style scoped>
    .page-header{
        background-color: black;        
    }
    .page-header span{
        color: white;
    }
    .page-footer{
        background-color: rgb(255, 255, 255);
    }
    .page-body{
        background-color: rgb(230, 230, 230);
        height: 75vh;
    }
    p{
        font-size: smaller;
    }
    .tnc-terms{
        font-size: small;
        text-align: left;
    }
    .dot {
        height: 15.69px;
        width: 15.69px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        margin: 0;
    }
    .selected {
        background-color: rgb(0, 0, 0);
    }
    label{
        font-size: x-small;
        color: rgb(185, 185, 185);
    }
    .already-signed-up-link{
        font-size: small;
    }
    .modal-action{
        font-size: small;
    }
    h4{
        font-size: small;
    }
    
</style>