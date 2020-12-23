<template>
  <div id="app">
    <div id="header">
      <Navbar/>
    </div>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './assets/styles/constants';
@import './assets/styles/colors';

#app {
  #header {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid $light-grey;
    margin-bottom: $base-length * 3;
  }
}
</style>
