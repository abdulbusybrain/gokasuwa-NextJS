import { Controller, Get, Render } from '@nestjs/common';

@Controller('/admin')
export class AdminController {
  @Get('/')
  @Render('admin/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Admin Page - GOKASUWA';

    return { viewData: viewData };
  }
}
