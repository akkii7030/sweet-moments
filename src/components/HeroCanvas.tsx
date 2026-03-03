import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingMacaron({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
    </mesh>
  );
}

function FloatingSphere({ position, color, scale, speed }: { position: [number, number, number]; color: string; scale: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.05} transparent opacity={0.6} />
    </mesh>
  );
}

function Scene() {
  const macarons = useMemo(() => [
    { position: [-3, 1, -2] as [number, number, number], color: '#F8C8DC', speed: 0.8 },
    { position: [3.5, 0.5, -3] as [number, number, number], color: '#A5D6A7', speed: 0.6 },
    { position: [-2, -1, -4] as [number, number, number], color: '#FFF8E7', speed: 1.0 },
    { position: [2, 1.5, -2.5] as [number, number, number], color: '#F8C8DC', speed: 0.7 },
    { position: [0, -0.5, -3] as [number, number, number], color: '#C2185B', speed: 0.9 },
    { position: [-4, 0, -3.5] as [number, number, number], color: '#A5D6A7', speed: 0.5 },
  ], []);

  const spheres = useMemo(() => [
    { position: [-1, 2, -5] as [number, number, number], color: '#F8C8DC', scale: 1.5, speed: 0.4 },
    { position: [4, -1, -6] as [number, number, number], color: '#FFF8E7', scale: 2, speed: 0.3 },
    { position: [-3, -2, -4] as [number, number, number], color: '#A5D6A7', scale: 1, speed: 0.6 },
    { position: [1, 2.5, -7] as [number, number, number], color: '#F8C8DC', scale: 3, speed: 0.2 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, 3, 2]} intensity={0.3} color="#F8C8DC" />
      {macarons.map((m, i) => (
        <FloatingMacaron key={i} {...m} />
      ))}
      {spheres.map((s, i) => (
        <FloatingSphere key={i} {...s} />
      ))}
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
