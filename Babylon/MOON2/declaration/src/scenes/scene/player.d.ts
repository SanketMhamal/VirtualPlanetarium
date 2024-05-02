import { Mesh, AnimationRange, Animatable, Animation, Vector3 } from "@babylonjs/core";
export interface IAction {
    range: AnimationRange;
    direction: Vector3;
    name: string;
    running?: boolean;
    invert?: boolean;
    shift?: string;
    action?: Animatable;
    interpolation?: Animation;
}
export interface IPlayerActions {
    [keyChar: string]: IAction;
    [keyCode: number]: IAction;
}
export default class Player extends Mesh {
    private _forwardKey;
    private _backwardKey;
    private _leftKey;
    private _rightKey;
    private _walkSpeed;
    private _runSpeed;
    private _transitionSpeed;
    private _animationSpeed;
    private _camera;
    private _actions;
    private _shift;
    private _targetBone;
    private _jumping;
    private _jumpValue;
    private gravity;
    private _moveAxis;
    private _moveDirection;
    /**
     * Override constructor.
     * @warn do not fill.
     */
    private constructor();
    /**
     * Called on the scene starts.
     */
    onStart(): void;
    /**
     * Called each frame.
     */
    onUpdate(): void;
    /**
     * Performs the action according to the given action object.
     */
    private _doAction;
    /**
     * Cancels the given action.
     */
    private _cancelAction;
    /**
     * Interpolates the given action weight.
     */
    private _interpolateAction;
    /**
     * Syncs the mesh rotation according to the current camera's direction.
     */
    private _syncRotation;
    /**
     * Called on the space key is up.
     */
    private _jump;
    /**
     * Called on a keyboard key is down.
     */
    private _onKeyboardDown;
    /**
     * Called on a keyboard key is up.
     */
    private _onKeyboardUp;
    /**
     * Called on the shift key is down.
     */
    private _shiftDown;
    /**
     * Called on the shift key is up.
     */
    private _shiftUp;
}
