import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from 'src/config/app.config';
import authConfig from 'src/config/auth.config';
import googleConfig from 'src/config/google.config';
import fileConfig from 'src/config/file.config';
import { PrismaService } from 'src/prisma.service';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authConfig, googleConfig, fileConfig],
      envFilePath: [`.env.${process.env.NODE_ENV || 'production'}`],
    }),
    AuthModule,
    BookmarkModule,
    UserModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
