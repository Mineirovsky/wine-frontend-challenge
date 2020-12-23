<template>
  <div id="app">
    <div class="header">

    </div>
    <router-view/>
  </div>
</template>



<style lang="scss">
@import './assets/styles/constants';
@import './assets/styles/colors';

#app {
  .header {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid $light-grey;
    margin-bottom: $base-length * 3;
  }
}
</style>
