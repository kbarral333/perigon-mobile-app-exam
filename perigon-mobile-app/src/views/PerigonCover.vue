<template>
<div class="align-middle p-5">
    <h1 class="mt-5">Perigon</h1>
    <h3>The Undercover Athletes</h3>
</div>
</template>

<script>
export default {
  name: 'PerigonCover',
  mounted(){
    setTimeout(() => {
        this.$router.push('IntroPage')
        }, "1000")
  } 
}
</script>

<style scoped>
    h1{
        color: white;
    }
    h3{
        color: white;
    }
    div{
        height: 100vh;
        background-color:black;
    }

</style>