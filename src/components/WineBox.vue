<template>
  <div class="wine-box-container">
    <section class="wine-box">

    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class WineBox extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/constants';
@import '@/assets/styles/colors';

.wine-box-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .25);

  .wine-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: $base-length * 22;
    background: $white;
  }
}
</style>
