import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    return {
      title: 'Home Page - GOKASUWA',
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    let viewData = [];
    viewData['description'] = 'Purpose of the project';
    viewData['author'] = 'Developed by: Abdullahi(Busybrain)';
    let data1 = 'About - GOKASUWA Online Store';

    return {
      title: data1,
      subtitle: 'About us',
      viewData: viewData,
    };
  }
}
