import { Component } from '@angular/core';
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly sounds: SoundService[] = [
    new SoundService('assets/sounds/rain_light.webm', 'rainy'),
    new SoundService('assets/sounds/rain_thunders.webm', 'thunderstorm')
  ];

  constructor() {
  }
}
