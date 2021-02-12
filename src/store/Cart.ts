import sum from '@/utils/functions/reduceSum';
import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import CartItem from '@/types/CartItem';

@Module({ namespaced: true })
export default class Cart extends VuexModule {
  items: CartItem[] = []

  @Mutation
  SET_ITEMS(items: CartItem[]) {
    this.items = items;
  }

  get total(): number {
    return this.items
      .map((item) => item.product.priceStock * item.amount)
      .reduce(sum, 0);
  }

  get count(): number {
    return this.items
      .map(({ amount }) => amount)
      .reduce(sum, 0);
  }

  @Action
  addItem(payload: CartItem) {
    const items = [...this.items];
    const existingItem = items.find((item) => item.product === payload.product);
    if (existingItem) {
      existingItem.amount += payload.amount;
    } else {
      items.push(payload);
    }

    this.context.commit('SET_ITEMS', items);
  }

  @Action({ commit: 'SET_ITEMS' })
  removeItem(payload: CartItem) {
    return this.items.filter((item) => item !== payload);
  }
}
