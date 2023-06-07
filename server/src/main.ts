import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    credentials: true,
    origin: [configService.get('app.clientDomain')],
  });
  app.setGlobalPrefix(configService.get('app.apiPrefix'));

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(5000);
}
bootstrap();
