<template>
  <nav id="navbar">
    <router-link to="/" class="logo" title="Página Principal">
      <img :src="logoImg" alt="Wine" draggable="false">
    </router-link>

    <ul class="nav-links">
      <li v-for="item in items" :key="item.title" class="nav-link">
        <router-link :to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ul>

    <CartButton />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CartButton from '@/components/CartButton.vue';
import logoImg from '../assets/images/logo.svg';

@Component({
  components: {
    CartButton,
  },
})
export default class Navbar extends Vue {
  logoImg: string = logoImg

  items: Array<{title: string; path: string}> = [
    { title: 'Clube', path: '/clube' },
    { title: 'Loja', path: '/loja' },
    { title: 'Produtores', path: '/produtores' },
    { title: 'Ofertas', path: '/ofertas' },
    { title: 'Eventos', path: '/eventos' },
  ]
}
</script>

<style lang="scss">
@import '../assets/styles/constants';
@import '../assets/styles/colors';
@import '../assets/styles/layout';

#navbar {
  max-width: 1180px;
  width: 100%;
  min-height: 68px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;

  .logo {
    margin-right: 64px;
  }

  .nav-links {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;

    list-style: none;
    padding: 0;
    margin: 0;

    @include hide-smaller-than($large-screen-min-width, flex);
  }

  .nav-link {
    margin: 32px 50px 32px 0;
    font-weight: 400;
    font-size: 1.25rem;

    a {
      text-decoration: none;
      color: $darker-grey;
    }
  }

  .winebox-button {
    margin-left: auto;
  }
}
</style>
