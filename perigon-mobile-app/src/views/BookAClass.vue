<template>
    <div class="page-header">
    <span class="d-flex justify-content-center">
        <font-awesome-icon class="align-self-center" :icon="['fas', 'arrow-left']" />
        <h3 class="mx-5 mb-3">Book A Class</h3>
    </span>
</div>
    <div class="page-body p-5">
        <div class="btn-group">
            <button class="btn btn-outline-dark">SAN JUAN</button>
            <button class="btn btn-outline-dark">ALABANG</button>
        </div>
        <div class="locationDescription mt-3">
            <p>
                <span class="dot"></span>
                2/F Santolan Town Plaza - 267 Col. 
                Bonny Serrano Avenue, San Juan, 
                Metro Manila - 
                <u><b>Direct Map</b></u>
            </p>
        </div>
        <div class="mb-3">
            <DatePicker is-expanded v-model="date" />
        </div>
        <div class="classes">
            <perigonClass/>
        </div>
    </div>
</template>

<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css'
import PerigonClass from "@/components/PerigonClass.vue";

export default {
    name: 'PersonalInfo',
    components: {
        FontAwesomeIcon,   
        DatePicker,
        PerigonClass

    },
    data(){
        return{
            date: new Date(),
        }
    },
    methods: {
        goToAppHomePage(){
            this.$router.push('AppHomePage')
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