import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Product } from 'src/models/product.entity';
import { ProductsService } from 'src/models/products.service';

@Controller('/admin/products')
export class AdminProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @Render('admin/products/index')
  async index() {
    const viewData = [];
    viewData['title'] = 'Admin Page - GOKASUWA';
    viewData['products'] = await this.productsService.findAll();
    return { viewData: viewData };
  }

  @Post('/store')
  @UseInterceptors(FileInterceptor('image', { dest: './public/uploads' }))
  @Redirect('/admin/products')
  async store(@Body() body, @UploadedFile() file: Express.Multer.File) {
    const newProduct = new Product();
    newProduct.setName(body.name);
    newProduct.setDescription(body.description);
    newProduct.setPrice(body.price);
    newProduct.setImage(file.filename);
    await this.productsService.createOrUpdate(newProduct);
  }

  @Post('/:id')
  @Redirect('/admin/products')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
