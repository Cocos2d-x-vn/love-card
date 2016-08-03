cc.Class({
    extends: cc.Component,

    properties: {
      anims: [cc.Animation],
      arrow: cc.Animation
    },

    // use this for initialization
    onLoad: function () {
        this.lastTouchLoc = cc.p(0, 0);
        this.node.on('touchstart', this.touchStartListener, this);
        this.node.on('touchend', this.pushUpListener, this);
        console.log('yoooo!');
    },

    start () {
        // this.anim.play('love-card');
    },

    step () {
        this.anim.pause();
        this.arrow.play('arrow-blink');
    },

    touchStartListener (event) {
        this.lastTouchLoc = event.getLocation();
    },

    pushUpListener (event) {
        var touchLoc = event.getLocation();
        var delta = cc.pSub(touchLoc, this.lastTouchLoc);
        // var delta = touchLoc.subSelf(this.lastTouchLoc);
        cc.log('delta: ' + delta);
        this.anims[0].node.active = true;
        this.anims[0].play();
        this.arrow.stop();
        this.arrow.node.opacity = 0;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
