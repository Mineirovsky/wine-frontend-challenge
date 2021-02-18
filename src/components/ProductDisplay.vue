<template>
  <article class="product-display">
    <div class="box">
      <figure class="product-image box-section">
        <img :src="item.image" aria-hidden="true">
      </figure>
      <div class="product-details box-section">
        <h3 class="product-title">{{ item.name }}</h3>
        <template v-if="item.available">
          <s class="price-stock" :aria-label="`Preço Estoque: ${formatAriaPrice(item.priceStock)}`">
            R$ {{ formatPrice(item.priceStock) }}
          </s>
          <div class="price-member">
            <p class="member-heading" aria-hidden="true">Sócio Wine</p>
            <p
              class="price"
              :aria-label="`Preço para sócio Wine: ${formatAriaPrice(item.priceMember)}`"
            >
              R$ <span class="integral" v-text="memberPriceSplit[0]"/>,{{ memberPriceSplit[1] }}
            </p>
          </div>
          <button
            class="btn purple btn-buy-desktop"
            :disabled="!item.available"
            :aria-label="`Adicionar ${item.name} ao carrinho`"
            @click="addToCart"
          >
            Adicionar
          </button>
        </template>
        <button v-else class="btn btn-buy-desktop" disabled>Esgotado</button>
        <small v-if="item.available" class="price-non-member" aria-hidden="true">
          Não sócio R$ {{ formatPrice(item.priceStock) }}
        </small>
      </div>
    </div>
    <button
      v-if="item.available"
      class="btn purple btn-buy-mobile"
      :disabled="!item.available"
      :aria-label="`Adicionar ${item.name} ao carrinho`"
      @click="addToCart"
    >
      Adicionar
    </button>
    <button v-else class="btn btn-buy-mobile" disabled>Esgotado</button>
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
  display: flex;
  flex-direction: column;

  .box {
    flex-grow: 1;
    background: $white;
    display: flex;
    padding: 16px 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .05);
    width: 100%;
    flex-flow: column;
    text-align: center;
    margin-bottom: 8px;

    @include style-larger-than($medium-screen-min-width) {
      flex-flow: row;
      text-align: initial;
    }

    .box-section {
      width: 100%;

      @include style-larger-than($medium-screen-min-width) {
        width: 50%;
      }
    }

    .product-image {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .product-title {
      font-size: 1em;
      margin: 4px 0 16px 0;
    }

    .price-stock {
      color: $dark-grey;
      font-size: (12em/14);
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

      .member-heading,
      .price {
        margin: 0 4px;
        @include style-larger-than($medium-screen-min-width) {
          margin: 0;
        }
      }

      .member-heading {
        color: $black;
        text-align: right;
        font-size: (10em/14);
        text-transform: uppercase;
        width: min-content;
        display: block;

        @include style-larger-than($medium-screen-min-width) {
          width: auto;
          text-align: left;
        }
      }
    }

    .price-non-member {
      font-size: (10em/14);
      text-transform: uppercase;
      color: $dark-grey;

      @include show-smaller-than($medium-screen-min-width, inline);
    }
  }

  .btn-buy-mobile {
    width: 100%;
    margin: 8px 0 16px 0;

    @include show-smaller-than($medium-screen-min-width);
  }

  .btn-buy-desktop {
    width: 100%;

    @include hide-smaller-than($medium-screen-min-width, block!important);
  }
}
</style>
