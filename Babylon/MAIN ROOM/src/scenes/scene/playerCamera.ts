import { ArcRotateCamera, Vector3, PointerEventTypes, KeyboardEventTypes } from "@babylonjs/core";

import { onPointerEvent, onKeyboardEvent } from "../decorators";

export default class PlayerCamera extends ArcRotateCamera {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    private constructor() { }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        // Simply remove panning feature from camera.
        this.panningAxis = Vector3.Zero();
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // Nothing at the moment.
    }

    /**
     * Request pointer lock.
     */
    @onPointerEvent(PointerEventTypes.POINTERDOWN, false)
    private _onPointerEvent(): void {
        const engine = this.getEngine();
        if (!engine.isPointerLock) {
            engine.enterPointerlock();
        }
    }

    /**
     * Exit pointer lock.
     */
    @onKeyboardEvent(27, KeyboardEventTypes.KEYUP)
    private _onKeyboardEvent(): void {
        const engine = this.getEngine();
        if (engine.isPointerLock) {
            engine.exitPointerlock();
        }
    }
}
