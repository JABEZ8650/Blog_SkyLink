import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { User } from 'src/models/user.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userModel;
    private jwtService;
    constructor(userModel: typeof User, jwtService: JwtService);
    signin(data: SigninDto): Promise<{
        token: string;
    }>;
    signup(data: SignupDto): Promise<{
        token: string;
    }>;
}
