<template>
  <ul class="product-list">
    <li v-for="item in items" :key="item.name">
      <ProductDisplay :item="item"/>
    </li>
  </ul>
</template>

<script lang="ts">
import Product from '@/types/Product';
import { Vue, Component, Prop } from 'vue-property-decorator';
import ProductDisplay from './ProductDisplay.vue';

@Component({
  components: {
    ProductDisplay,
  },
})
export default class ProductList extends Vue {
  @Prop(Array) readonly items!: Product[]
}
</script>

<style lang="scss">
@import '@/assets/styles/constants';
@import '@/assets/styles/layout';

.product-list {
  display: flex;
  list-style: none;
  padding: 0;
  width: calc(100% + 20px);
  margin: 0 -10px;
  overflow-x: scroll;

  @include style-larger-than($medium-screen-min-width) {
    flex-wrap: wrap;
    overflow-x: hidden;
  }

  .product-display {
    height:100%;
  }

  li {
    padding: 0 10px;
    width: (100%/3);
    min-width: 180px;
  }
}
</style>
