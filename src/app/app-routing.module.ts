import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductsComponent } from "./components/products/products.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";

const routes: Routes = [
    {path:'', redirectTo:'home' , pathMatch:'full'},
    {path:'product',component:ProductsComponent},
    {path:'cart',component:CartComponent},
    {path:'checkout',component:CheckoutComponent},
    {path: 'login',component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path: 'about',component:AboutComponent},
    {path: 'contact',component:ContactUsComponent},
    {path: 'feedback',component:FeedbackComponent},
    {path: 'editProfile' ,component:EditProfileComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

