class MusicManager {
  private static musicManager: MusicManager;//静态属性，可以直接用类名访问
  private sound: egret.Sound;
  private soundChannel: egret.SoundChannel;
  private position:number = 0;
  private flag:boolean = false;
  private rotate:number = 0;
  public rotateFlag:boolean = false;
  //创建一个实例
  public static get Instance() {
    if (MusicManager.musicManager == null) {
      MusicManager.musicManager = new MusicManager();
    }
    return MusicManager.musicManager;
  }

  public constructor() {
    // 加载文件
    this.sound = RES.getRes("魏小涵 - 秦时明月-飞雪玉花_mp3");
    
    // console.log(this.sound);
  }

  public onTouch() {
    let sound = this.sound;
    let channel: egret.SoundChannel = this.soundChannel;
    if (this.position >=this.sound.length-3) {
      this.position = 0;
      this.soundChannel = null;
    }
    if (channel) {
      //调用soundChannel对象的stop方法停止播放音频
      // console.log(channel);
      this.position = channel.position;
      console.log(channel.position);
      console.log(sound.length);
      
      channel.stop();
      this.soundChannel = null;
      
      return;
    }
    //使用SoundChannel播放音频
    channel = sound.play(this.position,-1);
    // this.position = channel.position;
    // console.log(this.position);
    
    //Egret 3.0.4 新增获取音频长度 length 属性。
    channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);

    //保存soundChannel对象
    this.soundChannel = channel;
    this.flag = true;
  }

  private onSoundComplete(event:egret.Event):void {
    this.position = 0;
    this.soundChannel =null;
    this.onTouch();
    console.log("onSoundComplete");
}
// 控制第一次播放和跳转的过程
public setFlag():void{
  if (this.flag==false) {
    this.onTouch();
  }
  this.flag = true;

}
// 更新音乐图标的旋转角度
public setRotate():void{
  this.rotate +=3;
}

// 读取旋转角度
public getRotate():number{
  return this.rotate;
}




}