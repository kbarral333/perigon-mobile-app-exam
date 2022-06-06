<template>
<div class="page-header">
    <span class="d-flex justify-content-center">
        <font-awesome-icon @click="goToLogin" class="align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="mx-5 mb-3">Create Account</h3>
    </span>
</div>
<div class="forms">
    <p class="p-3">First base? we want to get to know you better. Sign up for an account and we'll take care of the rest</p>
    <div class="d-flex justify-content-center mb-3">
        <span class="dot selected mx-2"></span>
        <span class="align-self-center">- - - - - - - - - -</span>
        <span class="dot mx-2"></span>
        <span class="align-self-center">- - - - - - - - -</span>
        <span class="dot mx-2"></span>
    </div>
    <h4 class="d-flex justify-self-left px-3">PERSONAL INFORMATION</h4>
    <form class="px-3">
    <div class="form-group border border-secondary rounded bg-white mb-2">
      <label class="d-flex justify-self-left p-1" for="formGroupExampleInput">First name</label>
      <input v-model="user.personalInfo.fName" type="text" class="form-control border-0" id="formGroupExampleInput" >
    </div>
    <div class="form-group border border-secondary rounded bg-white mb-2">
      <label class="d-flex justify-self-left p-1" for="formGroupExampleInput">Last name</label>
      <input v-model="user.personalInfo.lName" type="text" class="form-control border-0" id="formGroupExampleInput" >
    </div>
    <div class="form-group border border-secondary rounded bg-white mb-5">
      <label class="d-flex justify-self-left p-1" for="formGroupExampleInput">Birth date</label>
      <input v-model="user.personalInfo.bDay" type="date" class="form-control border-0" id="formGroupExampleInput" >
    </div>
    <div class="mb-2">
        <h5 class="d-flex justify-self-left">
                EMERGENCY CONTACT
        </h5>
        <h5 class="d-flex justify-self-left">
                INFORMATION  
        </h5>
    </div>
    <div class="form-group border border-secondary rounded bg-white mb-2">
      <label class="d-flex justify-self-left p-1" for="formGroupExampleInput">Full name</label>
      <input v-model="user.emergencyContact.fullName" type="text" class="form-control border-0" id="formGroupExampleInput" >
    </div>
    <div class="form-group border border-secondary rounded bg-white mb-2">
      <label class="d-flex justify-self-left p-1" for="formGroupExampleInput">Mobile number</label>
      <input v-model="user.emergencyContact.mobileNo" type="number" class="form-control border-0" id="formGroupExampleInput" >
    </div>
    <div class="d-grid px-3 mb-3">
        <button class="btn btn-dark btn-lg btn-block" @click="goToAccountDetails">NEXT</button>
    </div>
    <div class="already-signed-up-link pl-5 pr-5 pb-5 pt-3">
        <a @click="goToLogin"><u>Already signed up?</u></a>
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
    data(){
        return{
            user:{
                personalInfo:{
                    fName: '',
                    lName: '',
                    bDay: '',
                    email: '',
                    password: ''
                },
                emergencyContact:{
                    fullName: '',
                    mobileNo: ''
                }
            },


        }
    },
    methods:{
        goToLogin(){
            this.$router.push('PerigonLogin')
        },
        goToAccountDetails(){
            console.log(this.user)
            var toPass = this.user
            this.$router.replace({name:'AccountDetails', params:{toPass}})
            // this.$router.push('AccountDetails')
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
    
</style>