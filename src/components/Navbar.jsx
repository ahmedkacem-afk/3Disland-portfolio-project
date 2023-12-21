import { NavLink } from "react-router-dom"

const Navbar = () => {
   // rendering navbar elements
  return (
    <header className="header">
        <NavLink to="/ " className="w-10 h-10 rounded-lg bg-white
         items-center justify-center flex font-bold shadow-md">
            <p className=" blue-gradient_text">AH</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            {/* dynamic navigation : if clicked  => color blue else text black */}
            <NavLink to="/about "className={({isActive}) => isActive ?
             ' text-blue-500 ' : 'text-black'}> 
                about
             </NavLink>
             {/* same here */}
            <NavLink to="/projects" className={({isActive})=> isActive ?
             'text-blue-500' : 'text-black'}>
                projects
             </NavLink>
             {/* those were the links to the pages  */}
        </nav>
    </header>
  )
}

export default Navbar