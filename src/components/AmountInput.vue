<template>
  <div class="amount-input">
    <button @click="decrement">-</button>
    <span class="display">{{ amount }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AmountInput extends Vue {
  @Prop({ type: Number, required: true })
  amount!: number

  increment() {
    this.$emit('increment');
  }

  decrement() {
    if (this.amount === 1) {
      return;
    }

    this.$emit('decrement');
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/colors';
.amount-input {
  border: solid 1px $dark-grey;
  border-radius: 3px;
  display: flex;
  width: 78px;
  height: 38px;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
    height: 38px;

    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: $dark-grey;
    font-size: 20px;

    padding: 0 8px;
  }

  .display {
    font-weight: 400;
  }
}
</style>
