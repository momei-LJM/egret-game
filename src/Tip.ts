class Tip extends Scene{
  // 这里是弹窗场景
  private close:eui.Button;
  constructor(){
    super();
    this.skinName  = "resource/eui_skins/myskins/Tip.exml";
    this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
  }
  protected createChildren(){
    super.createChildren();
   
  }
  private onAddToStage(){
    this.close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeWindow,this);
  }


  private closeWindow():void{
    console.log(11);
    
    SceneManager.Instance.popScene();
  }
}