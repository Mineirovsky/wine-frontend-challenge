<template>
  <ul class="cart-list">
    <li>
      <CartItem/>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CartItem from './CartItem.vue';

@Component({
  components: {
    CartItem,
  },
})
export default class CartList extends Vue {

}
</script>

<style lang="scss">
.cart-list {
  padding: 0;
  list-style: none;
}
</style>
