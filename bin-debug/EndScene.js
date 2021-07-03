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
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskins/EndScene.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    EndScene.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
    };
    EndScene.prototype.onAddToStage = function () {
        // console.log(QuestionManager.Instance.GetScore().toString());
        // 初始化音乐按钮的开始角度
        this.music.rotation = MusicManager.Instance.getRotate();
        this.score.text = QuestionManager.Instance.GetScore().score.toString();
        this.wrong.text = QuestionManager.Instance.GetScore().wrong.toString();
        this.no.text = QuestionManager.Instance.GetScore().no.toString();
        this.historyScore.text = egret.localStorage.getItem("localScore");
        this.btnReStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reStart, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            MusicManager.Instance.onTouch();
        }, this);
    };
    EndScene.prototype.reStart = function () {
        // Test.reset();
        // SceneManager.Instance.changeScene(new AnimationScence03());
        SceneManager.Instance.changeScene(Main.beginScence);
        MusicManager.Instance.rotateFlag = true;
    };
    EndScene.prototype.rotateLogo = function () {
        if (this.music) {
            this.music.rotation = MusicManager.Instance.getRotate();
            // MusicManager.Instance.setRotate();
        }
    };
    return EndScene;
}(Scene));
__reflect(EndScene.prototype, "EndScene");
