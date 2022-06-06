<template>
    <div v-for="perigonSession in perigonSessions" :key="perigonSession" class="sessionCard p-2 rounded m-0 mb-4">
        <div class="row mb-2">
            <div class="col d-flex justify-content-center">
                <span class="dot align-self-center"></span>
                <h5 class="align-self-center m-0">{{perigonSession.instructor}}</h5>
            </div>
            <div class="col d-flex  justify-content-center">
                <button @click="bookClass(perigonSession.isAvailable)" class="btn btn-sm btn-dark align-self-center">{{perigonSession.isAvailable}}</button>
            </div>
        </div>
        <h6 class="d-flex my-3">PERIGON 45</h6>
        <div class="row">
            <div class="col">
                <label class="d-flex justify-content-left">Session</label>
                <p class="d-flex justify-content-left">{{perigonSession.duration}} MINS</p>
                
            </div>
            <div class="col">
                <label class="d-flex justify-content-left">Time</label>
                <p class="d-flex justify-content-left">{{perigonSession.time}}</p>    
            </div>
            <div class="col">
                <label class="d-flex justify-content-left">Vacancy</label>
                <p class="d-flex justify-content-left">{{perigonSession.vacancy}} LEFT</p>
            </div>
        </div>
    </div>
<button v-show="false" id="modal-toggler" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
</button>
<div class="modal fade mt-5 p-5" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-body">
            <h5><b>WAITLIST</b></h5>
            <p>
                This class is already full. No worries! We can waitlist you 
                and book you a seat once it will be available for 1 seat only. 
                Are you sure you want to continue?
            </p>
        </div>
        <div class="d-grid px-3 mb-3">
            <button class="btn btn-dark btn-lg btn-block modal-action"  data-bs-toggle="modal" data-bs-target="#staticBackdrop2">YES</button>
        </div>
        <div class="d-grid px-3 mb-3">
            <button class="btn btn-lg btn-block modal-action" data-bs-dismiss="modal">CANCEL</button>
        </div>
    </div>
  </div>
</div>
<div class="modal fade mt-5 p-5" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-body">
            <h5><b>WAITLIST SUCCESSFUL!</b></h5>
            <p>
                You have successfully waitlisted this class
            </p>
        </div>
        <div class="d-grid px-3 mb-3">
            <button @click="goToAppHomePage" class="btn btn-dark btn-lg btn-block modal-action" data-bs-dismiss="modal">BACK TO HOME</button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'perigonClass',
    data(){
        return{
            perigonSessions: [
                {
                    instructor: 'MARK',
                    duration: 60,
                    time: '12:00 PM',
                    vacancy: 3,
                    isAvailable: 'BOOK'
                },
                {
                    instructor: 'FOLD',
                    duration: 45,
                    time: '5:00 PM',
                    vacancy: 0,
                    isAvailable: 'WAITLIST'
                }
            ]
        }
    },
    methods:{
        bookClass(isAvailable){
            if(isAvailable == 'WAITLIST'){
                const elem = document.getElementById('modal-toggler')
                elem.click()
            }else{
                this.goToSelectSpots()
            }
        },
        goToAppHomePage(){
            this.$router.push('AppHomePage')
        },
        goToSelectSpots(){
            this.$router.push('SelectSpots')
        }
    }
}
</script>

<style scoped>
    label{
        font-size: xx-small;
    }
    p{
        font-size: x-small;
    }
    .dot {
        height: 30.69px;
        width: 30.69px;
        background-color: rgb(161, 161, 161);
        border-radius: 50%;
        display: inline-block;
    }
    .sessionCard{
        background-color: white;
    }
</style>