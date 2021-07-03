class SceneManager{
	private static sceneManager:SceneManager;//静态属性，可以直接用类名访问
	public rootLayer:eui.UILayer;//起始场景
    private currentScene:Scene;//需要显示的场景
    private pop_scene:Scene;//弹出场景层
	//创建一个实例
	public static get Instance(){
        if( SceneManager.sceneManager == null){
            SceneManager.sceneManager = new SceneManager();
        }
        return SceneManager.sceneManager;
    }
	public constructor() {
	}
    //切换场景
    public changeScene(s:Scene){
        if(this.currentScene){
           this.rootLayer.removeChild(this.currentScene);
            this.currentScene = null;
        }
        this.rootLayer.addChild(s);
        this.currentScene = s;
    }
	// 弹出场景层
	public pushScene(s:Scene){
        this.popScene();
        if(!this.pop_scene){
            this.rootLayer.addChild(s);
            this.pop_scene = s;
        }
    }
    //关闭场景层
    public popScene(){
        if(this.pop_scene){
            this.rootLayer.removeChild(this.pop_scene);
            this.pop_scene = null;
        }
    }
}