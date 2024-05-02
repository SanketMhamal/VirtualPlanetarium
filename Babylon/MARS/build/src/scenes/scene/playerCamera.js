"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
var decorators_1 = require("../decorators");
var PlayerCamera = /** @class */ (function (_super) {
    __extends(PlayerCamera, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function PlayerCamera() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the scene starts.
     */
    PlayerCamera.prototype.onStart = function () {
        // Simply remove panning feature from camera.
        this.panningAxis = core_1.Vector3.Zero();
    };
    /**
     * Called each frame.
     */
    PlayerCamera.prototype.onUpdate = function () {
        // Nothing at the moment.
    };
    /**
     * Request pointer lock.
     */
    PlayerCamera.prototype._onPointerEvent = function () {
        var engine = this.getEngine();
        if (!engine.isPointerLock) {
            engine.enterPointerlock();
        }
    };
    /**
     * Exit pointer lock.
     */
    PlayerCamera.prototype._onKeyboardEvent = function () {
        var engine = this.getEngine();
        if (engine.isPointerLock) {
            engine.exitPointerlock();
        }
    };
    __decorate([
        (0, decorators_1.onPointerEvent)(core_1.PointerEventTypes.POINTERDOWN, false)
    ], PlayerCamera.prototype, "_onPointerEvent", null);
    __decorate([
        (0, decorators_1.onKeyboardEvent)(27, core_1.KeyboardEventTypes.KEYUP)
    ], PlayerCamera.prototype, "_onKeyboardEvent", null);
    return PlayerCamera;
}(core_1.ArcRotateCamera));
exports.default = PlayerCamera;
//# sourceMappingURL=playerCamera.js.map