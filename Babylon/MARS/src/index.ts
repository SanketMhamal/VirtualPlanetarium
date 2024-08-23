import { BabylonFileLoaderConfiguration, Engine, Scene } from "@babylonjs/core";
import "@babylonjs/materials";
import * as BABYLON from "@babylonjs/core";
import * as CANNON from "cannon";

import { appendScene } from "./scenes/tools";

export class Game {
    /**
     * Defines the engine used to draw the game using Babylon.JS and WebGL
     */
    public engine: Engine;
    /**
     * Defines the scene used to store and draw elements in the canvas.
     */
    public scene: Scene;

    /**
     * Constructor.
     */
    public constructor() {
        this.engine = new Engine(document.getElementById("renderCanvas") as HTMLCanvasElement, true);
        this.scene = new Scene(this.engine);

        this._bindEvents();
        this._load();
    }

    /**
     * Loads the first scene.
     */
    private async _load(): Promise<void> {
        const rootUrl = "./scenes/_assets/";

        BabylonFileLoaderConfiguration.LoaderInjectedPhysicsEngine = CANNON;

        await appendScene(this.scene, rootUrl, "../scene/scene.babylon");

        this.scene.executeWhenReady(() => {
            // Attach camera.
            if (!this.scene.activeCamera) {
                throw new Error("No camera defined in the scene. Please add at least one camera in the project or create one yourself in the code.");
            }
            this.scene.activeCamera.attachControl(this.engine.getRenderingCanvas(), false);

            this.scene.meshes.forEach((m) => m.checkCollisions = true);

            this.scene.meshes.forEach((m) => m.checkCollisions = true);
            const music = new BABYLON.Sound("Music", "assets/music/music1.mp3", this.scene, null, {
                loop: true,
                autoplay: true,
              });

            // Render.
            this.engine.runRenderLoop(() => this.scene.render());
        });
    }

    /**
     * Binds the required events for a full experience.
     */
    private _bindEvents(): void {
        window.addEventListener("resize", () => this.engine.resize());
    }
}
