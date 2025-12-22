import { Navigate } from 'react-router'
import useRole from '../hooks/useRole'
import LoadingSpinner from '../Pages/Shared/LoadingSpinner'

const ChefRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole()

  if (isRoleLoading) return <LoadingSpinner />

  if (role === 'seller') {
    return children
  }

  return <Navigate to='/' replace />
}

export default  ChefRoute
