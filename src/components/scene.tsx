"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Experience from "./experience";

export default function Scene() {
  return (
    <>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={50} />
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 5, 20]} />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Suspense fallback={null}>
          <Experience />
          {/* Use Stars for a nice background without external assets */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* Add post-processing effects */}
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              height={300}
              intensity={1.5}
            />
          </EffectComposer>
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </>
  );
}
