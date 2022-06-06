<template>
    <div class="page-header">
    <span class="d-flex justify-content-center">
        <font-awesome-icon class="align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="mx-5 mb-3">Purchase Passes</h3>
    </span>
</div>
    <div class="page-body p-5">
        <appPass @click="addToCart" class="mb-5"/>
    </div>
        <div class="align-bottom mb-2">
            <p>Entitles you to {{pack}} PERIGON rides</p>
        </div>
    <div class="page-footer p-3 align-bottom">
        <span class="d-flex justify-content-center pb-3">
            <div class="row p-2">
                <div class="col-4 d-flex flex-column">
                    <label class="d-flex justify-self-left">Total</label>
                    <b class="d-flex justify-self-left">PHP{{amt}}</b>
                </div>
                <div class="col-6">
                    <button @click="goToPurchaseSummary" class="btn btn-outline-dark">Checkout</button>
                </div>
            </div>
        </span>
    </div>
</template>

<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import appPass from "@/components/AppPass.vue"

export default {
    name: 'PersonalInfo',
    components: {
        FontAwesomeIcon,
        appPass
    },
    data(){
        return{
            amt: 0,
            pack: 5,
        }
    },
    methods: {
        goToAppHomePage(){
            this.$router.push('AppHomePage')
        },
        goToPurchaseSummary(){
            this.$router.push('PurchaseSummary')
        },
        addToCart(){
            this.amt = 6990
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
        height: 35.69px;
        width: 35.69px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        margin: 5px 2px;
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