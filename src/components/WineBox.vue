<template>
  <div class="wine-box-container">
    <section class="wine-box" role="dialog" aria-modal="true" aria-labelledby="wine-box-heading">
      <div class="heading">
        <h2 id="wine-box-heading">WineBox</h2>
        <button class="btn icon-only close" @click="onClickClose">
          <img :src="arrowIcon" title="Fechar" draggable="false">
        </button>
      </div>
      <CartList/>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import arrowIcon from '@/assets/icons/arrow.svg';
import CartList from './CartList.vue';

@Component({
  components: {
    CartList,
  },
})
export default class WineBox extends Vue {
  arrowIcon = arrowIcon

  onClickClose() {
    this.$emit('close');
  }
}
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
  z-index: 9999;

  .wine-box {
    margin-left: auto;
    width: 100%;
    height: 100%;
    max-width: $base-length * 22;
    background: $lighter-grey;
    overflow-y: scroll;

    & > .heading {
      padding: ($base-length * 1.5) $base-length;
      background: $white;
      display: flex;

      .close {
        flex-grow: 0;
        flex-shrink: 0;
        margin: (-$base-length * .75) ($base-length * .25) (-$base-length * .75) (-$base-length);
        order: -1;
      }

      h2 {
        font-size: 1.25em;
        margin: 0;
        font-weight: 400;
        line-height: 1rem;
      }
    }
  }
}
</style>
