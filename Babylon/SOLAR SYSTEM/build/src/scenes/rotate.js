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
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = require("@babylonjs/core/node");
/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameras
 *      - Transform nodes
 *
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */ var core_1 = require("@babylonjs/core");
var MyScript = /** @class */ (function (_super) {
    __extends(MyScript, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function MyScript() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    MyScript.prototype.onInitialize = function () {
    };
    /**
     * Called on the node has been fully initialized and is ready.
     */
    MyScript.prototype.onInitialized = function () {
        // ...
    };
    /**
     * Called on the scene starts.
     */
    MyScript.prototype.onStart = function () {
        this.axis = new core_1.Vector3(0, 1, 0); // Default axis of rotation
        this.angle = 30 * Math.PI / 180; // Default angle of rotation (1 degree)
    };
    /**
     * Called each frame.
     */
    MyScript.prototype.onUpdate = function () {
        // Rotate the node about its axis
        var deltaTime = this.getScene().getEngine().getDeltaTime() / 1000; // Convert delta time to seconds
        var rotationQuaternion = core_1.Quaternion.RotationAxis(this.axis, this.angle * deltaTime);
        if (rotationQuaternion) {
            // For nodes with rotationQuaternion property
            rotationQuaternion = rotationQuaternion.multiply(rotationQuaternion);
        }
        else if (this.rotation) { // (this as any) to bypass TypeScript error
            // For nodes without rotationQuaternion property (e.g., lights, cameras), if they have a 'rotation' property
            var eulerRotation = this.rotation || core_1.Vector3.Zero();
            var currentRotationQuaternion = core_1.Quaternion.FromEulerAngles(eulerRotation.x, eulerRotation.y, eulerRotation.z);
            // Combine current rotation with new rotation
            var newRotationQuaternion = rotationQuaternion.multiply(currentRotationQuaternion);
            var newRotationEuler = newRotationQuaternion.toEulerAngles();
            // Update node's rotation
            this.rotation = newRotationEuler;
        }
    };
    /**
     * Called on the object has been disposed.
     * Object can be disposed manually or when the editor stops running the scene.
     */
    MyScript.prototype.onStop = function () {
        // ...
    };
    /**
     * Called on a message has been received and sent from a graph.
     * @param name defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    MyScript.prototype.onMessage = function (name, data, sender) {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    };
    return MyScript;
}(node_1.Node));
exports.default = MyScript;
//# sourceMappingURL=rotate.js.map