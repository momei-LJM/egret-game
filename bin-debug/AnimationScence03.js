var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var AnimationScence03 = (function (_super) {
    __extends(AnimationScence03, _super);
    function AnimationScence03() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskins/Scence03.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    AnimationScence03.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
        this.init();
    };
    AnimationScence03.prototype.onAddToStage = function () {
        this.musicBtn.rotation = MusicManager.Instance.getRotate();
        // MusicManager.Instance.onTouch();
        this.data = RES.getRes("myss_json");
        this.texture = RES.getRes("myss_png");
        // 创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(this.data, this.texture);
        var mc = new egret.MovieClip(mcDataFactory.generateMovieClipData("myss"));
        // this.mc = Common.createMovieClip("myss");
        this.addChild(mc);
        mc.x = this.stage.stageWidth / 2 - mc.width / 2;
        mc.y = this.stage.stageHeight / 2 - mc.height / 2;
        // 第一个参数为1，从第一帧开始播放，参数二为负数，无线循环
        mc.gotoAndPlay(1, -1);
        // this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
        //   mc.nextFrame();
        // },this);
        // this.btnStop.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
        //   this.mc.stop();
        // },this);
        // this.btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
        //   this.mc.play();
        // },this);
    };
    AnimationScence03.prototype.init = function () {
        console.log(21);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        this.musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMusic, this);
        this.tip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toTip, this);
    };
    AnimationScence03.prototype.onStart = function (e) {
        console.log(111);
        MusicManager.Instance.setFlag();
        SceneManager.Instance.changeScene(new Test());
    };
    AnimationScence03.prototype.onMusic = function (e) {
        MusicManager.Instance.onTouch();
    };
    AnimationScence03.prototype.toTip = function () {
        SceneManager.Instance.pushScene(new Tip());
    };
    AnimationScence03.prototype.rotateLogo = function () {
        // if (this.egret_logo) {
        //   this.egret_logo.rotation += 3;
        // }
        if (this.musicBtn) {
            this.musicBtn.rotation = MusicManager.Instance.getRotate();
            if (MusicManager.Instance.rotateFlag == false) {
                MusicManager.Instance.setRotate();
            }
            if (MusicManager.Instance.rotateFlag == true) {
                MusicManager.Instance.setRotate();
            }
        }
    };
    return AnimationScence03;
}(Scene));
__reflect(AnimationScence03.prototype, "AnimationScence03");
