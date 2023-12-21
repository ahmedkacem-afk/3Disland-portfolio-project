import { useEffect, useRef } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
const Bird = () => {
    // Load the bird model and its animations
    const {scene , animations} =useGLTF(birdScene)
     // Create a reference for the bird mesh to access and control its properties
    const birdRef=useRef()
     // Extract the animations and create actions for controlling them
    const {actions}=useAnimations(animations,birdRef)
     // Start playing the 'Take 001' animation when the component mounts
    useEffect(() => {
        actions['Take 001'].play()

    },[])
    // Use the useFrame hook for per-frame updates
    useFrame(({clock,camera})=>{
        // Oscillate the bird's vertical position over time
        birdRef.current.position.y=Math.sin(clock.elapsedTime) *0.2 +2
          // Adjust the bird's rotation and position based on its proximity to the camera
          //the +10 and -10 in the if statement is if the bird exited the screen 
          
        if(birdRef.current.position.x>camera.position.x +10){
            //if the bird exited the screen then it rotates 180° 
            birdRef.current.rotation.y =Math.PI
        }else if (birdRef.current.position.x<camera.position.x -10){
            birdRef.current.rotation.y=0
        }

           // Move the bird horizontally and vertically based on its rotation
        if (birdRef.current.rotation.y ===0){
            birdRef.current.position.x += 0.01
            birdRef.current.position.z -= 0.01
            
        }else {
            birdRef.current.position.x -= 0.01
            birdRef.current.position.z += 0.01

        }
    })
    
  return (
    <mesh 
    position={[-5,2,1]} scale={[0.003,0.003,0.003]}
    ref={birdRef}
    >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird