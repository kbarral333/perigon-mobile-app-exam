<template>
<div class="page-header">
    <span class="d-flex justify-content-center">
        <font-awesome-icon class="align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="mx-5 mb-3">Verify Account</h3>
    </span>
</div>
<div class="forms">
    <p class="p-3">
        Thank you for registering with us! We have sent a verification code to your <b>email {{email}}</b>.<br><br>
        Kindly check your email to verify your account.
    </p>
    <br>
    <br>
    <form class="px-3">
    <div class="form-group border border-secondary rounded bg-white mb-3">
      <input type="number" class="form-control border-0 text-center" id="formGroupExampleInput" >
    </div>
    <div class="d-grid mb-3">
        <button class="btn btn-dark btn-lg btn-block" @click="goToLogin">VERIFY CODE</button>
    </div>
    <p class="p-3">
        If you cannot locate the verification email in your main inbox, please check your junk or spam mailbox. 
        If you still can't locate it, <u><b>Resend Code</b></u>
    </p>
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
    methods:{
        goToLogin() {
            this.$router.push('PerigonLogin')
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
        font-size: small;
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