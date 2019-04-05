import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SoundPanelComponent } from './sound-panel/sound-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    SoundPanelComponent
  ],
  exports: [
    SoundPanelComponent
  ]
})
export class ComponentsModule {}
