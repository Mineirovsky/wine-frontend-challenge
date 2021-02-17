<template>
  <div class="home">
    <section class="home-banner">
      <a href="#">
        <Banner/>
      </a>
    </section>
    <section class="home-offers">
      <ProductList :items="products" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import ProductList from '@/components/ProductList.vue';
import { mapState, mapActions } from 'vuex';
import Product from '@/types/Product';

@Component({
  components: {
    Banner,
    ProductList,
  },
  computed: mapState('Products', ['products']),
  methods: mapActions('Products', ['fetchProducts']),
})
export default class Home extends Vue {
  products!: Product[]

  fetchProducts!: () => Promise<Product[]>

  created() {
    this.fetchProducts();
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/constants';

.home-banner,
.home-offers {
  margin-bottom: $base-length * 3;
}
</style>
