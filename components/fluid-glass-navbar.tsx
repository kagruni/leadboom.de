"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Karriere", href: "/karriere" },
  { name: "Kontakt", href: "/kontakt" },
];

function FluidBackground() {
  const meshRef = useRef();
  const materialRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y += 0.005;
      
      // Animate the material properties for fluid effect
      materialRef.current.distortion = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      materialRef.current.temporalDistortion = 0.1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  const geometry = useMemo(() => new THREE.PlaneGeometry(20, 3, 32, 8), []);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <MeshTransmissionMaterial
        ref={materialRef}
        transmission={1}
        roughness={0}
        thickness={0.5}
        ior={1.5}
        chromaticAberration={0.1}
        distortion={0.1}
        distortionScale={0.5}
        temporalDistortion={0.1}
        clearcoat={1}
        clearcoatRoughness={0}
        color="#ffffff"
        attenuationColor="#8b5cf6"
        attenuationDistance={2}
      />
    </mesh>
  );
}

function BackgroundElements() {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.01;
      group.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime + i * 2) * 0.005;
        child.rotation.x += 0.01;
        child.rotation.z += 0.005;
      });
    }
  });

  return (
    <group ref={group}>
      <mesh position={[-3, 1, -2]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#4c1d95" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[3, -0.5, -2]}>
        <sphereGeometry args={[0.7]} />
        <meshStandardMaterial color="#06b6d4" emissive="#155e75" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0.5, -3]}>
        <sphereGeometry args={[0.4]} />
        <meshStandardMaterial color="#ec4899" emissive="#831843" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-1.5, -1, -2.5]}>
        <sphereGeometry args={[0.6]} />
        <meshStandardMaterial color="#f59e0b" emissive="#92400e" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} color="#8b5cf6" intensity={0.3} />
      
      <BackgroundElements />
      <FluidBackground />
    </>
  );
}

export default function FluidGlassNavbar({ onMobileMenuToggle }) {
  return (
    <div className="relative w-full h-[100px]">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Desktop Navigation */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-center">
        <nav className="flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-white font-medium hover:text-purple-300 transition-colors duration-200 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 lg:hidden">
        <button 
          onClick={onMobileMenuToggle}
          className="text-white p-2 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
        <Link href="/" className="text-2xl font-bold text-white backdrop-blur-sm px-2 py-1 rounded hover:bg-white/5 transition-colors">
          Lead<span className="text-purple-300">boom</span>
        </Link>
      </div>
    </div>
  );
}