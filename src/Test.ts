class Test extends Scene {
  // 这里是答题场景
  private items: any;
  private itemLabel: eui.Label;
  private itemA: eui.RadioButton;
  private itemB: eui.RadioButton;
  private itemC: eui.RadioButton;
  private itemD: eui.RadioButton;
  private btnPre: eui.Button;
  private btnNext: eui.Button;
  private index: number = 0;
  private wrong: number;
  private correct: number;
  private no: number;
  private music: eui.Button;


  public constructor() {
    super();
    this.skinName = "resource/eui_skins/myskins/test_exam.exml";
  }
  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }
  protected childrenCreated(): void {
    super.childrenCreated();
    this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    this.init();
  }
  private init(): void {
    // 重新开始 的 重置
    // 初始化音乐按钮的开始角度
    this.music.rotation = MusicManager.Instance.getRotate();
    QuestionManager.Instance.reset();
    this.items = QuestionManager.Instance.GetQuestion();
    // console.log(this.items[this.index].a);


    this.showQuestion();
    // 监听上一题按钮
    this.btnPre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPreClick, this);
    // 监听下一题按钮
    this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
    // 监听选项按钮
    this.itemA.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
      this.items[this.index].result = this.itemA.value;
    }, this);
    this.itemB.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
      this.items[this.index].result = this.itemB.value;
    }, this);
    this.itemC.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
      this.items[this.index].result = this.itemC.value;
    }, this);
    this.itemD.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
      this.items[this.index].result = this.itemD.value;
    }, this);

    this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
      MusicManager.Instance.onTouch();
    }, this);
    // console.log(this.items);
  }
  private onPreClick(e: egret.TouchEvent): void {
    this.btnPre.enabled = true;
    this.btnNext.enabled = true;
    if (this.index > 0) {
      this.index--;
    } else {
      this.btnPre.enabled = false;
    }
    this.showQuestion();
  }
  private onNextClick(e: egret.TouchEvent): void {
    this.btnPre.enabled = true;
    this.btnNext.enabled = true;
    if (this.index < this.items.length - 1) {
      this.index++;
      console.log(this.index)
      console.log(this.items.length);
      ;

    } else {
      this.btnNext.enabled = false;
      this.endTest();
      SceneManager.Instance.changeScene(new EndScene());
    }
    this.showQuestion();
  }
  private showQuestion(): void {
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
    } else if (this.items[this.index].result == "B") {
      this.itemB.selected = true;
    } else if (this.items[this.index].result == "C") {
      this.itemC.selected = true;
    } else if (this.items[this.index].result == "D") {
      this.itemD.selected = true;
    }
  }
  private onAddToStage(event: egret.Event) {
    console.log("aaa");
  }
  private endTest(): void {
    this.correct = 0;
    this.wrong = 0;
    this.no = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].result == "") {
        this.no++;
      } else if (this.items[i].result == this.items[i].answer) {
        this.correct++;
      } else if (this.items[i].result != this.items[i].answer) {
        this.wrong++;
      }

    }

    let localScore = egret.localStorage.getItem("localScore");
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
  }
  private rotateLogo() {

    if (this.music) {

      this.music.rotation = MusicManager.Instance.getRotate();
      // MusicManager.Instance.setRotate();
    }

  }
}
