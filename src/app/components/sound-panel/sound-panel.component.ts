import { Component, OnInit, Input } from '@angular/core';
import { SoundService } from 'src/app/services/sound.service';

@Component({
  selector: 'sound-panel',
  templateUrl: './sound-panel.component.html',
  styleUrls: ['./sound-panel.component.scss']
})
export class SoundPanelComponent implements OnInit {

  @Input() sound: SoundService;

  constructor() { }

  ngOnInit() {
  }
}
