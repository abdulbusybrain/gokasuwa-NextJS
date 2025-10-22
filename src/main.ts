import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import hbs from 'hbs';
import hbsUtilsFactory from 'hbs-utils';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import path from 'path';

const hbsUtils = hbsUtilsFactory(hbs);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  hbs.registerPartials(path.join(__dirname, '..', 'views/layouts'));
  hbsUtils.registerWatchedPartials(path.join(__dirname, '..', 'views/layouts'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
