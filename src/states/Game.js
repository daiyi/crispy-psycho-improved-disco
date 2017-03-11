/* globals __DEV__ */
import Phaser from 'phaser'
import Spaceman from '../sprites/Spaceman'

// this is the example I used!
// https://phaser.io/examples/v2/tilemaps/csv-map-collide

export default class extends Phaser.State {

  init () {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.help = this.add.text(16, 16, 'Arrows to move', { font: '14px Arial', fill: '#ffffff' });
    this.help.fixedToCamera = true;

    //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
    this.map = this.add.tilemap('map', 16, 16);

    //  Now add in the tileset
    this.map.addTilesetImage('tiles');

    //  Create our layer
    this.layer = this.map.createLayer(0);

    //  Resize the world
    this.layer.resizeWorld();

    //  This isn't totally accurate, but it'll do for now
    this.map.setCollisionBetween(54, 83);

    //  Un-comment this on to see the collision tiles
    // this.layer.debug = true;
  }

  preload () {
    this.player = new Spaceman({
      x: 48,
      y: 48,
      asset: 'player'
    })
    this.game.add.existing(this.player)
    this.camera.follow(this.player);
  }

  create () {

  }

  update() {
    this.game.physics.arcade.collide(this.player, this.layer);
    this.player.update(this.cursors)
  }

  render () {
    if (__DEV__) {
      // uncomment to show sprite debug info
      this.game.debug.spriteInfo(this.player, 450, 32)
    }
  }
}
