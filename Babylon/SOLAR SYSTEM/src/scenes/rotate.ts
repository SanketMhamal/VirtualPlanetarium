import { Node } from "@babylonjs/core/node";

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
 */import {  Vector3, Quaternion } from "@babylonjs/core";
export default class MyScript extends Node {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    protected constructor() { }
    axis: Vector3;
    angle: number;

    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    public onInitialize(): void {
       
    }

    /**
     * Called on the node has been fully initialized and is ready.
     */
    public onInitialized(): void {
        // ...
    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        this.axis = new Vector3(0, 1, 0); // Default axis of rotation
        this.angle = 30* Math.PI / 180; // Default angle of rotation (1 degree)
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // Rotate the node about its axis
        const deltaTime = this.getScene().getEngine().getDeltaTime() / 1000; // Convert delta time to seconds
        var rotationQuaternion = Quaternion.RotationAxis(this.axis, this.angle * deltaTime);

        if (rotationQuaternion) {
            // For nodes with rotationQuaternion property
            rotationQuaternion = rotationQuaternion.multiply(rotationQuaternion);
        } else if ((this as any).rotation) { // (this as any) to bypass TypeScript error
            // For nodes without rotationQuaternion property (e.g., lights, cameras), if they have a 'rotation' property
            const eulerRotation = (this as any).rotation as Vector3 || Vector3.Zero();
            const currentRotationQuaternion = Quaternion.FromEulerAngles(eulerRotation.x, eulerRotation.y, eulerRotation.z);

            // Combine current rotation with new rotation
            const newRotationQuaternion = rotationQuaternion.multiply(currentRotationQuaternion);
            const newRotationEuler = newRotationQuaternion.toEulerAngles();

            // Update node's rotation
            (this as any).rotation = newRotationEuler;
        }
    }

    /**
     * Called on the object has been disposed.
     * Object can be disposed manually or when the editor stops running the scene.
     */
    public onStop(): void {
        // ...
    }

    /**
     * Called on a message has been received and sent from a graph.
     * @param name defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    public onMessage(name: string, data: any, sender: any): void {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    }
}
