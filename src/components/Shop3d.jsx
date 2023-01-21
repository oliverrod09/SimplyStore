import React from "react";

export function Shop3d() {
  return (
    <>
        <model-viewer
          src="/compras.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster="poster.webp"
          shadow-intensity="1"
          auto-rotate
          style={{ width: "100%", height: "100%" }}
        ></model-viewer>
    </>
  );
}
