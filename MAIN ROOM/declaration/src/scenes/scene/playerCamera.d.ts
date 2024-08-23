import { ArcRotateCamera } from "@babylonjs/core";
export default class PlayerCamera extends ArcRotateCamera {
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
     * Request pointer lock.
     */
    private _onPointerEvent;
    /**
     * Exit pointer lock.
     */
    private _onKeyboardEvent;
}
