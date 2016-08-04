cc.Class({
    extends: cc.Component,

    properties: {
        anim: cc.Animation
    },

    init (main) {
        this.main = main;
    },

    pause (isLast) {
        this.anim.pause();
        this.main.step(isLast);
    },

    resume () {
        this.anim.resume();
    }
});
