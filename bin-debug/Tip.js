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
var Tip = (function (_super) {
    __extends(Tip, _super);
    function Tip() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskins/Tip.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Tip.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Tip.prototype.onAddToStage = function () {
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeWindow, this);
    };
    Tip.prototype.closeWindow = function () {
        console.log(11);
        SceneManager.Instance.popScene();
    };
    return Tip;
}(Scene));
__reflect(Tip.prototype, "Tip");
