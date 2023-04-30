import { Route } from "@angular/router";


export const Auth_Route: Route[] = [
    {
      path: '',
      children: [
        {
          path: '',
          loadComponent: ()=> import('@nx-auth-demo/back-office/auth/feature/login').then( c => c.LoginComponent) ,
          title: 'login'
        },
       
      ],
    //   providers: [
    //     // alternative to `StoreModule.forFeature`
    //     registerStoreFeature(musiciansFeature),
    //     // alternative to `EffectsModule.feature`
    //     registerFeatureEffects([MusiciansApiEffects]),
    //   ],
    },
  ];