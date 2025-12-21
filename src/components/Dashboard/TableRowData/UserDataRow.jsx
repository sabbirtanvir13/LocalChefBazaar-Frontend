// import { useState } from "react";
// import UpdateUserRoleModal from "../../../Modal/UpdateUserRoleModal";

// const UserDataRow = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <tr className="border-b">
//         <td className="px-6 py-4 text-sm text-gray-800">
//           momon
//         </td>

//         <td className="px-6 py-4 text-sm text-gray-800">
//           user@email.com
//         </td>

//         <td className="px-6 py-4">
//           <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
//             User
//           </span>
//         </td>

//         <td className="px-6 py-4">
//           <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
//             Active
//           </span>
//         </td>

//         <td className="px-6 py-4">
//           <button
//             onClick={() => setIsOpen(true)}
//             className="px-4 py-1.5 rounded-lg bg-indigo-500 text-white text-sm hover:bg-indigo-600 transition"
//           >
//             Update Role
//           </button>
//         </td>
//       </tr>

//       <UpdateUserRoleModal
//         isOpen={isOpen}
//         closeModal={() => setIsOpen(false)}
//       />
//     </>
//   );
// };

// export default UserDataRow;
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const UserDataRow = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleMakeFraud = async () => {
    const res = await axiosSecure.patch(
      `/users/make-fraud/${user._id}`
    );

    if (res.data.modifiedCount > 0) {
      Swal.fire("Success!", "User marked as fraud", "success");
      refetch();
    }
  };

  const showFraudBtn =
    user.role !== "admin" && user.status !== "fraud";

  return (
    <tr className="border-b">
      <td>{user.name}</td>
      <td>{user.email}</td>

      <td>
        <span className="badge">{user.role}</span>
      </td>

      <td>
        <span
          className={`badge ${
            user.status === "fraud"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {user.status}
        </span>
      </td>

      <td>
        {showFraudBtn ? (
          <button
            onClick={handleMakeFraud}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Make Fraud
          </button>
        ) : (
          <span className="text-gray-400 text-sm">N/A</span>
        )}
      </td>
    </tr>
  );
};

export default UserDataRow;
