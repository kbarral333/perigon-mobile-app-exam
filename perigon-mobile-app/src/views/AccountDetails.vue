<template>
<div class="page-header">
    <span class="d-flex justify-content-center">
        <font-awesome-icon @click="goToPersonalInfo" class="align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="mx-5 mb-3">Create Account</h3>
    </span>
</div>
<div class="forms">
    <p class="p-3">First base? we want to get to know you better. Sign up for an account and we'll take care of the rest</p>
    <div class="d-flex justify-content-center mb-3">
        <span class="dot selected mx-2"></span>
        <span class="align-self-center">- - - - - - - - - -</span>
        <span class="dot selected mx-2"></span>
        <span class="align-self-center">- - - - - - - - -</span>
        <span class="dot mx-2"></span>
    </div>
    <h4 class="d-flex justify-self-left px-3">ACCOUNT DETAILS</h4>
    <form class="px-3">
    <div class="form-group border border-secondary rounded bg-white mb-3">
      <label class="d-flex justify-self-left p-1" for="email">E-mail</label>
      <input type="text" class="form-control border-0" id="email" >
    </div>
    <div class="form-group border border-secondary rounded bg-white mb-3">
        <label class="d-flex justify-self-left p-1" for="password">Password</label>
        <div class="input-group">
            <input type="password" class="form-control border-0" id="password" >
            <div class="input-group-append">
                <span class="dot"></span>
            </div>
        </div>
    </div>
    <div class="form-group border border-secondary rounded bg-white mb-3">
      <label class="d-flex justify-self-left p-1" for="passwordConfirmation">Confirm Password</label>
      <div class="input-group">
            <input type="password" class="form-control border-0" id="passwordConfirmation" >
            <div class="input-group-append">
                <span class="dot"></span>
            </div>
        </div>
    </div>
    <div class="d-flex">
        <input type="checkbox" class="custom-control-input big-checkbox" id="customCheck1">
        <p class="custom-control-label p-for-checkbox px-2" for="customCheck1">I agree to recieve emails from news, announcements and promotional offers from <b>PERIGON</b> via email</p>
    </div>
    <div class="d-grid px-3 my-3">
        <button @click="goToTnC" class="btn btn-dark btn-lg btn-block">NEXT</button>
    </div>
  </form>
</div>
</template>

<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default {
    name: 'PersonalInfo',
    components: {
        FontAwesomeIcon
    },
    props: {
        user: {
            type: Object
        }
    },
    methods:{
        goToTnC(){
            this.$router.push('TnC')
        },
        goToPersonalInfo(){
            this.$router.push('PersonalInfo')
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
        height: 100vh;
    }
    p{
        font-size: smaller;
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
    .big-checkbox{
        width: 30px;
        height: 30px;
    }
    .p-for-checkbox{
        font-size: small;
        text-align: left;
    }
    
</style>