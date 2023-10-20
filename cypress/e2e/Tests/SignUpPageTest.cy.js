import { OpenUrl } from "../Base/OpenUrl";
import { SignUpPage } from "../Page/SignUpPage";
import { CheckTitle } from "../Utilities/checkTitle";

const url = new OpenUrl();
const signUp = new SignUpPage();
const  title = new CheckTitle();

it('SignUp', ()=>{
    url.visit('https://wedevs.com/');
    signUp.myAccount();
    title.getTitle('My Account - weDevs');
    signUp.signUpForm();
})
