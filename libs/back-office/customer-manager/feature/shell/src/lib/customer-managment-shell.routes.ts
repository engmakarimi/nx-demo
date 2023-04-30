import { MainComponent } from '../../../main/src/lib/main.component';
import { Route } from '@angular/router';

export const CUSTOMER_Route :Route[] = [
    {
      path: '',
      component:MainComponent
      
    //   providers: [
    //     // alternative to `StoreModule.forFeature`
    //     registerStoreFeature(musiciansFeature),
    //     // alternative to `EffectsModule.feature`
    //     registerFeatureEffects([MusiciansApiEffects]),
    //   ],
    },
  ] ;