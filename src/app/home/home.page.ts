import { Component } from '@angular/core';
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly sounds: SoundService[] = [
    new SoundService('assets/sounds/forest_birds.webm', 'assets/icon/ForestBirds.svg'),
    new SoundService('assets/sounds/forest_creek.webm', 'assets/icon/ForestCreek.svg'),
    new SoundService('assets/sounds/forest_fire.webm', 'assets/icon/ForestFire.svg'),
    new SoundService('assets/sounds/forest_forest.webm', 'assets/icon/ForestForest.svg'),
    new SoundService('assets/sounds/forest_frogs.webm', 'assets/icon/ForestFrogs.svg'),
    new SoundService('assets/sounds/forest_grasshoppers.webm', 'assets/icon/ForestGrasshoppers.svg'),
    new SoundService('assets/sounds/forest_leaves.webm', 'assets/icon/ForestLeaves.svg'),
    new SoundService('assets/sounds/forest_waterfall.webm', 'assets/icon/ForestWaterfall.svg'),
    new SoundService('assets/sounds/forest_wind.webm', 'assets/icon/ForestWind.svg'),
    new SoundService('assets/sounds/meditation_bells.webm', 'assets/icon/MeditationBells.svg'),
    new SoundService('assets/sounds/meditation_bowl.webm', 'assets/icon/MeditationBowl.svg'),
    new SoundService('assets/sounds/meditation_flute.webm', 'assets/icon/MeditationFlute.svg'),
    new SoundService('assets/sounds/meditation_piano.webm', 'assets/icon/MeditationPiano.svg'),
    new SoundService('assets/sounds/meditation_stones.webm', 'assets/icon/MeditationStones.svg'),
    new SoundService('assets/sounds/meditation_wind_chimes.webm', 'assets/icon/MeditationWindChimes.svg'),
    new SoundService('assets/sounds/rain_light.webm', 'assets/icon/RainLight.svg'),
    new SoundService('assets/sounds/rain_normal.webm', 'assets/icon/RainNormal.svg'),
    new SoundService('assets/sounds/rain_ocean.webm', 'assets/icon/RainOcean.svg'),
    new SoundService('assets/sounds/rain_on_leaves.webm', 'assets/icon/RainOnLeaves.svg'),
    new SoundService('assets/sounds/rain_on_roof.webm', 'assets/icon/RainOnRoof.svg'),
    new SoundService('assets/sounds/rain_on_window.webm', 'assets/icon/RainOnWindow.svg'),
    new SoundService('assets/sounds/rain_thunders.webm', 'assets/icon/RainThunders.svg'),
    new SoundService('assets/sounds/rain_under_umbrella.webm', 'assets/icon/RainUnderUmbrella.svg'),
    new SoundService('assets/sounds/rain_water.webm', 'assets/icon/RainWater.svg')
  ];

  constructor() {
  }
}
