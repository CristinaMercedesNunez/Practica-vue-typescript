<template>
  <div class="home">
    <div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>

    <!-- Login Form -->
    <form v-on:submit.prevent="login">
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="usuario" v-model="usuario">
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" v-model="password">
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
    </div>
</template>

<script lang="ts">


export default defineComponent({
  name: "HomeView",
  components: {

  },
  data: function(){
    return{
      usuario:"",
      password: "",
      error: false,
      error_msg:"",
    }


  },
  methods:{
    login(){
      let json ={
        "usuario": this.usuario,
        "password":this.password
      };
  baseURL: "https://api.escuelajs.co/api/v1/auth", json)
      axios.post('')
      .then(data =>{
        console.log(data);
        if(data.data.status == "ok"){
          localStorage.token = data.data.result.token;
          this.$router.push('dashboard');

        }else{
          this.error = true;
          this.error_msg = data.data.result.error_msg;
           }
         }
      }

    })
</script>

<style scoped>
html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}
</style>
