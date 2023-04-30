import { Route } from "@angular/router";

export const APP_ROUTE:Route[]= [

    {path: 'login', loadChildren: () => import('@nx-auth-demo/back-office/auth/feature/shell').then(mod => mod.Auth_Route)},
    {path: 'customer-management', loadChildren: () => import('@nx-auth-demo/back-office/customer-manager/feature/shell').then(mod => mod.CUSTOMER_Route)},
    {path:'', pathMatch:'full',redirectTo:'login'}

];