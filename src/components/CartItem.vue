<template>
  <article class="cart-item">
    <figure>
      <img src="https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/19728-01.png" aria-hidden="true">
    </figure>
    <div class="cart-item-info">
      <div class="heading">
        <h3>{{ value.product.name }}</h3>
        <button class="btn icon-only close" @click="onClickClose">
          <img :src="closeIcon" title="Remover" draggable="false">
        </button>
      </div>

      <div class="counter">
        <AmountInput :amount="value.amount" @increment="onIncrement" @decrement="onDecrement" />
      </div>
      <div class="price">
        R$ <span class="integral">{{ priceSplit[0] }}</span>,{{ priceSplit[1] }}
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import closeIcon from '@/assets/icons/close.svg';
import CartItemInterface from '@/types/CartItem';
import AmountInput from '@/components/AmountInput.vue';

@Component({
  components: {
    AmountInput,
  },
})
export default class CartItem extends Vue {
  closeIcon = closeIcon

  @Prop() readonly value!: CartItemInterface

  get priceSplit() {
    return this.value.product.priceStock.toFixed(2).split('.');
  }

  onClickClose() {
    this.$store.dispatch('Cart/removeItem', this.value);
  }

  onIncrement() {
    const { product } = this.value;
    this.$store.dispatch('Cart/addItem', { product, amount: 1 });
  }

  onDecrement() {
    const { product } = this.value;
    this.$store.dispatch('Cart/addItem', { product, amount: -1 });
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
