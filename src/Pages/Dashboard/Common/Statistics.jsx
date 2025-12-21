// import React from 'react';
// import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics';
// import useRole from '../../../hooks/useRole';
// import LoadingSpinner from '../../Shared/LoadingSpinner';
// import ChefStatistics from '../../../components/Dashboard/Statistics/ChefStatistics';
// import UserStatistics from '../../../components/Dashboard/Statistics/UserStatistics';

// const Statistics = () => {
    
//   const [role, isRoleLoading] = useRole()


//   if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>
//     return (
//         <div>
//             {  role?.toLowerCase() === 'admin' && <>
//              <AdminStatistics></AdminStatistics> 
//             </>
//             }
//             {  role?.toLowerCase() === 'chef' && <>
//           <ChefStatistics></ChefStatistics>
//             </>
//             }
//             {  role?.toLowerCase() === 'user' && <>
//          <UserStatistics></UserStatistics>
//             </>
//             }
          
//         </div>
//     );
// };

// export default Statistics;

import React from 'react';
import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import ChefStatistics from '../../../components/Dashboard/Statistics/ChefStatistics';
import UserStatistics from '../../../components/Dashboard/Statistics/UserStatistics';

const Statistics = () => {

  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <LoadingSpinner />;

  // ✅ SAFE role extraction
  const userRole = typeof role === 'string'
    ? role.toLowerCase()
    : role?.role?.toLowerCase();

  return (
    <div>
      {userRole === 'admin' && <AdminStatistics />}
      {userRole === 'chef' && <ChefStatistics />}
      {userRole === 'user' && <UserStatistics />}
    </div>
  );
};

export default Statistics;
