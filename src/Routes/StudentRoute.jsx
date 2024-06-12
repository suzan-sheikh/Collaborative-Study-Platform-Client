import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import PropTypes from 'prop-types'
import Loader from '../Pages/Loader/Loader'
const StudentRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loader/>
  if (role === 'student') return children
  return <Navigate to='/dashboard' />
}

export default StudentRoute

StudentRoute.propTypes = {
  children: PropTypes.element,
}
