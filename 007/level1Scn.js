class level1SCN extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'level1SCN' });
    }

    preload() {

        // Images
         this.load.image("lvlSCN", "asset/level1.jpg");
    }

    create () {
    const howplay = this.add.image(0, 0, 'lvlSCN');

const scaleX = this.game.config.width / howplay.width;
const scaleY = this.game.config.height / howplay.height;
howplay.setScale(scaleX, scaleY);

howplay.setOrigin(0.5);
howplay.setPosition(this.game.config.width / 2, this.game.config.height /2);

        console.log("This is howplay spacebar");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
            console.log("Spacebar pressed, go to level1");
            this.scene.start("level1"); 
        }, this );

    }

}
