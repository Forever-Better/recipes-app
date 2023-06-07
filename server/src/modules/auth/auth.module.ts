import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaService } from 'src/prisma.service';
import { RtStrategy } from './strategies/rt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('auth.secret'),
        signOptions: { expiresIn: configService.get('auth.expires') },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    LocalStrategy,
    JwtStrategy,
    RtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
