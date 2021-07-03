//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;
    private shape: egret.Shape;


    private timeBar: egret.Shape;
    private timeBarBack: egret.Shape;
    // private timeBarWidth:number;
    // private playTime:number;
    private timeCell: number;

    private createView(): void {
        this.shape = new egret.Shape();
        this.shape.graphics.beginFill(0xb3ffff, 1);
        this.shape.graphics.drawRect(0, 0, 1000, 3000);
        this.addChild(this.shape);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.x = 50;
        this.textField.width = 480;
        this.textField.height = 100;
        // this.textField.anchorOffsetX = 240;
        this.textField.textAlign = "center";
        this.textField.textColor = 0xFF0000;

        this.timeBar = new egret.Shape();
        this.timeBarBack = new egret.Shape();
        // this.timeBarWidth = 0;
        // this.playTime = 5;
        // this.timeCell = this.timeBarWidth/(this.playTime*60);
        this.timeBarBack.graphics.lineStyle(30, 0xffcccc, 0.3, true);
        this.timeBarBack.graphics.moveTo(150, 400);
        this.timeBarBack.graphics.lineTo(450, 400);

        this.addChild(this.timeBar);
        this.addChild(this.timeBarBack);

        // this.addEventListener(egret.Event.ENTER_FRAME,this.animate,this);
    }

    public onProgress(current: number, total: number): void {
        // 图形绘制进度条
        this.textField.text = `题目火速加载中...${current}/${total}`;

        this.timeBar.graphics.clear();
        this.timeBar.graphics.lineStyle(30, 0xFF0000, 1, true);
        this.timeBar.graphics.moveTo(150, 400);
        this.timeBar.graphics.lineTo(150 + 300 * (current / total), 400);
        //   this.timeBarWidth +=this.timeCell;
        if (current==total) {
            this.timeBar.graphics.clear();
            this.shape.graphics.clear();
            this.textField.text = '';
            this.timeBarBack.graphics.clear();
        }

    }
}
