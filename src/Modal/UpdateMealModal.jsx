import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import UpdateMealForm from '../components/form/UpdateMealForm'

const UpdateMealModal = ({ isOpen, closeModal }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal} 
      className='relative z-10'
    >
      <div className='fixed inset-0 bg-black/30' />

      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <DialogPanel className='w-full max-w-md bg-white p-6 rounded-2xl shadow-xl'>
          
          <div className='flex justify-end'>
            <button
              onClick={closeModal}
              className='px-3 py-1 rounded bg-red-100 text-red-500'
            >
              X
            </button>
          </div>

          <DialogTitle className='text-lg font-semibold text-center'>
            Update Meal
          </DialogTitle>

          <p className='mt-4 text-sm text-gray-500 text-center'>
            Update meal info here
          </p>

          <div className='mt-2 w-full'>
              <UpdateMealForm/>
            </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default UpdateMealModal
