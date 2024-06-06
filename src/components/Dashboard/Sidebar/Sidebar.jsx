import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import MenuItem from './Menu/MenuItem'
import HostMenu from './Menu/HostMenu'
import AdminMenu from './Menu/AdminMenu'
import { BsGraphUp } from 'react-icons/bs'
import StudentMenu from './Menu/StudentMenu'


const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)

  // role change koro
  // const [role] = 'admin'

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
                src='https://i.ibb.co/qJtzb0J/logo.png'
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
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src='https://i.ibb.co/qJtzb0J/logo.png'
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>


            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem icon={BsGraphUp} address='/dashboard' label='Statistics'/>


            <StudentMenu/>
             {/* <HostMenu/> */}
            {/* <AdminMenu/>  */}

              {/* {role === 'guest' && <GuestMenu/> }
              {role === 'host' && <HostMenu/>}
              {role === 'admin' && <AdminMenu/>} */}


            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#42CE9F]   hover:text-white ${
                isActive ? 'bg-[#42CE9F]  text-white' : 'text-white'
              }`
            }
          >
            <IoSettingsOutline className='w-5 h-5 text-white'/>

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-[#42CE9F] hover:text-white transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
