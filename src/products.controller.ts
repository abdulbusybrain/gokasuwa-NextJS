import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('/products')
export class ProductsController {
  static products = [
    {
      id: '1',
      name: 'Backpack',
      description: 'Best Backpack',
      image: 'backpack.jpg',
      price: '1000',
    },
    {
      id: '2',
      name: 'iPhone 17',
      description: 'Best iPhone 17',
      image: 'iphone17.jpg',
      price: '999',
    },
    {
      id: '3',
      name: 'Headphone',
      description: 'Best Headphone',
      image: 'headphone.jpg',
      price: '30',
    },
    {
      id: '4',
      name: 'EyeGlass',
      description: 'Best EyeGlass',
      image: 'eyeglass.jpg',
      price: '100',
    },
  ];

  @Get('/')
  @Render('products/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Products - GOKASUWA';
    viewData['subtitle'] = 'List of profucts';
    viewData['products'] = ProductsController.products;
    return {
      viewData: viewData,
    };
  }

  @Get('/:id')
  @Render('products/show')
  show(@Param() params) {
    const product = ProductsController.products[params.id - 1];
    const viewData = [];
    viewData['title'] = product.name + ' - GOKASUWA';
    viewData['subtitle'] = product.name + ' - Product Information';
    viewData['product'] = product;
    return {
      viewData: viewData,
    };
  }
}
