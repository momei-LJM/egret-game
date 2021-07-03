

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AnimationScence03.ts":
/***/ (function(module, exports) {

var AnimationScence03 = /** @class */ (function (_super) {
    __extends(AnimationScence03, _super);
    function AnimationScence03() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskins/Scence03.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    AnimationScence03.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
        this.init();
    };
    AnimationScence03.prototype.onAddToStage = function () {
        this.musicBtn.rotation = MusicManager.Instance.getRotate();
        // MusicManager.Instance.onTouch();
        this.data = RES.getRes("myss_json");
        this.texture = RES.getRes("myss_png");
        // 创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(this.data, this.texture);
        var mc = new egret.MovieClip(mcDataFactory.generateMovieClipData("myss"));
        // this.mc = Common.createMovieClip("myss");
        this.addChild(mc);
        mc.x = this.stage.stageWidth / 2 - mc.width / 2;
        mc.y = this.stage.stageHeight / 2 - mc.height / 2;
        // 第一个参数为1，从第一帧开始播放，参数二为负数，无线循环
        mc.gotoAndPlay(1, -1);
        // this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
        //   mc.nextFrame();
        // },this);
        // this.btnStop.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
        //   this.mc.stop();
        // },this);
        // this.btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
        //   this.mc.play();
        // },this);
    };
    AnimationScence03.prototype.init = function () {
        console.log(21);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        this.musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMusic, this);
        this.tip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toTip, this);
    };
    AnimationScence03.prototype.onStart = function (e) {
        console.log(111);
        MusicManager.Instance.setFlag();
        SceneManager.Instance.changeScene(new Test());
    };
    AnimationScence03.prototype.onMusic = function (e) {
        MusicManager.Instance.onTouch();
    };
    AnimationScence03.prototype.toTip = function () {
        SceneManager.Instance.pushScene(new Tip());
    };
    AnimationScence03.prototype.rotateLogo = function () {
        // if (this.egret_logo) {
        //   this.egret_logo.rotation += 3;
        // }
        if (this.musicBtn) {
            this.musicBtn.rotation = MusicManager.Instance.getRotate();
            if (MusicManager.Instance.rotateFlag == false) {
                MusicManager.Instance.setRotate();
            }
            if (MusicManager.Instance.rotateFlag == true) {
                MusicManager.Instance.setRotate();
            }
        }
    };
    return AnimationScence03;
}(Scene));
window["AnimationScence03"] = AnimationScence03;
__reflect(AnimationScence03.prototype,"AnimationScence03",[]); 


/***/ }),

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

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
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/Common.ts":
/***/ (function(module, exports) {

var Common = /** @class */ (function () {
    function Common() {
    }
    Common.createMovieClip = function (name) {
        var data = RES.getRes(name + "_json");
        var txtr = RES.getRes(name + "_png");
        var mcFanctory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFanctory.generateMovieClipData(name));
        return mc;
    };
    Common.getStage = function () {
        return egret.MainContext.instance.stage;
    };
    return Common;
}());
window["Common"] = Common;
__reflect(Common.prototype,"Common",[]); 


/***/ }),

/***/ "./src/EndScene.ts":
/***/ (function(module, exports) {

var EndScene = /** @class */ (function (_super) {
    __extends(EndScene, _super);
    function EndScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskins/EndScene.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    EndScene.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
    };
    EndScene.prototype.onAddToStage = function () {
        // console.log(QuestionManager.Instance.GetScore().toString());
        // 初始化音乐按钮的开始角度
        this.music.rotation = MusicManager.Instance.getRotate();
        this.score.text = QuestionManager.Instance.GetScore().score.toString();
        this.wrong.text = QuestionManager.Instance.GetScore().wrong.toString();
        this.no.text = QuestionManager.Instance.GetScore().no.toString();
        this.historyScore.text = egret.localStorage.getItem("localScore");
        this.btnReStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reStart, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            MusicManager.Instance.onTouch();
        }, this);
    };
    EndScene.prototype.reStart = function () {
        // Test.reset();
        // SceneManager.Instance.changeScene(new AnimationScence03());
        SceneManager.Instance.changeScene(Main.beginScence);
        MusicManager.Instance.rotateFlag = true;
    };
    EndScene.prototype.rotateLogo = function () {
        if (this.music) {
            this.music.rotation = MusicManager.Instance.getRotate();
            // MusicManager.Instance.setRotate();
        }
    };
    return EndScene;
}(Scene));
window["EndScene"] = EndScene;
__reflect(EndScene.prototype,"EndScene",[]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

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
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
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
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "\u9898\u76EE\u706B\u901F\u52A0\u8F7D\u4E2D..." + current + "/" + total;
        this.timeBar.graphics.clear();
        this.timeBar.graphics.lineStyle(30, 0xFF0000, 1, true);
        this.timeBar.graphics.moveTo(150, 400);
        this.timeBar.graphics.lineTo(150 + 300 * (current / total), 400);
        //   this.timeBarWidth +=this.timeCell;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/Scene.ts");
__webpack_require__("./src/AnimationScence03.ts");
__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/Common.ts");
__webpack_require__("./src/EndScene.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/MusicManager.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/QuestionItem.ts");
__webpack_require__("./src/QuestionManager.ts");
__webpack_require__("./src/SceneManager.ts");
__webpack_require__("./src/Test.ts");
__webpack_require__("./src/ThemeAdapter.ts");
__webpack_require__("./src/Tip.ts");
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
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        // const result = await RES.getResAsync("description_json")
                        // this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        // const result = await RES.getResAsync("description_json")
                        // this.startAnimation(result);
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        Main.beginScence = new AnimationScence03();
        // let beginScence = new AnimationScence03();
        // let beginScence = new Test();
        SceneManager.Instance.rootLayer = this;
        SceneManager.Instance.changeScene(Main.beginScence);
    };
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/MusicManager.ts":
/***/ (function(module, exports) {

var MusicManager = /** @class */ (function () {
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
        enumerable: false,
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
window["MusicManager"] = MusicManager;
__reflect(MusicManager.prototype,"MusicManager",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/QuestionItem.ts":
/***/ (function(module, exports) {

var QuestionItem = /** @class */ (function () {
    function QuestionItem() {
    }
    return QuestionItem;
}());
window["QuestionItem"] = QuestionItem;
__reflect(QuestionItem.prototype,"QuestionItem",[]); 


/***/ }),

/***/ "./src/QuestionManager.ts":
/***/ (function(module, exports) {

var QuestionManager = /** @class */ (function () {
    function QuestionManager() {
        this.items = [];
        this.score = 0;
        this.wrong = 0;
        this.no = 0;
        this.items = RES.getRes("questions_json_json");
        console.log(this.items);
    }
    Object.defineProperty(QuestionManager, "Instance", {
        //创建一个实例
        get: function () {
            if (QuestionManager.questionManager == null) {
                QuestionManager.questionManager = new QuestionManager();
            }
            return QuestionManager.questionManager;
        },
        enumerable: false,
        configurable: true
    });
    QuestionManager.prototype.GetQuestion = function () {
        return this.items;
    };
    QuestionManager.prototype.GetScore = function () {
        return {
            score: this.score,
            wrong: this.wrong,
            no: this.no
        };
    };
    QuestionManager.prototype.SetScore = function (score, wrong, no) {
        this.score = score;
        this.wrong = wrong;
        this.no = no;
    };
    QuestionManager.prototype.reset = function () {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].result = "";
        }
    };
    return QuestionManager;
}());
window["QuestionManager"] = QuestionManager;
__reflect(QuestionManager.prototype,"QuestionManager",[]); 


/***/ }),

/***/ "./src/Scene.ts":
/***/ (function(module, exports) {

var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        return _super.call(this) || this;
    }
    return Scene;
}(eui.Component));
window["Scene"] = Scene;
__reflect(Scene.prototype,"Scene",[]); 


/***/ }),

/***/ "./src/SceneManager.ts":
/***/ (function(module, exports) {

var SceneManager = /** @class */ (function () {
    function SceneManager() {
    }
    Object.defineProperty(SceneManager, "Instance", {
        //创建一个实例
        get: function () {
            if (SceneManager.sceneManager == null) {
                SceneManager.sceneManager = new SceneManager();
            }
            return SceneManager.sceneManager;
        },
        enumerable: false,
        configurable: true
    });
    //切换场景
    SceneManager.prototype.changeScene = function (s) {
        if (this.currentScene) {
            this.rootLayer.removeChild(this.currentScene);
            this.currentScene = null;
        }
        this.rootLayer.addChild(s);
        this.currentScene = s;
    };
    // 弹出场景层
    SceneManager.prototype.pushScene = function (s) {
        this.popScene();
        if (!this.pop_scene) {
            this.rootLayer.addChild(s);
            this.pop_scene = s;
        }
    };
    //关闭场景层
    SceneManager.prototype.popScene = function () {
        if (this.pop_scene) {
            this.rootLayer.removeChild(this.pop_scene);
            this.pop_scene = null;
        }
    };
    return SceneManager;
}());
window["SceneManager"] = SceneManager;
__reflect(SceneManager.prototype,"SceneManager",[]); 


/***/ }),

/***/ "./src/Test.ts":
/***/ (function(module, exports) {

var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    // private reset():void{
    //   this.itemA.selected = false;
    //   this.itemB.selected = false;
    //   this.itemC.selected = false;
    //   this.itemD.selected = false;
    // }
    function Test() {
        var _this = _super.call(this) || this;
        _this.index = 0;
        _this.skinName = "resource/eui_skins/myskins/test_exam.exml";
        return _this;
    }
    Test.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Test.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.rotateLogo, this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.init();
    };
    Test.prototype.init = function () {
        var _this = this;
        // 重新开始 的 重置
        // 初始化音乐按钮的开始角度
        this.music.rotation = MusicManager.Instance.getRotate();
        QuestionManager.Instance.reset();
        this.items = QuestionManager.Instance.GetQuestion();
        // console.log(this.items[this.index].a);
        this.showQuestion();
        this.btnPre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPreClick, this);
        this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
        this.itemA.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.items[_this.index].result = _this.itemA.value;
        }, this);
        this.itemB.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.items[_this.index].result = _this.itemB.value;
        }, this);
        this.itemC.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.items[_this.index].result = _this.itemC.value;
        }, this);
        this.itemD.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.items[_this.index].result = _this.itemD.value;
        }, this);
        this.music.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            MusicManager.Instance.onTouch();
        }, this);
        // console.log(this.items);
    };
    Test.prototype.onPreClick = function (e) {
        this.btnPre.enabled = true;
        this.btnNext.enabled = true;
        if (this.index > 0) {
            this.index--;
        }
        else {
            this.btnPre.enabled = false;
        }
        this.showQuestion();
    };
    Test.prototype.onNextClick = function (e) {
        this.btnPre.enabled = true;
        this.btnNext.enabled = true;
        if (this.index < this.items.length - 1) {
            this.index++;
            console.log(this.index);
            console.log(this.items.length);
            ;
        }
        else {
            this.btnNext.enabled = false;
            this.endTest();
            SceneManager.Instance.changeScene(new EndScene());
        }
        this.showQuestion();
    };
    Test.prototype.showQuestion = function () {
        this.itemLabel.text = this.items[this.index].title;
        this.itemA.label = this.items[this.index].a;
        this.itemB.label = this.items[this.index].b;
        this.itemC.label = this.items[this.index].c;
        this.itemD.label = this.items[this.index].d;
        this.itemA.selected = false;
        this.itemB.selected = false;
        this.itemC.selected = false;
        this.itemD.selected = false;
        if (this.items[this.index].result == "A") {
            this.itemA.selected = true;
        }
        else if (this.items[this.index].result == "B") {
            this.itemB.selected = true;
        }
        else if (this.items[this.index].result == "C") {
            this.itemC.selected = true;
        }
        else if (this.items[this.index].result == "D") {
            this.itemD.selected = true;
        }
    };
    Test.prototype.onAddToStage = function (event) {
        console.log("aaa");
    };
    Test.prototype.endTest = function () {
        this.correct = 0;
        this.wrong = 0;
        this.no = 0;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].result == "") {
                this.no++;
            }
            else if (this.items[i].result == this.items[i].answer) {
                this.correct++;
            }
            else if (this.items[i].result != this.items[i].answer) {
                this.wrong++;
            }
        }
        var localScore = egret.localStorage.getItem("localScore");
        if (!localScore) {
            egret.localStorage.setItem("localScore", "0");
        }
        if (Number(localScore) < this.correct) {
            localScore = this.correct.toString();
            egret.localStorage.setItem("localScore", localScore);
        }
        // this.historyScore.text = localScore;
        QuestionManager.Instance.SetScore(this.correct, this.wrong, this.no);
        // this.reset();
    };
    Test.prototype.rotateLogo = function () {
        if (this.music) {
            this.music.rotation = MusicManager.Instance.getRotate();
            // MusicManager.Instance.setRotate();
        }
    };
    return Test;
}(Scene));
window["Test"] = Test;
__reflect(Test.prototype,"Test",[]); 


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

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
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dirPath = url.replace(".exml", "_EUI.json");
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ }),

/***/ "./src/Tip.ts":
/***/ (function(module, exports) {

var Tip = /** @class */ (function (_super) {
    __extends(Tip, _super);
    function Tip() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/myskins/Tip.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Tip.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Tip.prototype.onAddToStage = function () {
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeWindow, this);
    };
    Tip.prototype.closeWindow = function () {
        console.log(11);
        SceneManager.Instance.popScene();
    };
    return Tip;
}(Scene));
window["Tip"] = Tip;
__reflect(Tip.prototype,"Tip",[]); 


/***/ })

/******/ });