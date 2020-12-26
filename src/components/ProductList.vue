<template>
  <ul class="product-list">
    <li v-for="item in items" :key="item.name">
      <ProductDisplay :item="item"/>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ProductDisplay from './ProductDisplay.vue';

@Component({
  components: {
    ProductDisplay,
  },
})
export default class ProductList extends Vue {
  items = [
    {
      available: true,
      image:
        'https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/23315-01.png',
      name: 'Partridge Flying Malbec 2019',
      priceMember: 34.9,
      pricePromotional: 41.06,
      priceStock: 59.9,
    },
    {
      available: true,
      image:
        'https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/19728-01.png',
      name: 'Oxford Landing Cabernet Shiraz 2016',
      priceMember: 47.9,
      pricePromotional: 56.35,
      priceStock: 120.9,
    },
    {
      available: false,
      image:
        'https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/23386-01.png',
      name: 'Pedro Teixeira Tinto',
      priceMember: 31.9,
      pricePromotional: 37.53,
      priceStock: 52.9,
    },
  ];
}
</script>

<style lang="scss">
.product-list {
  display: flex;
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;

  .product-display {
    height:100%;
  }

  li {
    width: (100%/3);
    padding: 0 10px;

    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
    }
  }
}
</style>
