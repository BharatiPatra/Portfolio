"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import type { Mesh, Group } from "three";
import type { ProjectType } from "../lib/types";

interface ProjectDisplayProps {
  project: ProjectType;
  index: number;
  position: [number, number, number];
  isActive: boolean;
  onClick: () => void;
}

export default function ProjectDisplay({
  project,
  index,
  position,
  isActive,
  onClick,
}: ProjectDisplayProps) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;

      // Hover animation
      meshRef.current.scale.x =
        meshRef.current.scale.y =
        meshRef.current.scale.z =
          hovered || isActive ? 1.1 : 1;
    }

    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[1.5, 1, 0.1]} />
        <meshStandardMaterial
          color={isActive ? "#3498db" : hovered ? "#2980b9" : "#222"}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      <Text
        position={[0, 0, 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist_Bold.json"
      >
        {project.title}
      </Text>

      {isActive && (
        <Html position={[0, -1.5, 0]} transform>
          <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg w-6  border border-gray-700">
            <h3 className="text-lg font-bold mb-222">{project.title}</h3>
            <p className="text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            
          </div>
        </Html>
      )}
    </group>
  );
}
