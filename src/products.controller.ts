import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Render,
  Res,
} from '@nestjs/common';
import { ProductsService } from './models/products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @Render('products/index')
  async index() {
    const viewData = [];
    viewData['title'] = 'Products - GOKASUWA';
    viewData['subtitle'] = 'List of profucts';

    viewData['products'] = await this.productsService.findAll();
    return {
      viewData: viewData,
    };
  }

  @Get('/:id')
  async show(@Param() params, @Res() response) {
    try {
      const product = await this.productsService.findOne(params.id);

      const viewData = [];
      viewData['title'] = product.name + ' - GOKASUWA';
      viewData['subtitle'] = product.name + ' - Product Information';
      viewData['product'] = product;
      return response.render('products/show', { viewData: viewData });
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        return response.redirect('/products');
      }
      throw error;
    }
  }
}
