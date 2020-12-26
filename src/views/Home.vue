<template>
  <div class="home">
    <section class="home-banner">
      <a href="#">
        <Banner/>
      </a>
    </section>
    <section class="home-offers">
      <ProductList/>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '@/components/Banner.vue';
import ProductList from '@/components/ProductList.vue';

@Component({
  components: {
    Banner,
    ProductList,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/constants';

.home-banner {
  margin-bottom: $base-length * 3;
}
</style>
