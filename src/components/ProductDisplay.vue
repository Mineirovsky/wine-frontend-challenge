<template>
  <article class="product-display">
    <figure>
      <img :src="item.image" aria-hidden="true">
    </figure>
    <div>
      <h1>{{ item.name }}</h1>
      <template v-if="item.available">
        <s :aria-label="`Preço Estoque: ${formatAriaPrice(item.priceStock)}`">
          R$ {{ formatPrice(item.priceStock) }}
        </s>
        <h2 aria-hidden="true">Sócio Wine</h2>
        <p :aria-label="`Preço para sócio Wine: ${formatAriaPrice(item.priceMember)}`">
          R$ <span class="integral" v-text="memberPriceSplit[0]"/>,{{ memberPriceSplit[1] }}
        </p>
        <button
          class="btn purple"
          :disabled="!item.available"
          :aria-label="`Adicionar ${item.name} ao carrinho`"
        >
          Adicionar
        </button>
      </template>
      <button v-else class="btn" disabled>Esgotado</button>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Product from '@/types/Product';
import formatPrice from '@/utils/formatPrice';
import formatAriaPrice from '@/utils/formatAriaPrice';

@Component
export default class ProductDisplay extends Vue {
  @Prop({ type: Object, required: true }) item!: Product

  formatPrice = formatPrice

  formatAriaPrice = formatAriaPrice

  get memberPriceSplit() {
    return this.item.priceMember.toFixed(2).split('.');
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/constants';
@import '@/assets/styles/colors';

.product-display {
  background: #FFF;
  display: flex;
  padding: 16px 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .05);

  & > * {
    width: 50%;
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

  h2 {
    font-size: (10em/14);
    text-transform: uppercase;
    margin: (10/16 * $base-length) 0 ($base-length * .25) 0;
  }

  s {
    color: $dark-grey;
  }

  p {
    margin: 0 0 ($base-length * .875) 0;
    color: $purple;

    .integral {
      font-size: (18em/14);
    }
  }

  .btn {
    display: block;
    width: 100%;
  }
}
</style>
