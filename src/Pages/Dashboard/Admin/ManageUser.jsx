// import UserDataRow from "../../../components/Dashboard/TableRowData/UserDataRow";

// const ManageUsers = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>

//       <div className="overflow-x-auto bg-white rounded-xl shadow">
//         <table className="min-w-full">
//          <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             <UserDataRow />
//             <UserDataRow />
//             <UserDataRow />
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserDataRow from "../../../components/Dashboard/TableRowData/UserDataRow";


const ManageUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <UserDataRow
                key={user._id}
                user={user}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
