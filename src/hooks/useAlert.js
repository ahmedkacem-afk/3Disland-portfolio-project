import { useState } from 'react'
// Custom React hook for managing alert state

const useAlert = () => {
    // State to manage alert properties (show, text, type)
    const [alert, setAlert] = useState({show :false ,text:'',type:'danger'})
    // Function to show an alert with specified text and type
    const showAlert=({text,type='danger'}) => setAlert({
        show: true,
        text,
        type
    })
    
   // Function to hide the alert (reset to default values)
    const hideAlert= ()=> setAlert({
        show: false,
        text:'',
        type: 'danger'
    })
    // Return alert state and functions for showing/hiding alerts
  return {alert, showAlert, hideAlert}
}

export default useAlert