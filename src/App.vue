<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>{{ message }} from express!</h2>
    <HelloWorld msg="Welcome to Your Vue.js"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'App',
  data(){
    return {
      message: String,
      default: 'Hi'
    }
  },
  components: {
    HelloWorld
  },
  created(){
      // GET /someUrl
      this.$http.get('/api/').then(response => {

        // get body data
        this.message = response.body.message;
        // console.log('Message: ', this.message)

      }, response => {
        // error callback
        console.log('Error: ', response)
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
