class Common{
  public constructor(){

  }
  public static createMovieClip(name):egret.MovieClip{
    let data = RES.getRes(name+"_json");
    let txtr = RES.getRes(name+"_png");
    let mcFanctory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
 let mc:egret.MovieClip = new egret.MovieClip(mcFanctory.generateMovieClipData(name));
 return mc;
  }
  public static getStage():egret.Stage{
    return egret.MainContext.instance.stage;
  }
}