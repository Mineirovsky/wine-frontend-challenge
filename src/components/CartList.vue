<template>
  <ul class="cart-list">
    <li v-for="item in items" :key="item.product.name">
      <CartItem :value="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CartItemInterface from '@/types/CartItem';
import { mapState } from 'vuex';
import CartItem from './CartItem.vue';

@Component({
  components: {
    CartItem,
  },
  computed: mapState('Cart', ['items']),
})
export default class CartList extends Vue {
  items!: CartItemInterface[]
}
</script>

<style lang="scss">
@import '@/assets/styles/constants';
@import '@/assets/styles/colors';

.cart-list {
  padding: 0;
  list-style: none;
  margin: 0;

  li {
    padding: $base-length ($base-length * 1.125) $base-length 0;

    &:not(:last-of-type)::after {
      border-bottom: 1px solid $light-grey;
      display: block;
      width: calc(100% - $base-length);
      content: ' ';
      margin: 0 0 0 $base-length;
      position: relative;
      top: $base-length;
    }
  }
}
</style>
