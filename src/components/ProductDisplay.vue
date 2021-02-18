<template>
  <article class="product-display">
    <div class="box">
      <figure>
        <img :src="item.image" aria-hidden="true">
      </figure>
      <div>
        <h1>{{ item.name }}</h1>
        <template v-if="item.available">
          <s :aria-label="`Preço Estoque: ${formatAriaPrice(item.priceStock)}`">
            R$ {{ formatPrice(item.priceStock) }}
          </s>
          <div class="price-member">
            <h2 aria-hidden="true">Sócio Wine</h2>
            <p :aria-label="`Preço para sócio Wine: ${formatAriaPrice(item.priceMember)}`">
              R$ <span class="integral" v-text="memberPriceSplit[0]"/>,{{ memberPriceSplit[1] }}
            </p>
          </div>
          <button
            class="btn purple hide-sm"
            :disabled="!item.available"
            :aria-label="`Adicionar ${item.name} ao carrinho`"
            @click="addToCart"
          >
            Adicionar
          </button>
        </template>
        <button v-else class="btn hide-sm" disabled>Esgotado</button>
        <small class="show-sm" aria-hidden="true">
          Não sócio R$ {{ formatPrice(item.priceStock) }}
        </small>
      </div>
    </div>
    <button
      v-if="item.available"
      class="btn purple show-sm"
      :disabled="!item.available"
      :aria-label="`Adicionar ${item.name} ao carrinho`"
      @click="addToCart"
    >
      Adicionar
    </button>
    <button v-else class="btn show-sm" disabled>Esgotado</button>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Product from '@/types/Product';
import formatPrice from '@/utils/formatPrice';
import formatAriaPrice from '@/utils/formatAriaPrice';
import CartItem from '@/types/CartItem';

@Component
export default class ProductDisplay extends Vue {
  @Prop({ type: Object, required: true }) item!: Product

  formatPrice = formatPrice

  formatAriaPrice = formatAriaPrice

  get memberPriceSplit() {
    return this.item.priceMember.toFixed(2).split('.');
  }

  addToCart() {
    this.$store.dispatch('Cart/addItem', { product: this.item, amount: 1 } as CartItem);
    this.$store.dispatch('WineBox/open');
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/constants';
@import '@/assets/styles/colors';
@import '@/assets/styles/layout';

.product-display {
  .box {
    background: #FFF;
    display: flex;
    padding: 16px 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .05);
    width: 100%;
    flex-flow: column;
    text-align: center;

    @include style-larger-than($medium-screen-min-width) {
      flex-flow: row;
      text-align: initial;
    }

    & + .btn {
      margin: 8px 0 16px 0;
    }

    & > * {
      width: 100%;

      @include style-larger-than($medium-screen-min-width) {
        width: 50%;
      }
    }

    figure {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h1 {
      font-size: 1em;
      margin: ($base-length * .25) 0 $base-length 0;
    }

    s {
      color: $dark-grey;
      font-size: 14px;
    }

    .price-member {
      display: flex;

      justify-content: center;
      align-items: center;
      margin: 10px 0 4px 0;

      @include style-larger-than($medium-screen-min-width) {
        justify-content:  initial;
        align-items: initial;
        flex-flow: column;
        margin-bottom: 16px;
      }

        @include style-larger-than($medium-screen-min-width) {
          margin: 0;
        }
        font-size: (10em/14);
        text-transform: uppercase;
        margin: 0;
        width: min-content;
        display: block;

        @include style-larger-than($medium-screen-min-width) {
          width: auto;
        }
      }

      p {
        margin: 0;
        color: $purple;

        .integral {
          font-size: (18em/14);
        }
      }
    }

      font-size: (10em/14);
      text-transform: uppercase;
      color: $dark-grey;

      @include show-smaller-than($medium-screen-min-width, inline);
    }
  }

  .btn {
    width: 100%;

    &.hide-sm {
      display: none !important;

    @include show-smaller-than($medium-screen-min-width);
  }

    &.show-sm {
      display: block !important;

    @include hide-smaller-than($medium-screen-min-width, block!important);
  }
}
</style>
