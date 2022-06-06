<template>
<div class="page-header">
    <span class="d-flex justify-content-center pb-3">
        <font-awesome-icon @click="goToAccountDetails" class="align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="align-self-center mb-0 mx-5">Create Account</h3>
    </span>
</div>
<div class="forms">
    <p class="p-3">First base? we want to get to know you better. Sign up for an account and we'll take care of the rest</p>
    <div class="d-flex justify-content-center mb-3">
        <span class="dot selected mx-2"></span>
        <span class="align-self-center">- - - - - - - - - -</span>
        <span class="dot selected mx-2"></span>
        <span class="align-self-center">- - - - - - - - -</span>
        <span class="dot selected mx-2"></span>
    </div>
    <h4 class="d-flex justify-self-left px-3">TERMS AND CONDITIONS</h4>
    <div class="px-3">
        <p class="tnc-terms">
            The following terms and conditions shall be known as "Agreement" and shall govern the use of PERIGON's website 
            www.perigon.co (the "Website") and the PERIGON Mobile Application (the "App"), the purchase of PERIGON classes, 
            cancellation of purchase of PERIGON classes, registration of classes, purchase of merchandise, communication, 
            with PERIGON, and use of and attendance at PERIGON's studios.
            <br><br>
            These Terms of Service incorporates by reference PERIGON's Privacy Policy.
            <br><br>
            The following terms and conditions shall be known as "Agreement" and shall govern the use of PERIGON's website 
            www.perigon.co (the "Website") and the PERIGON Mobile Application (the "App"), the purchase of PERIGON classes, 
            cancellation of purchase of PERIGON classes, registration of classes, purchase of merchandise, communication, 
            with PERIGON, and use of and attendance at PERIGON's studios.
            <br><br>
            These Terms of Service incorporates by reference PERIGON's Privacy Policy.
        </p>
        <div class="d-grid pb-5 mb-3">
            <button class="btn btn-dark btn-lg btn-block" @click="goToVerifyPage">I ACCEPT</button>
        </div>
    </div>
</div>
<button v-show="false" id="modal-toggler" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
</button>
<div class="modal fade mt-5 p-5" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-body">
            <h4><b>SCROLL DOWN</b></h4>
            <p>Before you can proceed you must scroll to accept the latest Terms and Privacy Policy</p>
        </div>
        <div class="d-grid px-3 mb-3">
            <button class="btn btn-dark btn-lg btn-block modal-action" data-bs-dismiss="modal">OKAY, GOT IT</button>
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
        FontAwesomeIcon
    },
    mounted(){
        const elem = document.getElementById('modal-toggler')
        elem.click()
    },
    methods: {
        goToVerifyPage(){
            this.$router.push('VerifyPage')
        },
        goToAccountDetails(){
            this.$router.push('AccountDetails')
        }
    }
}
</script>

<style scoped>
    .page-header{
        background-color: black;
    }
    span :first-child{
        color: white;
    }
    span h3{
        color: white;
    }
    .forms{
        background-color: rgb(214, 214, 214);
        height: 100%;
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