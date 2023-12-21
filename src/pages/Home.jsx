 
import {Suspense, useState ,useEffect,useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3' 
import { soundoff, soundon } from '../assets/icons'


const Home = () => {
  //you can download another mp3 audio and put it in the assets folder import it then change it in the useRef
  const audioRef=useRef(new Audio(sakura)) 
  audioRef.current.volume=0.4
  audioRef.current.loop=true
   // State for controlling music play/pause
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  // State for controlling rotation of the 3D scene
  const [isRotating, setIsRotating] = useState(false)
  // State to track the current stage for displaying information
  const [currentStage, setCurrentStage] = useState(1)
 // This useEffect controls whether the background music is on or off
  useEffect(()=>{
    if ( isPlayingMusic){
      audioRef.current.play()
    }
    return()=>{
      audioRef.current.pause()
    }
  })
  // Function to adjust the scale and position of the plane based on screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale,ScreenPosition
    if (window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5] 
      ScreenPosition=[0,-1.5,0]

    }
    else {
      screenScale = [3,3,3] 
      ScreenPosition=[0,-4,-4] 

    }

    return[screenScale,ScreenPosition]

  }
   // Function to adjust the scale, position, and rotation of the island based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale=null
    let ScreenPosition=[0,-6.5,-43]
    let rotation =[0.1,4.7,0]
    if (window.innerWidth < 768){
      screenScale = [0.9, 0.9,0.9]

    }
    else {
      screenScale = [1,1,1]  
    }

    return[screenScale,ScreenPosition,rotation]

  }
   // Destructuring values from the adjust functions
  const [islandScale,islandPosition,islandRotation] = adjustIslandForScreenSize()
  const [planeScale,planePosition] = adjustPlaneForScreenSize()
  
  return (
    <section className="w-full h-screen relative">
      {/* Display information about the current stage */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div> 
       {/* 3D Canvas for rendering the scene : 
       Canvas  is a react component
       serves as a container for 3D scenes */}
        <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}
        `}camera={{ near: 0.1 ,far: 1000}}>
          {/*  Suspense is used to provide a 
          fallback UI while asynchronous tasks, 
          such as
         loading 3D models, are in progress. The <Loader>
          component serves as the
          fallback UI during the loading of 3D assets. */}
            <Suspense fallback={<Loader/>}>
            {/* illuminate the 3D scene. 
            Proper lighting is essential for realistic rendering. */}
                <directionalLight position={[1,1,1] }
                intensity={2}/>
                <ambientLight intensity={0.5}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
               {/* 3D Models */}
              <Island
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating} 
                setCurrentStage={setCurrentStage}
              /> 
             <Sky
             isRotating={isRotating}
             />
             <Bird/>
             <Plane
              position={planePosition}
              scale={planeScale}
              isRotating={isRotating}
             
              rotation={[0,20,0]}
              
             />
            </Suspense>

        </Canvas>
        
      {/* Sound on/off button */}
      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic ? soundoff: soundon} 
        alt="sound" 
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={()=>setIsPlayingMusic(!isPlayingMusic)}/>
      </div>
    </section>

  )
}

export default Home