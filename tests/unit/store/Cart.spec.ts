import Vue from 'vue';
import Vuex from 'vuex';
import Cart from '@/store/Cart';
import CartItem from '@/types/CartItem';
import Product from '@/types/Product';

Vue.use(Vuex);

const { mutations, actions, getters } = Cart;

const product = {
  available: true,
  image: '',
  name: '',
  priceMember: 10,
  pricePromotional: 12,
  priceStock: 15,
} as Product;

const product1 = {
  available: true,
  image: '',
  name: '',
  priceMember: 20,
  pricePromotional: 24,
  priceStock: 30,
} as Product;

describe('store/Cart', () => {
  it('SET_ITEMS', () => {
    if (!mutations?.SET_ITEMS) {
      throw new Error('Instance not found');
    }

    const state = { items: [] as CartItem[] };

    mutations.SET_ITEMS(state, [{ product, amount: 2 }] as CartItem[]);

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual({ product, amount: 2 });
  });

  it('get total', () => {
    if (!getters?.total) {
      throw new Error('Instance not found');
    }

    const state = {
      items: [
        { product, amount: 2 },
        { product: product1, amount: 1 },
      ] as CartItem[],
    };

    const result = getters.total(state, null, null, null);

    expect(result).toBe(60);
  });

  it('get count', () => {
    if (!getters?.count) {
      throw new Error('Instance not found');
    }

    const state = {
      items: [
        { product, amount: 2 },
        { product: product1, amount: 1 },
      ] as CartItem[],
    };

    const result = getters.count(state, null, null, null);

    expect(result).toBe(3);
  });

  it('addItem', async () => {
    if (!actions?.addItem) {
      throw new Error('Instance not found');
    }

    const setDataMock = jest.fn();

    const store = new Vuex.Store({
      modules: {
        Cart: {
          state: {
            items: [
              {
                product,
                amount: 1,
              },
            ] as CartItem[],
          },
          mutations: {
            SET_ITEMS: setDataMock,
          },
          actions: {
            addItem: actions.addItem,
          },
          namespaced: true,
        },
      },
    });

    await store.dispatch('Cart/addItem', { product, amount: 1 } as CartItem);
    await store.dispatch('Cart/addItem', { product: product1, amount: 1 } as CartItem);

    expect(setDataMock.mock.calls[0][1]).toHaveLength(1);
    expect(setDataMock.mock.calls[0][1][0]).toEqual({ product, amount: 2 });
    expect(setDataMock.mock.calls[1][1]).toHaveLength(2);
    expect(setDataMock.mock.calls[1][1][0]).toEqual({ product, amount: 2 });
    expect(setDataMock.mock.calls[1][1][1]).toEqual({ product: product1, amount: 1 });
  });

  it('removeItem', async () => {
    if (!actions?.removeItem) {
      throw new Error('Instance not found');
    }

    const setDataMock = jest.fn();

    const store = new Vuex.Store({
      modules: {
        Cart: {
          state: {
            items: [
              {
                product,
                amount: 1,
              },
            ] as CartItem[],
          },
          mutations: {
            SET_ITEMS: setDataMock,
          },
          actions: {
            removeItem: actions.removeItem,
          },
          namespaced: true,
        },
      },
    });

    await store.dispatch('Cart/removeItem', store.state.Cart.items[0]);

    expect(setDataMock.mock.calls[0][1]).toHaveLength(0);
  });
});
