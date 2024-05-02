const { editor } = require("babylonjs-editor");

module.exports = {
    main: function() {
        editor.console.logInfo("My first editor script!");

        var CustomRotateScript = function(mesh) {
            this.mesh = mesh; // Reference to the mesh this script is attached to
            this.axis = new BABYLON.Vector3(0, 1, 0); // Default axis of rotation
            this.angle = Math.PI / 180; // Default angle of rotation (1 degree)
        };
        
        CustomRotateScript.prototype.update = function(deltaTime) {
            // Rotate the mesh about its axis
            var quaternion = BABYLON.Quaternion.RotationAxis(this.axis, this.angle * deltaTime);
            this.mesh.rotationQuaternion = BABYLON.Quaternion.RotationAxis(this.axis, this.angle).multiply(this.mesh.rotationQuaternion);
        };
        
        // Register the script component with the editor
        editor.registerScriptComponent("CustomRotateScript", CustomRotateScript);
    },
};

// CustomRotateScript.js


