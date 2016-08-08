cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        spOn: cc.SpriteFrame,
        spOff: cc.SpriteFrame,
        audioSrc: cc.AudioSource
    },

    // use this for initialization
    onLoad () {
        this.musicOn = true;
        this.sprite.spriteFrame = this.spOn;
        this.node.on('touchstart', this.toggleMusic, this);
    },

    toggleMusic () {
        this.musicOn = !this.musicOn;
        if (this.musicOn) {
            this.sprite.spriteFrame = this.spOn;
            this.audioSrc.audio.play();
        } else {
            this.sprite.spriteFrame = this.spOff;
            this.audioSrc.audio.pause();
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
