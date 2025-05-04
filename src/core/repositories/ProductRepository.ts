import { Product } from "../entities/Product";

export interface IProductRepository {
  findById(id: string): Promise<Product | null>;
  save(product: Product): Promise<void>;
}

export class ProductRepository implements IProductRepository {
  private products = new Map<string, Product>();
  async findById(id: string) {
    return this.products.get(id) || null;
  }
  async save(product: Product) {
    this.products.set(product.id, product);
  }
}
