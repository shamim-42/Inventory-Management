import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      //   // Use Env vars here
      clientID:
        '275497721443-1pajigbb8p7afg4505rh3h5dss5340lh.apps.googleusercontent.com', // <- Replace this with your client id
      clientSecret: 'ybox0BUH5IdYwu20FdkJ1fzw', // <- Replace this with your client secret
      callbackURL: 'http://localhost:3000/auth/redirect',

      passReqToCallback: true,
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: Function,
  ) {
    try {
      const jwt: string = await this.authService.validateOAuthLogin(
        profile,
        Provider.GOOGLE,
      );
      const user = {
        jwt,
      };

      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
