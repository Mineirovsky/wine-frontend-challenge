import Product from '@/types/Product';
import makeResponseError from './makeResponseError';

const productsUrl = process.env.PRODUCT_API_URL ?? '';

export default class ProductRepository {
  /**
   * Get list of products from API
   *
   * @returns Promise<Product[]>
   */
  static async getProducts(): Promise<Product[]> {
    const result = await fetch(productsUrl);

    if (!result.ok) {
      throw makeResponseError(result);
    }

    return result.json();
  }
}
