class howplay extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'howplay' });
    }

    preload() {

        // Images
         this.load.image("HOWplay", "asset/htp.jpg");
    }

    create () {
    const howplay = this.add.image(0, 0, 'HOWplay');

const scaleX = this.game.config.width / howplay.width;
const scaleY = this.game.config.height / howplay.height;
howplay.setScale(scaleX, scaleY);

howplay.setOrigin(0.5);
howplay.setPosition(this.game.config.width / 2, this.game.config.height /2);

        console.log("This is howplay spacebar");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
            console.log("Spacebar pressed, go to level1SCN");
            this.scene.start("level1SCN"); 
        }, this );

    }

}
