var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
    }
    Object.defineProperty(SceneManager, "Instance", {
        //创建一个实例
        get: function () {
            if (SceneManager.sceneManager == null) {
                SceneManager.sceneManager = new SceneManager();
            }
            return SceneManager.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    //切换场景
    SceneManager.prototype.changeScene = function (s) {
        if (this.currentScene) {
            this.rootLayer.removeChild(this.currentScene);
            this.currentScene = null;
        }
        this.rootLayer.addChild(s);
        this.currentScene = s;
    };
    // 弹出场景层
    SceneManager.prototype.pushScene = function (s) {
        this.popScene();
        if (!this.pop_scene) {
            this.rootLayer.addChild(s);
            this.pop_scene = s;
        }
    };
    //关闭场景层
    SceneManager.prototype.popScene = function () {
        if (this.pop_scene) {
            this.rootLayer.removeChild(this.pop_scene);
            this.pop_scene = null;
        }
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
