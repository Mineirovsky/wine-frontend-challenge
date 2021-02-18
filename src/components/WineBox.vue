<template>
  <div v-if="show" class="wine-box-container">
    <section class="wine-box" role="dialog" aria-modal="true" aria-labelledby="wine-box-title">
      <div class="heading">
        <h2 id="wine-box-title" class="title">WineBox ({{ count }})</h2>
        <button class="btn icon-only btn-close" @click="onClickClose">
          <img :src="arrowIcon" title="Fechar" draggable="false">
        </button>
      </div>
      <CartList/>
      <div class="checkout-box">
        <div class="total">
          <small class="heading">Subtotal</small>
          <div class="price">
            R$ <span class="integral">{{ priceSplit[0] }}</span>,{{ priceSplit[1] }}
          </div>
        </div>
        <button class="btn green no-shadow btn-checkout">
          Finalizar pedido
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import arrowIcon from '@/assets/icons/arrow.svg';
import { mapState, mapActions, mapGetters } from 'vuex';
import CartList from './CartList.vue';

@Component({
  components: {
    CartList,
  },
  computed: {
    ...mapState('WineBox', ['show']),
    ...mapGetters('Cart', ['count', 'total']),
  },
  methods: mapActions('WineBox', ['open', 'close']),
})
export default class WineBox extends Vue {
  show!: boolean

  count!: number

  total!: number

  get priceSplit() {
    return this.total.toFixed(2).split('.');
  }

  open!: () => void

  close!: () => void

  arrowIcon = arrowIcon

  onClickClose() {
    this.close();
    this.$emit('close');
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/constants';
@import '@/assets/styles/colors';

.wine-box-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .25);
  z-index: 9999;

  .wine-box {
    margin-left: auto;
    width: 100%;
    height: 100%;
    max-width: 352px;
    background: $lighter-grey;
    overflow-y: scroll;
    display: flex;
    flex-flow: column;

    > .heading {
      padding: 24px 16px;
      background: $white;
      display: flex;

      .btn-close {
        flex-grow: 0;
        flex-shrink: 0;
        margin: -12px 4px -12px -16px;
        order: -1;
      }

      .title {
        font-size: 1.25em;
        margin: 0;
        font-weight: 400;
        line-height: 1rem;
      }
    }

    .cart-list {
      flex-grow: 1;
    }

    .checkout-box {
      background: $white;
      padding: 20px 16px;
      box-shadow: 0px -2px 4px rgba(0, 0, 0, .05);

      .total {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .heading {
          font-weight: 600;
          font-size: (10em/14);
          text-transform: uppercase;
          color: $darker-grey;
        }
        .price {
          .integral {
            font-size: (24em/16);
          }
        }
      }

      .btn-checkout {
        width: 100%;
        margin: 16px auto 8px auto;
        padding: 16px;
      }
    }
  }
}
</style>
