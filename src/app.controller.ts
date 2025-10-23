import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    const viewData = [];
    viewData['title'] = 'Homepage - GOKASUWA';
    return {
      viewData: viewData,
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['title'] = 'About us - GOKASUWA';
    viewData['subtitle'] = 'About us';
    viewData['description'] =
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam harum amet asperiores labore a quidem in optio dolores velit non ad, minus tenetur, aliquam distinctio quis deserunt doloribus architecto maxime.';
    viewData['author'] = `Developed by: Abdullahi(Busybrain)`;

    return {
      viewData: viewData,
    };
  }
}
