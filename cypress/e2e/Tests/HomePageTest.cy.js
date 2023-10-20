import { OpenUrl } from "../Base/OpenUrl";
import { HomePage } from "../Page/HomePage";
import { CheckTitle } from "../Utilities/checkTitle";

const url = new OpenUrl();
const  homePage = new HomePage();
const  title = new CheckTitle();

it('check Title', ()=>{
    url.visit('https://wedevs.com/');
    title.getTitle('weDevs | We Create Innovative Tools to Empower Your Business');
    homePage.elementTextvarify();
})

