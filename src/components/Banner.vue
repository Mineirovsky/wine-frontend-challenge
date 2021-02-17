<template>
  <picture class="banner">
    <source media="(min-width: 576px)" :srcset="bannerWideImg">
    <img :src="bannerBoxImg" :alt="altText">
  </picture>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import bannerWideImg from '@/assets/images/banner-wide.png';
import bannerBoxImg from '@/assets/images/banner-box.png';

@Component
export default class Banner extends Vue {
  bannerWideImg = bannerWideImg

  bannerBoxImg = bannerBoxImg

  altText = 'Big Sale. É big, é desconto, é a Wine caprichando mais uma vez. Vinhos a partir de 29 e 90 para sócio Wine. Confira a seleção.'
}
</script>

<style lang="scss">
.banner {
  margin: 0;

  img {
    width: 100%;
  }
}
</style>
