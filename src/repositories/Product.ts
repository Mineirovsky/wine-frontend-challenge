import makeResponseError from './makeResponseError';

const productsUrl = process.env.PRODUCT_API_URL ?? '';

export default class Product {
  static async getProducts() {
    const result = await fetch(productsUrl);

    if (!result.ok) {
      throw makeResponseError(result);
    }

    return result.json();
  }
}
