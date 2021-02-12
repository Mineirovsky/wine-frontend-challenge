import Product from './Product';

export default interface CartItem {
  product: Product;
  amount: number;
}
