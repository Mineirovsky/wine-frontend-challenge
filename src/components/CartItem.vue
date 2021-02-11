<template>
  <article class="cart-item">
    <figure>
      <img src="https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/19728-01.png" aria-hidden="true">
    </figure>
    <div class="cart-item-info">
      <div class="heading">
        <h3>Oxford Landing Cabernet Shiraz 2016</h3>
        <button class="btn icon-only close" @click="onClickClose">
          <img :src="closeIcon" title="Remover" draggable="false">
        </button>
      </div>

      <div class="counter"></div>
      <div class="price">
        R$ <span class="integral">64</span>,00
      </div>
    </div>
  </article>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import closeIcon from '@/assets/icons/close.svg';

@Component
export default class CartItem extends Vue {
  closeIcon = closeIcon

  onClickClose() {
    this.$emit('remove');
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/constants';
@import '@/assets/styles/colors';

.cart-item {
  display: flex;

  figure {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ($base-length * 6);

    img {
      width: 100%;
    }
  }

  .cart-item-info {
    position: relative;
    width: 100%;

    .counter {
      background: #000;
      border-radius: 3px;
      width: 77px;
      height: 38px;
      position: absolute;
      left: 0;
      bottom: 0;
      display: inline-block;
    }

    .price {
      font-size: (16em/14);
      color: $purple;
      position: absolute;
      right: 0;
      bottom: 0;

      .integral {
        font-size: 1.25em;
      }
    }

    & > .heading {
      display: flex;

      h3 {
        font-size: 1em;
        flex-grow: 1;
        margin: ($base-length * .25) 0;
      }

      .close {
        margin: 0 (-$base-length) 0 ($base-length * 2);
        flex-shrink: 0;
        flex-grow: 0;
      }
    }
  }
}
</style>
