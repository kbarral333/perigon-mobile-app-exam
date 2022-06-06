<template>
<div class="page p-5">
  <h1 class="my-5">PERIGON</h1>
  <form class="p-3">
    <h5 class="d-flex justify-content-left">LOGIN ACCOUNT</h5>
    <div class="form-group border border-secondary rounded bg-white">
      <label class="d-flex justify-self-left  p-1" for="formGroupExampleInput">E-mail</label>
      <input type="text" class="form-control border-0" id="formGroupExampleInput" >
    </div>
    <div class="form-group border border-secondary rounded bg-white">
      <label class="d-flex justify-self-left p-1" for="formGroupExampleInput2">Password</label>
      <input type="password" class="form-control border-0" id="formGroupExampleInput2">
    </div>
  </form>
  <div class="d-flex =justify-content-left px-3">
    <p class="forget-password">Forgot password?</p>
  </div>
  <div class="d-grid px-3 mb-3">
    <button @click="goToAppHomePage" class="btn btn-dark btn-lg btn-block">LOGIN</button>
  </div>
  <div class="do-not-have-an-account-link">
    <p>Don't have an account yet? <a @click="createAccount"><u>Create an account</u></a></p>
  </div>
</div>
</template>

<script>
export default {
    name: 'PerigonLogin',
    methods: {
      createAccount(){
        this.$router.push('PersonalInfo')
      },
      goToAppHomePage(){
        this.$router.push('AppHomePage')
      }
    }
}
</script>

<style scoped>
.perigon-login{
  background-color: black;
}
  label{
    font-size: x-small;
    color: rgb(185, 185, 185);
  }
  .forget-password{
    font-size: xx-small;
    color: white;
  }
  .do-not-have-an-account-link{
    font-size: x-small;
    color: white;
  }
  h1{
    color: white;
  }
  h5{
    color: white;
  }
  .page{
    background-color: rgb(138, 138, 138);
    height: 100vh;
  }
</style>