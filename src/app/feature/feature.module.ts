import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [
  
    
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureModule { }
