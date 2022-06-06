<template>
    <div class="page-header">
    <span class="d-flex justify-content-center">
        <font-awesome-icon class="align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="mx-5 mb-3">Purchase Summary</h3>
    </span>
</div>
    <div class="page-body p-5">
        <div>
            <p>You're about to purchase the following pack/s:</p>
            <p class="m-0 align-center">Pack {{pack}} PACK ({{passName}}) <span class="dot"></span></p>
            <p class="m-0 align-center">Total PHP {{price}}</p>
        </div>
        <h3>PAYMENT</h3>
        <div>
            <label>Payment Method</label>
            <p>CASH OR CHEQUE (OVER THE COUNTER)</p>
        </div>
    </div>
    <div class="page-footer p-3 align-bottom">
        <div class="d-grid">
            <button class="btn btn-block btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">PLACE ORDER</button>
        </div>
    </div>
    <div class="modal fade mt-5 p-5" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <h4><b>PURCHASE SUCCESSFUL</b></h4>
                <p>You have successfully purchased <b>{{pack}} Pack</b> that will expire on <b>{{expiry}} days</b>. Would you like to book a class now?</p>
            </div>
            <div class="d-grid px-3 mb-3">
                <button @click="goToBookAClass" class="btn btn-dark btn-lg btn-block modal-action" data-bs-dismiss="modal">BOOK NOW</button>
                <button class="btn btn-block btn-light" data-bs-dismiss="modal">MAYBE LATER</button>
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
            amt: 0,
            pack: 5,
            passName: 'Ta',
            price: 6990,
            expiry: 69
        }
    },
    methods: {
        goToAppHomePage(){
            this.$router.push('AppHomePage')
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