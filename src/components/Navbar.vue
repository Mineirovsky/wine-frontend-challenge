<template>
  <nav id="navbar">
    <router-link to="/" class="logo" title="Página Principal">
      <img :src="logoImg" alt="Wine" draggable="false">
    </router-link>
    <ul>
      <li v-for="item in items" :key="item.title">
        <router-link :to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ul>

    <!-- TODO: Replace stub -->
    <div class="winebox"></div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import logoImg from '../assets/images/logo.svg';

@Component
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

#navbar {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  padding: 0 $base-length;
  display: flex;
  align-items: center;

  .logo {
    margin-right: $base-length * 4;
  }

  ul {
    display: flex;
    flex-grow: 1;

    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 32px 50px 32px 0;
      font-weight: 400;
      font-size: 1.25rem;

      a {
        text-decoration: none;
        color: $darker-grey;
      }
    }
  }

  // TODO: Remove stub
  .winebox {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #000;
  }
}
</style>
