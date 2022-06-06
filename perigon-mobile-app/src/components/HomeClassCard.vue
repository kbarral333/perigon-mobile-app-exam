<template>
    <div v-for="perigonSession in perigonSessions" :key="perigonSession" class="sessionCard p-2 rounded m-0 mb-4">
        <div class="row mb-2">
            <div class="col align-bottom">
                <div class="row">
                    <div class="col">
                        <h5>{{perigonSession.instructor}}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h6>{{perigonSession.duration}}</h6>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <label>Date</label>
                    <p>{{perigonSession.date}}</p>
                </div>
                <div class="row">
                    <label>Time</label>
                    <p>{{perigonSession.time}}</p>
                </div>
                <div class="row">
                    <label>Location</label>
                    <p>{{perigonSession.location}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'HomeClassCard',
    data(){
        return{
            perigonSessions: [
                {
                    instructor: 'MARK',
                    duration: 60,
                    time: '12:00 PM',
                    date: 'JUNE 6, 2022',
                    location: 'SAN JUAN'
                },
                {
                    instructor: 'FOLD',
                    duration: 45,
                    time: '5:00 PM',
                    date: 'JUNE 2, 2022',
                    location: 'SAN JUAN'
                }
            ]
        }
    },
    methods:{
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