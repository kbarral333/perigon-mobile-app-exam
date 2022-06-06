<template>
    <div class="topNav p-5">
        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <span class="dot border-light"></span>
                    </div>
                    <div class="col">
                        <div class="userDisplay">
                            <label class="d-flex justify-self-left">Hello,</label>
                            <h6 class="d-flex justify-self-left">{{user}}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="buttons d-flex align-items-center">
                    <button>Settings</button>
                    <button>Menu</button>
                </div>
            </div>
        </div>
    </div>
    <div class="appBody overflow-auto">
        <div class="reminderBarContainer row">
            <div class="col d-flex justify-content-center">
                <div class="reminderBar rounded py-2 px-3">
                    <div class="row">
                        <div class="col">
                            <label class="d-flex justify-content-left mb-2">Next class in:</label>
                            <div class="row">
                                <div class="col">
                                    <p class="d-flex justify-self-center">{{days}}</p>
                                    <label class="d-flex justify-self-center">Days</label>
                                </div>:
                                <div class="col">
                                    <p class="d-flex justify-self-center">{{hours}}</p>
                                    <label class="d-flex justify-self-center">Hours</label>
                                </div>:
                                <div class="col">
                                    <p class="d-flex justify-self-center">{{mins}}</p>
                                    <label class="d-flex justify-self-center">Mins</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-5">
            <div class="pt-5">
                <h3>UPCOMING CLASSES</h3>
                <HomeClassCard/>
            </div>
        </div>
    </div>
    <div class="bottomNav d-flex justify-content-center align-items-end">
        <span class="dot mx-3"></span>
        <span @click="goToPurchasePass" class="dot mx-3"></span>
        <span class="dot mx-3"></span>
        <span class="dot mx-3"></span>
        <span class="dot mx-3"></span>
    </div>
</template>

<script>

    import HomeClassCard from '@/components/HomeClassCard.vue'

export default {

    name: 'PopulatedAppHomePage',
    components: {
        HomeClassCard
    },
    data(){
        return{
            user: 'SAMANTHA NICOLE',
            days: 6,
            hours: 9,
            mins: 10,
        }
    },
    methods: {
        goToPurchasePass(){
            this.$router.push('PurchasePass')
        }
    }
}
</script>

<style scoped>
    .topNav{
        background-color: black;
        height: 25vh;
    }
    .appBody{
        background-color: rgb(208, 208, 208);
        height: 65vh;
    }
    .bottomNav{
        background-color: white;
        height: 10vh;
    }
    .dot {
        height: 35.69px;
        width: 35.69px;
        background-color: rgb(161, 161, 161);
        border-radius: 50%;
        display: inline-block;
        margin: 5px 2px;
    }
    .reminderBar{
        background-color: white;
        width: 80%;
    }
    .reminderBar label{
        font-size: x-small;
    }
    .reminderBar p{
        font-size: small;
    }
    .userDisplay label{
        font-size: smaller;
    }.reminderBarContainer{
        width: 100%;
        position: absolute;
        margin-top: -25px;
    }.userDisplay h6{
        color: white;
    }.userDisplay label{
        color: white;
    }
</style>