import { Howl, Howler } from 'howler';
import { empty } from '../libraries/utils/empty';

export class SoundService {
  private readonly _sound: Howl;
  private _playing: boolean = false;

  constructor(readonly src: string, readonly icon: string, private _volume: number = 50) {
    this._sound = new Howl({
      src,
      loop: true,
      volume: this._volume / 100
    });
  }

  public play(): void {
    console.log(`Starting "${this.src}"`);
    this._sound.play();
    this._playing = true;
  }

  public stop(): void {
    console.log(`Stopping "${this.src}"`);
    this._sound.stop();
    this._playing = false;
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
  }
}