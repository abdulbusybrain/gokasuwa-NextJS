import { Controller, Get, Render } from '@nestjs/common';
import { ProductsService } from 'src/models/products.service';

@Controller('/admin/products')
export class AdminProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @Render('admin/products/index')
  async index() {
    const viewData = [];
    viewData['title'] = 'Admin Page - Admin - GOKASUWA';
    viewData['products'] = await this.productsService.findAll();
    return { viewData: viewData };
  }
}
