import { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import MenuItem from './Menu/MenuItem'
import AdminMenu from './Menu/AdminMenu'
import { BsGraphUp } from 'react-icons/bs'
import StudentMenu from './Menu/StudentMenu'
import TutorMenu from './Menu/TutorMenu';
import logo from '../../../assets/images/logo.png';
import { IoMdHome } from "react-icons/io";
import useRole from '../../../hooks/useRole'


const Sidebar = () => {
  const [isActive, setActive] = useState(false)

  const [role, isLoading] = useRole()

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#003430] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
              <Link to='/' className='flex items-center gap-2'>
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='100'
                  height='100'
                />
                <IoMdHome className='text-[#42CE9F] text-2xl hover:text-blue-600 cursor-pointer' />
              </Link>
              
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>


            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem icon={BsGraphUp} address='/dashboard' label='Statistics'/>

              {role === 'student' && <StudentMenu/>}          
              {role === 'tutor' && <TutorMenu/> }
              {role === 'admin' && <AdminMenu/> }


            
            
            

              {/* {role === 'guest' && <GuestMenu/> }
              {role === 'host' && <HostMenu/>}
              {role === 'admin' && <AdminMenu/>} */}


            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
