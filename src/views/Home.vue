<template>
  <div class="home">
    <section class="home-section">
      <a href="#">
        <Banner/>
      </a>
    </section>
    <section class="home-section">
      <Spinner v-if="productsLoading" color="#5CB76F" size="72px" />
      <ProductList v-else :items="products" />
    </section>
  </div>
</template>

<script lang="ts">
import Spinner from 'vue-spinner/src/ClipLoader.vue';
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import ProductList from '@/components/ProductList.vue';
import { mapState, mapActions } from 'vuex';
import Product from '@/types/Product';

@Component({
  components: {
    Banner,
    ProductList,
    Spinner,
  },
  computed: mapState('Products', {
    products: 'products',
    productsLoading: 'loading',
  }),
  methods: mapActions('Products', ['fetchProducts']),
})
export default class Home extends Vue {
  products!: Product[]

  productsLoading!: boolean

  fetchProducts!: () => Promise<Product[]>

  created() {
    this.fetchProducts();
  }
}
</script>

<style>
.home-section {
  margin-bottom: 48px;
}
</style>
