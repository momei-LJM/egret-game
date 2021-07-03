class QuestionManager{
    private static questionManager:QuestionManager;//静态属性，可以直接用类名访问
    private items:Array<QuestionItem> = [];
    private score:number=0;
    private wrong:number =0;
    private no:number = 0;
	//创建一个实例
	public static get Instance(){
        if( QuestionManager.questionManager == null){
            QuestionManager.questionManager = new QuestionManager();
        }
        return QuestionManager.questionManager;
    }

	public constructor() {
        this.items = RES.getRes("questions_json_json");
        console.log(this.items);
	}

    public GetQuestion():Array<QuestionItem>{
        return this.items;
    }

    public GetScore():any{
        return {
            score:this.score,
            wrong:this.wrong,
            no:this.no
        };
    }

    public SetScore(score:number,wrong:number,no:number):void{
        this.score=score;
        this.wrong = wrong;
        this.no = no;
    }
    public reset():void{
        for (let i = 0; i < this.items.length; i++) {
           this.items[i].result = "";
            
        }
    }
}