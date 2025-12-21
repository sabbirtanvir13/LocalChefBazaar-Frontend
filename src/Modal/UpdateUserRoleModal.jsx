import { Dialog, DialogPanel } from "@headlessui/react";

const UpdateUserRoleModal = ({ isOpen, closeModal }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Update User Role
          </h3>

          <select
            className="w-full border rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>User</option>
            <option>Chef</option>
            <option>Admin</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>

            <button
              className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600"
            >
              Update
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default UpdateUserRoleModal;
