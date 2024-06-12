import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import PropTypes from 'prop-types'
import Loader from '../Pages/Loader/Loader'
const TouterRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loader/>
  if (role === 'tutor') return children
  return <Navigate to='/dashboard' />
}

export default TouterRoute

TouterRoute.propTypes = {
  children: PropTypes.element,
}
