class AnimationScence03 extends Scene {

  // 这里是开始场景
  private btnStart: eui.Button;
  private musicBtn: eui.Button;
  private tip: eui.Button;
  private data: any;
  private texture: egret.Texture;
  constructor() {
    super();
   
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    this.skinName = "resource/eui_skins/myskins/Scence03.exml";
  }
  protected createChildren() {
    super.createChildren();
    this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
    this.init();
  }

  private onAddToStage() {
    this.musicBtn.rotation = MusicManager.Instance.getRotate();

    this.data = RES.getRes("myss2_json");
    this.texture = RES.getRes("myss2_png");
    // 创建动画工厂
    let mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(this.data, this.texture);
    let mc: egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("myss2"));
    // this.mc = Common.createMovieClip("myss");
    this.addChild(mc);

    mc.x = this.stage.stageWidth / 2 - mc.width / 2;
    mc.y = this.stage.stageHeight / 2 - mc.height / 2;
    // 第一个参数为1，从第一帧开始播放，参数二为负数，无线循环
    mc.gotoAndPlay(1, -1);

  }
  private init(): void {
    console.log(21);

    this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
    this.musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMusic, this);
    this.tip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toTip, this);
  }
  private onStart(e: egret.TouchEvent): void {
    console.log(111);
    MusicManager.Instance.setFlag();
    SceneManager.Instance.changeScene(new Test());
  }

  // 播放音乐
  private onMusic(e: egret.TouchEvent): void {
    MusicManager.Instance.onTouch();
  }
  // 弹窗
  private toTip(): void {
    SceneManager.Instance.pushScene(new Tip());
  }
  private rotateLogo() {
   
    // 每次都更新旋转角度，保存到MusicManager中
    if (this.musicBtn) {
      this.musicBtn.rotation = MusicManager.Instance.getRotate();
      
      if (MusicManager.Instance.rotateFlag == false) {
        MusicManager.Instance.setRotate();
      }
      if (MusicManager.Instance.rotateFlag == true) {
        MusicManager.Instance.setRotate();
      }

    }

  }
}