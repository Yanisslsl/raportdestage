<template>
  <navbar></navbar>
  <router-view/>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src

@Options({
  components: {
    Navbar,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
#app {
 
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-left: 0px;
 
 overflow-x: hidden;
 font-family: 'Cormorant', Arial, Helvetica, sans-serif;
 font-size: 12px;
  
}

@font-face {
 font-family: 'Cormorant';
 src: URL('./assets/fonts/Quicksand/Quicksand-Light.ttf') format('truetype');
}


</style>
