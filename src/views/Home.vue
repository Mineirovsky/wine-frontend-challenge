<template>
  <div class="home">
    <section class="home-section">
      <a href="#">
        <Banner/>
      </a>
    </section>
    <section class="home-section">
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

<style>
.home-section {
  margin-bottom: 48px;
}
</style>
