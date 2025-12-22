import { Navigate } from 'react-router'
import useRole from '../hooks/useRole'
import LoadingSpinner from '../Pages/Shared/LoadingSpinner'


const AdminRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole()

  if (isRoleLoading) return <LoadingSpinner />
  if (role === 'admin') return children
  return <Navigate to='/' replace />
}

export default AdminRoute 
