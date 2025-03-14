"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  Box,
  Sphere,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import type { Group, Mesh } from "three";

export default function Experience() {
  const groupRef = useRef<Group>(null);
  const platformRef = useRef<Mesh>(null);
  const earthRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }

    if (platformRef.current) {
      platformRef.current.rotation.y -= delta * 0.05;
    }

    // Rotate Earth independently
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.2;
    }

    // Pulse glow effect
    if (glowRef.current) {
      glowRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime) * 0.05
      );
    }
  });

  return (
    <group>
      {/* Rotating platform */}
      <mesh
        ref={platformRef}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
        receiveShadow
      >
        <cylinderGeometry args={[3, 3, 0.2, 64]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Central display with rotating elements */}
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Duck replacement - box with wobble effect */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Box position={[0, 0, 0]} args={[1, 1, 1]} castShadow>
            <MeshWobbleMaterial
              color="#f3d250"
              factor={0.4}
              speed={2}
              metalness={0.3}
              roughness={0.4}
            />
          </Box>
        </Float>

        {/* Enhanced Earth with atmosphere */}
        <group position={[2, 0, 0]}>
          {/* Earth core with distortion effect */}
          <Sphere ref={earthRef} args={[0.5, 32, 32]} castShadow>
            <MeshDistortMaterial
              color="#4285f4"
              distort={0.2}
              speed={2}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>

          {/* Atmosphere glow effect */}
          <Sphere ref={glowRef} args={[0.65, 32, 32]} scale={1.1}>
            <meshBasicMaterial
              color="#4285f4"
              transparent={true}
              opacity={0.15}
            />
          </Sphere>

          {/* Continents approximation */}
          <group rotation={[0, Math.PI / 2, 0]}>
            {[...Array(8)].map((_, i) => (
              <Sphere
                key={i}
                args={[0.1, 16, 16]}
                position={[
                  0.4 * Math.cos((i * Math.PI) / 4),
                  0.3 * Math.sin((i * Math.PI) / 3),
                  0.4 * Math.sin((i * Math.PI) / 4),
                ]}
              >
                <meshStandardMaterial color="#2da44e" roughness={0.8} />
              </Sphere>
            ))}
          </group>

          {/* Orbiting moon */}
          <Float
            speed={2}
            rotationIntensity={0}
            floatIntensity={0}
            position={[1, 0, 0]}
          >
            <Sphere args={[0.1, 16, 16]} castShadow>
              <meshStandardMaterial color="#aaa" roughness={0.8} />
            </Sphere>
          </Float>
        </group>
      </group>

      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.1, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#111" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Additional decorative elements */}
      <Float
        position={[-2, 0.5, -1]}
        speed={1.5}
        rotationIntensity={0.4}
        floatIntensity={0.4}
      >
        <Sphere args={[0.3, 32, 32]} castShadow>
          <meshStandardMaterial
            color="#ff5252"
            emissive="#ff5252"
            emissiveIntensity={0.2}
            toneMapped={false}
          />
        </Sphere>
      </Float>
    </group>
  );
}
