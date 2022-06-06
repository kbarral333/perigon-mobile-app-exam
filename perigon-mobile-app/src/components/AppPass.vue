<template>
    <div class="tix shadow">
        <div class="row tixHeader py-3 m-0">
            <div class="col">
                <p class="align-center m-0">{{passName}}</p>
            </div>
            <div class="col-2">
                <span class="align-center dot"></span>
            </div>
        </div>
        <div class="tixBody px-4 py-3">
            <label>Price</label>
            <p>{{price}}</p>
            <label>Expiration</label>
            <p>{{expiration}} DAYS</p>
            <label>Pack</label>
            <p>{{pack}} PACK</p>
            <label>Mode</label>
            <p>{{mode}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'appPass',
    data(){
        return{
            passName: 'Ta',
            price: 6990,
            expiration: 69,
            pack: 6,
            mode: 'SHAREABLE'
            // passName: String,
            // price: Number,
            // expiration: Number,
            // pack: String,
            // mode: String
        }
    }
}
</script>

<style scoped>
    .tix{
        background-color: white;
        text-align: left;
    }
    .tixHeader{
        background-color: black;
    }
    .tixHeader p{
        color: white;
    }
    label{
        font-size: xx-small;
    }
    .dot {
        height: 30.69px;
        width: 30.69px;
        background-color: rgb(161, 161, 161);
        border-radius: 50%;
        display: inline-block;
        margin: 5px 2px;
    }
</style>