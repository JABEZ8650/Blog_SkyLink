import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    Signin(data: SigninDto): Promise<{
        token: string;
    }>;
    Signup(data: SignupDto): Promise<{
        token: string;
    }>;
}
