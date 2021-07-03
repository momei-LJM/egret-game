class EndScene extends Scene {
  private score: eui.Label;
  private wrong: eui.Label;
  private no: eui.Label;
  private btnReStart: eui.Button;
  private music: eui.Button;
  private historyScore: eui.Label;
  constructor() {
    super();
    this.skinName = "resource/eui_skins/myskins/EndScene.exml";
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }
  protected createChildren() {
    super.createChildren();
    this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
  }
  private onAddToStage() {
    // console.log(QuestionManager.Instance.GetScore().toString());
    // 初始化音乐按钮的开始角度，继承前一个页面结束的旋转角度
    this.music.rotation = MusicManager.Instance.getRotate();
    // 将相应信息写到ui中
    this.score.text = QuestionManager.Instance.GetScore().score.toString();
    this.wrong.text = QuestionManager.Instance.GetScore().wrong.toString();
    this.no.text = QuestionManager.Instance.GetScore().no.toString();
    this.historyScore.text = egret.localStorage.getItem("localScore");
    // 监听重新开始
    this.btnReStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reStart, this);
    this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
      MusicManager.Instance.onTouch();
    }, this);
  }
  // 重新开始按钮
  private reStart(): void {
    // Test.reset();
    // SceneManager.Instance.changeScene(new AnimationScence03());
    SceneManager.Instance.changeScene(Main.beginScence);
    MusicManager.Instance.rotateFlag = true;
  }
  private rotateLogo() {

    if (this.music) {
      this.music.rotation = MusicManager.Instance.getRotate();
      // MusicManager.Instance.setRotate();
    }

  }
}