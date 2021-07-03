var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var QuestionManager = (function () {
    function QuestionManager() {
        this.items = [];
        this.score = 0;
        this.wrong = 0;
        this.no = 0;
        this.items = RES.getRes("questions_json_json");
        console.log(this.items);
    }
    Object.defineProperty(QuestionManager, "Instance", {
        //创建一个实例
        get: function () {
            if (QuestionManager.questionManager == null) {
                QuestionManager.questionManager = new QuestionManager();
            }
            return QuestionManager.questionManager;
        },
        enumerable: true,
        configurable: true
    });
    QuestionManager.prototype.GetQuestion = function () {
        return this.items;
    };
    QuestionManager.prototype.GetScore = function () {
        return {
            score: this.score,
            wrong: this.wrong,
            no: this.no
        };
    };
    QuestionManager.prototype.SetScore = function (score, wrong, no) {
        this.score = score;
        this.wrong = wrong;
        this.no = no;
    };
    QuestionManager.prototype.reset = function () {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].result = "";
        }
    };
    return QuestionManager;
}());
__reflect(QuestionManager.prototype, "QuestionManager");
