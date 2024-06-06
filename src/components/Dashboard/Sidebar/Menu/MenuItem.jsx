import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#42CE9F] hover:text-white ${
          isActive ? 'bg-[#42CE9F]  text-white' : 'text-white'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}
MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.elementType,
}

export default MenuItem
