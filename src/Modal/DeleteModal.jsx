// import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

// const DeleteModal = ({ isOpen, closeModal }) => {
//   return (
//     <Dialog
//       open={isOpen}
//       onClose={closeModal}   // ❗ function must
//       className='relative z-10'
//     >
//       <div className='fixed inset-0 bg-black/30' />

//       <div className='fixed inset-0 flex items-center justify-center p-4'>
//         <DialogPanel className='bg-white p-6 rounded-xl shadow max-w-md w-full'>
//           <DialogTitle className='text-lg font-semibold'>
//             Are you sure?
//           </DialogTitle>

//           <p className='mt-2 text-sm text-gray-500'>
//             This action cannot be undone.
//           </p>

//           <div className='mt-6 flex justify-around'>
//             <button className='px-4 py-2 bg-green-200 rounded'>
//               Yes
//             </button>
//             <button
//               onClick={closeModal}
//               className='px-4 py-2 bg-red-200 rounded'
//             >
//               No
//             </button>
//           </div>
//         </DialogPanel>
//       </div>
//     </Dialog>
//   )
// }

// export default DeleteModal
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const DeleteModal = ({ closeModal, isOpen }) => {
  return (
    <Dialog
      open={isOpen}
      as='div'
      className='relative z-10 focus:outline-none '
      onClose={closeModal}
    >
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl'
          >
            <DialogTitle
              as='h3'
              className='text-lg font-medium leading-6 text-gray-900'
            >
              Are you sure?
            </DialogTitle>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>
                You cannot undo once it&apos;s done!
              </p>
            </div>
            <hr className='mt-8 ' />
            <div className='flex mt-2 justify-around'>
              <button
                type='button'
                className='cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
              >
                Yes
              </button>
              <button
                type='button'
                className='cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                onClick={closeModal}
              >
                No
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DeleteModal