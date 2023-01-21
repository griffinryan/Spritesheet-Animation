class ramona {
    constructor() {
        this.game = gameEngine;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/ramona.png"), 2, 0, 47.25, 67, 8, 0.02);

    };

    update() {

    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("assets/ramona.png"),0,0);
        this.animator.drawFrame(this.game.clockTick, ctx, 10, 10);
    }
}
