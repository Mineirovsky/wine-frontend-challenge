<template>
  <button @click="openCart" class="winebox-button">
    <div class="circle">
      <img :src="bagImage">
      <div class="badge">{{ count }}</div>
    </div>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import bagImage from '@/assets/icons/bag.png';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters('Cart', ['count']),
})
export default class CartButton extends Vue {
  bagImage = bagImage

  count!: number

  openCart() {
    this.$store.dispatch('WineBox/open');
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/colors';

.winebox-button {
  background: none;
  border: none;
  padding: 0;
  position: relative;
  cursor: pointer;

  .circle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #F6B554;
  }

  .badge {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    right: 0;
    bottom: 0;
    color: $fern;
    text-align: center;
  }

}
</style>
