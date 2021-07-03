var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MusicManager = (function () {
    function MusicManager() {
        this.position = 0;
        this.flag = false;
        this.rotate = 0;
        this.rotateFlag = false;
        this.sound = RES.getRes("魏小涵 - 秦时明月-飞雪玉花_mp3");
        // console.log(this.sound);
    }
    Object.defineProperty(MusicManager, "Instance", {
        //创建一个实例
        get: function () {
            if (MusicManager.musicManager == null) {
                MusicManager.musicManager = new MusicManager();
            }
            return MusicManager.musicManager;
        },
        enumerable: true,
        configurable: true
    });
    MusicManager.prototype.onTouch = function () {
        var sound = this.sound;
        var channel = this.soundChannel;
        if (this.position >= this.sound.length - 3) {
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
        channel = sound.play(this.position, -1);
        // this.position = channel.position;
        // console.log(this.position);
        //Egret 3.0.4 新增获取音频长度 length 属性。
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
        //保存soundChannel对象
        this.soundChannel = channel;
        this.flag = true;
    };
    MusicManager.prototype.onSoundComplete = function (event) {
        this.position = 0;
        this.soundChannel = null;
        this.onTouch();
        console.log("onSoundComplete");
    };
    MusicManager.prototype.setFlag = function () {
        if (this.flag == false) {
            this.onTouch();
        }
        this.flag = true;
    };
    MusicManager.prototype.setRotate = function () {
        this.rotate += 3;
    };
    MusicManager.prototype.getRotate = function () {
        return this.rotate;
    };
    return MusicManager;
}());
__reflect(MusicManager.prototype, "MusicManager");
