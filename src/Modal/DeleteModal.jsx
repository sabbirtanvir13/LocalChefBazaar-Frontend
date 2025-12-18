import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const DeleteModal = ({
  isOpen = false,
  closeModal = () => {},
  onConfirm = () => {},
  title = 'Are you sure?',
  message = "You can't undo once it's done!",
  confirmText = 'Yes',
  cancelText = 'No',
  loading = false,
}) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* overlay */}
      <div className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {title}
          </DialogTitle>

          <p className="mt-2 text-sm text-gray-500">
            {message}
          </p>

          <hr className="my-6" />

          <div className="flex justify-around">
            <button
              onClick={onConfirm}
              disabled={loading}
              className="inline-flex justify-center rounded-md bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 disabled:opacity-60"
            >
              {loading ? 'Deleting...' : confirmText}
            </button>

            <button
              onClick={closeModal}
              disabled={loading}
              className="inline-flex justify-center rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 disabled:opacity-60"
            >
              {cancelText}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default DeleteModal
