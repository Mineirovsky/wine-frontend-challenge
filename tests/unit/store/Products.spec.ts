import Vue from 'vue';
import Vuex from 'vuex';
import Products from '@/store/Products';
import Product from '@/types/Product';

Vue.use(Vuex);

const products = [
  {
    available: true,
    image: 'img.jpg',
    name: 'Good Wine',
    priceMember: 24.99,
    pricePromotional: 29.99,
    priceStock: 32.99,
  },
] as Product[];

jest.mock('@/repositories/ProductRepository', () => ({
  getProducts: () => Promise.resolve([
    {
      available: true,
      image: 'img.jpg',
      name: 'Good Wine',
      priceMember: 24.99,
      pricePromotional: 29.99,
      priceStock: 32.99,
    },
  ] as Product[]),
}));

const { mutations, actions } = Products;

describe('store/Products', () => {
  it('SET_LOADING', () => {
    const state = { loading: false };
    if (!mutations?.SET_LOADING) {
      throw new Error('Instance not found');
    }
    mutations.SET_LOADING(state, true);

    expect(state.loading).toBeTruthy();
  });

  it('SET_PRODUCTS', () => {
    const state = { products: [] as Product[] };
    if (!mutations?.SET_PRODUCTS) {
      throw new Error('Instance not found');
    }

    mutations.SET_PRODUCTS(state, products);

    expect(state.products).toEqual(products);
  });

  it('fetchProducts action', async () => {
    if (!actions?.fetchProducts) {
      throw new Error('Instance not found');
    }

    const setLoadingMock = jest.fn();
    const setDataMock = jest.fn();

    const store = new Vuex.Store({
      modules: {
        Products: {
          state: {},
          mutations: {
            SET_LOADING: setLoadingMock,
            SET_PRODUCTS: setDataMock,
          },
          actions: {
            fetchProducts: actions.fetchProducts,
          },
          namespaced: true,
        },
      },
    });

    await store.dispatch('Products/fetchProducts');

    expect(setLoadingMock).toHaveBeenCalled();
    expect(setDataMock).toHaveBeenCalled();

    expect(setLoadingMock.mock.calls[0][1]).toBe(true);
    expect(setDataMock.mock.calls[0][1]).toEqual(products);
    expect(setLoadingMock.mock.calls[1][1]).toBe(false);
  });
});
