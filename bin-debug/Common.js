var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common = (function () {
    function Common() {
    }
    Common.createMovieClip = function (name) {
        var data = RES.getRes(name + "_json");
        var txtr = RES.getRes(name + "_png");
        var mcFanctory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFanctory.generateMovieClipData(name));
        return mc;
    };
    Common.getStage = function () {
        return egret.MainContext.instance.stage;
    };
    return Common;
}());
__reflect(Common.prototype, "Common");
