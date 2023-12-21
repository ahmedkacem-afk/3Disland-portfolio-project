/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/


import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from '../assets/3d/island.glb'

import {a} from '@react-spring/three'

/*
  Island Component:
  - Represents a 3D island scene loaded from a GLB model.
  - Allows rotation of the island by dragging, keyboard arrow keys, or touch gestures.
  - Calculates rotation speed and adjusts the current stage based on the island's orientation.
  - Utilizes useRef, useEffect, and useFrame hooks from react-three/fiber and useGLTF from drei.
*/
const Island = ({isRotating,setIsRotating,setCurrentStage,...props}) =>{
  // Ref for the 3D island model
    const islandRef = useRef();
    // Three.js context and viewport information
    const {gl , viewport} = useThree()

     // Load the island GLTF model
     const { nodes, materials } = useGLTF(islandScene);
// Refs for tracking rotation speed and last mouse/touch position
  const lastX= useRef(0)
  const rotationSpeed = useRef(0)

  // dampingFactor is a constant used for smoother animation
  // it is used for the rotation of the island after a key or the mouse is up
  // basically if isRotation state is false then the island will slow down smoothly little by little
  const dampingFactor = 0.95
  // Event handlers for user interaction
  const handlePointerDown = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating (true);
 
  }
  const handlePointerUp = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating (false);
    

  }
  const handlePointerMove = (e) =>{
    e.stopPropagation();
    e.preventDefault();
     
    if (isRotating){
     // Determine the clientX value based on whether it's a touch event or mouse event
      const clientX= e.touches ? e.touches[0].clientX :e.clientX
      // Calculate the change in position (delta) of the pointer relative to the viewport width
      const delta = (clientX -lastX.current) /viewport.width
      // Update the rotation of the island based on the calculated delta
      islandRef.current.rotation.y+=delta*0.01 * Math.PI
       // Store the current clientX for the next calculation
      lastX.current= clientX
        // Update the rotation speed of the island based on the calculated delta
      rotationSpeed.current = delta *0.01*Math.PI
    }

  }
  const handleKeyDown = (e) =>{
    if(e.key === 'ArrowLeft'){
      // Check if the island is not currently rotating && Set the island to start rotating
      if (!isRotating) setIsRotating(true)
      // Increment the rotation of the island to the left
      islandRef.current.rotation.y+=0.01*Math.PI
       // Set the rotation speed for smooth animation
      rotationSpeed.current=0.0125
    } // Check if the pressed key is the right arrow key 
    else if (e.key === 'ArrowRight'){
       // Check if the island is not currently rotating &&  Set the island to start rotating
      if (!isRotating) setIsRotating(true)
      //the opposite as the first condition as it will decrement to the right
      islandRef.current.rotation.y -=0.01*Math.PI
      rotationSpeed.current=-0.0125
    }
  }
  const handleKeyUp =(e) =>{
    if (e.key === 'ArrowLeft' || e.key==='ArrowRight') setIsRotating(false)
  }
  useFrame(() => {
    if (!isRotating){
      rotationSpeed.current *=dampingFactor
      if (Math.abs(rotationSpeed.current)<0.001){
        rotationSpeed.current = 0
      }
      islandRef.current.rotation.y += rotationSpeed.current 

    }else{
      const rotation =islandRef.current.rotation.y
      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  


  useEffect(() => {
    const canvas = gl.domElement
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () =>{
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointerup', handlePointerUp)
      canvas.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  },[gl,handlePointerDown,handlePointerUp,handlePointerMove])

  return (
    <a.group ref={islandRef} {...props}>
       {/* Island components 
       with different geometries and materials */}
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh 
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}




export default Island;