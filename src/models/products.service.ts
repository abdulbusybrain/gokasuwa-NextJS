import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    const productId = Number(id);
    if (Number.isNaN(productId))
      throw new BadRequestException('Invalid product id');

    const product = await this.productsRepository.findOneBy({ id: productId });
    if (!product) throw new NotFoundException(`Product ${id} not found`);
    return product;
  }

  createOrUpdate(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
