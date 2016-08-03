cc.Class({
    extends: cc.Component,

    properties: {
        child2Freeze: cc.Node,
    },

    editor: CC_EDITOR && {
        executeInEditMode: true,
    },

    // use this for initialization
    onLoad: function () {

    },

    onEnable () {
        this.node.on('position-changed', this.refreshChildPos, this);
    },

    onDisable () {
        this.node.off('position-changed', this.refreshChildPos, this);
    },

    refreshChildPos (event) {
        if (!this.child2Freeze) return;
        if (this._lastPos === undefined) {
            this._lastPos = this.node.position;
        }
        var deltaX = this.node.x - this._lastPos.x;
        var deltaY = this.node.y - this._lastPos.y;
        var newChildPos = cc.p(this.child2Freeze.position.x - deltaX, this.child2Freeze.position.y - deltaY);
        this.child2Freeze.position = newChildPos;
        this._lastPos = this.node.position;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
