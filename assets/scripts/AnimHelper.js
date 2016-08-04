cc.Class({
    extends: cc.Component,

    properties: {
        anim: cc.Animation
    },

    init (main) {
        this.main = main;
    },

    pause () {
        this.anim.pause();
        this.main.step();
    },

    resume () {
        this.anim.resume();
    }
});
