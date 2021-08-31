import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  // imports: [
  //   PassportModule.register({
  //     defaultStrategy: 'jwt',
  //     property: 'user',
  //     session: false,
  //   }),
  //   JwtModule.register({
  //     secret: "IAmProudToBeAMuslim!Alhamdulillah!!",
  //     signOptions: { expiresIn: '7d' },
  //   }),
  // ],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy
  ]
})
export class AuthModule {}
