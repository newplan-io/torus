import { Howl, Howler } from 'howler';
import { LocalStorage } from './storage.service';

export class SoundService {
  private readonly _sound: Howl;
  private _playing: boolean = false;
  private _volume: number = 50;

  constructor(private readonly _src: string, readonly icon: string) {
    const { volume } = LocalStorage.getJSON<SoundServiceConfig>(this._src, {
      playing: false,
      volume: 50
    });

    this._volume = volume;

    this._sound = new Howl({
      src: this._src,
      loop: true,
      volume: this._volume / 100
    });
  }

  public play(): void {
    this._sound.play();
    this._playing = true;
    this.save();
  }

  public stop(): void {
    this._sound.stop();
    this._playing = false;
    this.save();
  }

  public get playing(): boolean {
    return this._playing;
  }

  public get volume(): number {
    return this._volume;
  }

  public set volume(volume: number) {
    this._volume = volume;
    this._sound.volume(volume / 100);
    this.save();
  }

  public save() {
    LocalStorage.setJSON<SoundServiceConfig>(this._src, this.config);
  }

  public get config(): SoundServiceConfig {
    return {
      playing: this._playing,
      volume: this._volume
    }
  }
}

export interface SoundServiceConfig {
  playing: boolean;
  volume: number;
}