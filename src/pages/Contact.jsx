import { Suspense, useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { Canvas } from "@react-three/fiber"
import Fox  from "../models/Fox"
import Loader  from "../components/Loader"
import useAlert from "../hooks/useAlert"
import Alert from "../components/Alert"

/**
 * Contact component for handling user interactions and sending messages.
 * Displays a form to gather user input and a 3D canvas with a fox model.
 */

const Contact = () => {
  const {alert,showAlert,hideAlert} = useAlert()
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const formRef=useRef(null)
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    window.scrollTo(0,0)
  
    
  }, [form])
   
  /**
   * Handles changes in the form input fields.
   * @param {Object} e - The event object.
   */
  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
    /**
   * Handles the focus event on form input fields.
   * Changes the animation to 'walk'.
   */
  const handleFocus=()=> setCurrentAnimation('walk')
  // on blur event the animation is idle which is the default position swinging its tale
  const handleBlur=()=>setCurrentAnimation('idle')
  /**
   * Handles the form submission.
   * Sends an email using the emailjs library.
   * Displays success or error alerts based on the result.
   * Resets the form and animation state after submission.
   * @param {Object} e - The event object.
   */
  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name : "Ahmed",
        from_email: form.email,
        to_email: 'ahmedkacem712@gmail.com',
        message: form.message
        

      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false)
      showAlert({show:true,text:'Message sent successfully!',type:'success'})
      
     
      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('idle')
        setForm({name:'',email:'',message:''})
        
      },[3000])
    }).catch((error)=>{
      setIsLoading(false)
      setCurrentAnimation('idle')
      console.log(error)
      showAlert({show:true,text:'I didn\'t recieve your message',type:'danger'})
    })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container  lg:h-[100vh] sm:h-full">
      {alert.show && <Alert {...alert}/>}
   
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">get in touch</h1>
        <form 
        className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold ">
            Name 
            <input 
            type="text" 
            name="name"
            className="input"
            placeholder="Ahmed "
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold ">
           Email
            <input 
            type="email" 
            name="email"
            className="input"
            placeholder="ahmedkacem712@gmail.com "
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold ">
            Your Message
            <textarea 
            
            name="message"
            rows={4}
            className="textarea"
            placeholder="Let me know how i can help you ! "
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button 
            type="submit" 
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}

          >
            {isLoading ?'Sending...':'Send Message'}

          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
        camera={{
          position: [0,0,5],
          fov:75,
          near:0.1,
          far:1000

        }}
        >
          {/* go to the Home page for better understanding of the lights */}
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader/>}>
            <Fox
            currentAnimation={currentAnimation}
            position={[0.5,0.35,0]}
            rotation={[12.6,-0.6,0]}
            scale={[0.5,0.5,0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
  }

export default Contact