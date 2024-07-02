import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle(process.env.APP_TITLE)
    .setDescription(process.env.APP_DESCRIPTION)
    .setVersion('1.0')
    .addTag('Sistema')
    .addTag('Cadastro')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacao', app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
