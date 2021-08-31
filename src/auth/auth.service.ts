import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

export enum Provider
{
    GOOGLE = 'google'
}

@Injectable()
export class AuthService {
    // Use Env vars
    private readonly JWT_SECRET_KEY = 'IAmProudToBeAMuslim!Alhamdulillah!!'; // <- replace this with your secret key

    constructor(/*private readonly usersService: UsersService*/) {
    };

    async validateOAuthLogin(profile: any, provider: Provider): Promise<string>
    {
        try 
        {   
            const thirdPartyId = profile.id;
            // You can add some registration logic here, 
            // to register the user using their thirdPartyId (in this case their googleId)
            // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);
            
            // if (!user)
                // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);
            
            const payload = {
                thirdPartyId,
                provider,
                profile: profile._json,
                roles: ['ADMIN'] // For the time being I am adding this roles here. But it may be come from databases depending on the user accessability
            }

            const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
            return jwt;
        }
        catch (err)
        {
            throw new InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }

}