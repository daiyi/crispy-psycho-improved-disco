import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.load.tilemap('map', './assets/tilemaps/catastrophi_level2.csv', null, Phaser.Tilemap.CSV)
    this.load.image('tiles', './assets/tilemaps/catastrophi_tiles_16.png')
    this.load.spritesheet('player', './assets/sprites/spaceman.png', 16, 16)
  }

  create () {
    this.state.start('Game')
  }

}
