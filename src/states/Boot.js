import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
  }

  preload () {
    // game.load.tilemap(...)
    this.load.tilemap('map', './assets/tilemaps/catastrophi_level2.csv', null, Phaser.Tilemap.CSV)
    this.load.image('tiles', './assets/tilemaps/catastrophi_tiles_16.png')
    this.load.spritesheet('player', './assets/sprites/spaceman.png', 16, 16)
  }

  render () {
    this.state.start('Splash')
  }
}
