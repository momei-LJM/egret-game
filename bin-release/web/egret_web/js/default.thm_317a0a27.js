window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.visible = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/ButtonSkin2.exml'] = window.skins.ButtonSkin2 = (function (_super) {
	__extends(ButtonSkin2, _super);
	function ButtonSkin2() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonSkin2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 464.333;
		t.scale9Grid = new egret.Rectangle(105,156,278,180);
		t.source = "btn_png";
		t.width = 464.333;
		t.x = 0.612;
		t.y = 3.477;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 21;
		t.left = 8;
		t.right = 27;
		t.size = 36.9;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	return ButtonSkin2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/close.exml'] = window.skins.close = (function (_super) {
	__extends(close, _super);
	function close() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 238.077;
		this.width = 239.249;
		this.elementsContent = [this._Rect1_i(),this._Image1_i()];
	}
	var _proto = close.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 45.018;
		t.width = 40.704;
		t.x = 21;
		t.y = 23;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 75.032;
		t.source = "关闭_png";
		t.width = 75.032;
		t.x = 6.672;
		t.y = 7.195;
		return t;
	};
	return close;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/mybutton.exml'] = window.skins.mybutton = (function (_super) {
	__extends(mybutton, _super);
	function mybutton() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 53.394;
		this.width = 110.353;
		this.elementsContent = [this._Rect1_i(),this._Image1_i()];
	}
	var _proto = mybutton.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 107;
		t.fillColor = 0x4BFFF8;
		t.height = 77.143;
		t.strokeColor = 0x000000;
		t.visible = true;
		t.width = 78.034;
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 61.937;
		t.source = "音乐_png";
		t.visible = true;
		t.width = 66.77;
		t.x = 7.613;
		t.y = 4.807;
		return t;
	};
	return mybutton;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/EndScene.exml'] = window.skins.EndScene = (function (_super) {
	__extends(EndScene, _super);
	function EndScene() {
		_super.call(this);
		this.skinParts = ["historyScore","score","no","wrong","btnReStart","music"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.historyScore_i(),this._Label1_i(),this._Label2_i(),this.score_i(),this._Label3_i(),this.no_i(),this._Label4_i(),this.wrong_i(),this.btnReStart_i(),this._Label5_i(),this.music_i()];
	}
	var _proto = EndScene.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 2254.361;
		t.width = 1240.977;
		t.x = -282.636;
		t.y = -183.826;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 1141.612;
		t.visible = true;
		t.width = 669.796;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.historyScore_i = function () {
		var t = new eui.Label();
		this.historyScore = t;
		t.text = "Label";
		t.textColor = 0xFF3737;
		t.x = 381;
		t.y = 690.383;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "历史最高";
		t.textColor = 0xFF3737;
		t.x = 202.056;
		t.y = 690.383;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "score";
		t.textColor = 0x00ACFF;
		t.x = 202;
		t.y = 465.604;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.text = "Label";
		t.textColor = 0x00ACFF;
		t.x = 381;
		t.y = 463.077;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "未答题";
		t.textColor = 0xFF3737;
		t.x = 202;
		t.y = 629.42;
		return t;
	};
	_proto.no_i = function () {
		var t = new eui.Label();
		this.no = t;
		t.text = "Label";
		t.textColor = 0xFF3737;
		t.x = 381;
		t.y = 628.893;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "答错";
		t.textColor = 0xFF4141;
		t.x = 202;
		t.y = 544.603;
		return t;
	};
	_proto.wrong_i = function () {
		var t = new eui.Label();
		this.wrong = t;
		t.text = "Label";
		t.textColor = 0xFF4040;
		t.x = 381;
		t.y = 543.076;
		return t;
	};
	_proto.btnReStart_i = function () {
		var t = new eui.Button();
		this.btnReStart = t;
		t.label = "重新开始";
		t.skinName = "skins.ButtonSkin2";
		t.x = 103.45;
		t.y = 801;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 108.696;
		t.anchorOffsetY = 47.554;
		t.fontFamily = "DFKai-SB";
		t.height = 111.522;
		t.size = 54.3;
		t.text = "你的分数";
		t.textAlign = "center";
		t.textColor = 0x49C4FF;
		t.verticalAlign = "middle";
		t.width = 233.647;
		t.x = 321;
		t.y = 278.365;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Button();
		this.music = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 39;
		t.height = 78;
		t.label = "Button";
		t.skinName = "skins.mybutton";
		t.width = 78;
		t.x = 101;
		t.y = 75;
		return t;
	};
	return EndScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/mybutton2.exml'] = window.skins.mybutton2 = (function (_super) {
	__extends(mybutton2, _super);
	function mybutton2() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 139.195;
		this.width = 141.446;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = mybutton2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 86.259;
		t.source = "疑问_png";
		t.width = 89.747;
		t.x = -0.487;
		t.y = 1.632;
		return t;
	};
	return mybutton2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/Scence01.exml'] = window.skins.Scence01 = (function (_super) {
	__extends(Scence01, _super);
	function Scence01() {
		_super.call(this);
		this.skinParts = ["egret_logo"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.egret_logo_i()];
	}
	var _proto = Scence01.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1147.377;
		t.source = "bg_jpg";
		t.width = 640.018;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.egret_logo_i = function () {
		var t = new eui.Image();
		this.egret_logo = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 77;
		t.scaleY = 1;
		t.source = "egret_icon_png";
		t.x = 276.57;
		t.y = 96.086;
		return t;
	};
	return Scence01;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/Scence02.exml'] = window.skins.Scence02 = (function (_super) {
	__extends(Scence02, _super);
	function Scence02() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = Scence02.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD05050;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Scence02;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/Scence03.exml'] = window.skins.Scence03 = (function (_super) {
	__extends(Scence03, _super);
	function Scence03() {
		_super.call(this);
		this.skinParts = ["btnStart","musicBtn","tip"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.btnStart_i(),this.musicBtn_i(),this.tip_i(),this._Label1_i()];
	}
	var _proto = Scence03.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFDFEFF;
		t.height = 2254.361;
		t.visible = true;
		t.width = 1240.977;
		t.x = -282.636;
		t.y = -183.826;
		return t;
	};
	_proto.btnStart_i = function () {
		var t = new eui.Button();
		this.btnStart = t;
		t.height = 466.987;
		t.label = "开始答题";
		t.skinName = "skins.ButtonSkin2";
		t.width = 472.119;
		t.x = 95;
		t.y = 801;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new eui.Button();
		this.musicBtn = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 39;
		t.height = 78;
		t.label = "Button";
		t.skinName = "skins.mybutton";
		t.width = 78;
		t.x = 101;
		t.y = 75;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Button();
		this.tip = t;
		t.anchorOffsetX = 45.504;
		t.anchorOffsetY = 43.383;
		t.height = 85.306;
		t.label = "Button";
		t.skinName = "skins.mybutton2";
		t.width = 86.686;
		t.x = 561.631;
		t.y = 1042.588;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.backgroundColor = 0x22ABFF;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 205.973;
		t.size = 62.9;
		t.text = "养生知识问答";
		t.textAlign = "center";
		t.textColor = 0x00ACFF;
		t.verticalAlign = "middle";
		t.width = 628.991;
		t.x = 4.498;
		t.y = 121.332;
		return t;
	};
	return Scence03;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/selet.exml'] = window.skins.selet = (function (_super) {
	__extends(selet, _super);
	function selet() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 395.259;
		this.width = 355.1;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = selet.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 392.154;
		t.scale9Grid = new egret.Rectangle(105,156,278,180);
		t.source = "btn_png";
		t.width = 344.621;
		t.x = 0.612;
		t.y = 3.477;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 13.259000000000015;
		t.left = 8;
		t.right = 31.100000000000023;
		t.size = 29;
		t.text = "11";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		t.visible = true;
		return t;
	};
	return selet;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/test_exam.exml'] = window.skins.test_exam = (function (_super) {
	__extends(test_exam, _super);
	function test_exam() {
		_super.call(this);
		this.skinParts = ["itemLabel","btnPre","btnNext","itemA","itemB","itemC","itemD","music"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.itemLabel_i(),this.btnPre_i(),this.btnNext_i(),this.itemA_i(),this.itemB_i(),this.itemC_i(),this.itemD_i(),this.music_i()];
	}
	var _proto = test_exam.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 2254.361;
		t.width = 1240.977;
		t.x = -282.636;
		t.y = -183.826;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 1141.612;
		t.visible = true;
		t.width = 669.796;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemLabel_i = function () {
		var t = new eui.Label();
		this.itemLabel = t;
		t.height = 89.141;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x00C3FF;
		t.verticalAlign = "middle";
		t.width = 390.974;
		t.x = 172.727;
		t.y = 361.532;
		return t;
	};
	_proto.btnPre_i = function () {
		var t = new eui.Button();
		this.btnPre = t;
		t.label = "上一题";
		t.skinName = "skins.selet";
		t.x = 13.824;
		t.y = 704.329;
		return t;
	};
	_proto.btnNext_i = function () {
		var t = new eui.Button();
		this.btnNext = t;
		t.label = "下一题";
		t.skinName = "skins.selet";
		t.x = 296.198;
		t.y = 704.34;
		return t;
	};
	_proto.itemA_i = function () {
		var t = new eui.RadioButton();
		this.itemA = t;
		t.label = "RadioButton";
		t.value = "A";
		t.x = 176.422;
		t.y = 485.333;
		return t;
	};
	_proto.itemB_i = function () {
		var t = new eui.RadioButton();
		this.itemB = t;
		t.label = "RadioButton";
		t.value = "B";
		t.x = 176.422;
		t.y = 552.339;
		return t;
	};
	_proto.itemC_i = function () {
		var t = new eui.RadioButton();
		this.itemC = t;
		t.label = "RadioButton";
		t.value = "C";
		t.x = 176.422;
		t.y = 618.34;
		return t;
	};
	_proto.itemD_i = function () {
		var t = new eui.RadioButton();
		this.itemD = t;
		t.label = "RadioButton";
		t.value = "D";
		t.x = 176.422;
		t.y = 685.199;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Button();
		this.music = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 39;
		t.height = 78;
		t.label = "Button";
		t.skinName = "skins.mybutton";
		t.width = 78;
		t.x = 101;
		t.y = 75;
		return t;
	};
	return test_exam;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskins/Tip.exml'] = window.skins.Tip = (function (_super) {
	__extends(Tip, _super);
	function Tip() {
		_super.call(this);
		this.skinParts = ["close"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label1_i(),this.close_i(),this._Label2_i(),this._Label3_i()];
	}
	var _proto = Tip.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.26;
		t.fillColor = 0x4B4B4B;
		t.height = 1761.77;
		t.width = 1004.092;
		t.x = -148.319;
		t.y = -111.961;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 57;
		t.fillColor = 0xE7FBFF;
		t.height = 369.429;
		t.width = 506.96;
		t.x = 70.061;
		t.y = 343.479;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "DFKai-SB";
		t.height = 55.882;
		t.text = "总共五道养生相关的题目，";
		t.textAlign = "left";
		t.textColor = 0x003660;
		t.verticalAlign = "middle";
		t.width = 369.413;
		t.x = 141.216;
		t.y = 438.127;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.anchorOffsetX = 5.421;
		t.anchorOffsetY = 3.599;
		t.height = 90.502;
		t.label = "Button";
		t.skinName = "skins.close";
		t.width = 91.324;
		t.x = 519.308;
		t.y = 319.83;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 40.143;
		t.text = "选择你认为正确的答案，";
		t.textColor = 0x003660;
		t.verticalAlign = "middle";
		t.width = 370.691;
		t.x = 140;
		t.y = 498.63;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 40.143;
		t.text = "答题结束后会有您的分数。";
		t.textColor = 0x003660;
		t.verticalAlign = "middle";
		t.width = 370.691;
		t.x = 139.938;
		t.y = 547.965;
		return t;
	};
	return Tip;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 32;
		t.textAlign = "center";
		t.textColor = 0x00E3FB;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);