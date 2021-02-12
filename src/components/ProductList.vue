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
