import ProductRepository from '@/repositories/ProductRepository';
import Product from '@/types/Product';
import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class Products extends VuexModule {
  loading = false

  products: Product[] = []

  @Mutation
  SET_LOADING(value: boolean) {
    this.loading = value;
  }

  @Mutation
  SET_PRODUCTS(products: Product[]) {
    this.products = products;
  }

  @Action
  async fetchProducts() {
    this.context.commit('SET_LOADING', true);
    try {
      const products = await ProductRepository.getProducts();
      this.context.commit('SET_PRODUCTS', products);
    } finally {
      this.context.commit('SET_LOADING', false);
    }
  }
}
