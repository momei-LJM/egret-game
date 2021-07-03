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
var Test = (function (_super) {
    __extends(Test, _super);
    // private reset():void{
    //   this.itemA.selected = false;
    //   this.itemB.selected = false;
    //   this.itemC.selected = false;
    //   this.itemD.selected = false;
    // }
    function Test() {
        var _this = _super.call(this) || this;
        _this.index = 0;
        _this.skinName = "resource/eui_skins/myskins/test_exam.exml";
        return _this;
    }
    Test.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Test.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.init();
    };
    Test.prototype.init = function () {
        var _this = this;
        // 重新开始 的 重置
        // 初始化音乐按钮的开始角度
        this.music.rotation = MusicManager.Instance.getRotate();
        QuestionManager.Instance.reset();
        this.items = QuestionManager.Instance.GetQuestion();
        // console.log(this.items[this.index].a);
        this.showQuestion();
        this.btnPre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPreClick, this);
        this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
        this.itemA.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.items[_this.index].result = _this.itemA.value;
        }, this);
        this.itemB.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.items[_this.index].result = _this.itemB.value;
        }, this);
        this.itemC.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.items[_this.index].result = _this.itemC.value;
        }, this);
        this.itemD.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.items[_this.index].result = _this.itemD.value;
        }, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            MusicManager.Instance.onTouch();
        }, this);
        // console.log(this.items);
    };
    Test.prototype.onPreClick = function (e) {
        this.btnPre.enabled = true;
        this.btnNext.enabled = true;
        if (this.index > 0) {
            this.index--;
        }
        else {
            this.btnPre.enabled = false;
        }
        this.showQuestion();
    };
    Test.prototype.onNextClick = function (e) {
        this.btnPre.enabled = true;
        this.btnNext.enabled = true;
        if (this.index < this.items.length - 1) {
            this.index++;
            console.log(this.index);
            console.log(this.items.length);
            ;
        }
        else {
            this.btnNext.enabled = false;
            this.endTest();
            SceneManager.Instance.changeScene(new EndScene());
        }
        this.showQuestion();
    };
    Test.prototype.showQuestion = function () {
        this.itemLabel.text = this.items[this.index].title;
        this.itemA.label = this.items[this.index].a;
        this.itemB.label = this.items[this.index].b;
        this.itemC.label = this.items[this.index].c;
        this.itemD.label = this.items[this.index].d;
        this.itemA.selected = false;
        this.itemB.selected = false;
        this.itemC.selected = false;
        this.itemD.selected = false;
        if (this.items[this.index].result == "A") {
            this.itemA.selected = true;
        }
        else if (this.items[this.index].result == "B") {
            this.itemB.selected = true;
        }
        else if (this.items[this.index].result == "C") {
            this.itemC.selected = true;
        }
        else if (this.items[this.index].result == "D") {
            this.itemD.selected = true;
        }
    };
    Test.prototype.onAddToStage = function (event) {
        console.log("aaa");
    };
    Test.prototype.endTest = function () {
        this.correct = 0;
        this.wrong = 0;
        this.no = 0;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].result == "") {
                this.no++;
            }
            else if (this.items[i].result == this.items[i].answer) {
                this.correct++;
            }
            else if (this.items[i].result != this.items[i].answer) {
                this.wrong++;
            }
        }
        var localScore = egret.localStorage.getItem("localScore");
        if (!localScore) {
            egret.localStorage.setItem("localScore", "0");
        }
        if (Number(localScore) < this.correct) {
            localScore = this.correct.toString();
            egret.localStorage.setItem("localScore", localScore);
        }
        // this.historyScore.text = localScore;
        QuestionManager.Instance.SetScore(this.correct, this.wrong, this.no);
        // this.reset();
    };
    Test.prototype.rotateLogo = function () {
        if (this.music) {
            this.music.rotation = MusicManager.Instance.getRotate();
            // MusicManager.Instance.setRotate();
        }
    };
    return Test;
}(Scene));
__reflect(Test.prototype, "Test");
