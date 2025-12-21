
// // import { useState } from 'react'
// // import DeleteModal from '../../../Modal/DeleteModal'
// // import UpdateMealModal from '../../../Modal/UpdateMealModal '



// // const MealDataRow = ({ meal, refetch }) => {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [isEditModalOpen, setIsEditModalOpen] = useState(false)

// // //   const {  image, foodname, quantity, price } = meal

// //   const closeModal = () => setIsOpen(false)

// //   // ✅ delete meal
// // //   const handleDelete = async () => {
// // //     try {
// // //       await axios.delete(
// // //         `${import.meta.env.VITE_API_URL}/meals/${_id}`
// // //       )
// // //       closeModal()
// // //       refetch()
// // //     } catch (error) {
// // //       console.error(error)
// // //     }
// // //   }

// //   return (
// //     <tr>
// //       <td className='px-5 py-5 border-b bg-white text-sm'>
// //         <img src='' className='h-10 w-10 rounded object-cover' />
// //       </td>

// //       <td className='px-5 py-5 border-b bg-white text-sm'>
// //        food
// //       </td>

// //       <td className='px-5 py-5 border-b bg-white text-sm'>
// //         quantity
// //       </td>

// //       <td className='px-5 py-5 border-b bg-white text-sm'>
// //         $price
// //       </td>

// //       {/* DELETE */}
// //       <td className='px-5 py-5 border-b bg-white text-sm'>
// //         <button
// //           onClick={() => setIsOpen(true)}
// //           className='px-3 py-1 bg-red-200 rounded-full'
// //         >
// //           Delete
// //         </button>

// //         <DeleteModal
// //           isOpen={isOpen}
// //           closeModal={closeModal}
// //         //   onConfirm={handleDelete}
// //           title='Delete Meal?'
// //           message='This meal will be permanently deleted.'
// //         />
// //       </td>

// //       {/* UPDATE */}
// //       <td className='px-5 py-5 border-b bg-white text-sm'>
// //         <button
// //           onClick={() => setIsEditModalOpen(true)}
// //           className='px-3 py-1 bg-green-200 rounded-full'
// //         >
// //           Update
// //         </button>

// //         <UpdateMealModal
// //           isOpen={isEditModalOpen}
// //           setIsEditModalOpen={setIsEditModalOpen}
// //           meal={meal}
// //           refetch={refetch}
// //         />
// //       </td>
// //     </tr>
// //   )
// // }

// // export default MealDataRow
// import { useState } from 'react'
// import DeleteModal from '../../../Modal/DeleteModal'
// import UpdateMealModal from '../../../Modal/UpdateMealModal '


// const MealDataRow = () => {
//   let [isOpen, setIsOpen] = useState(false)
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false)

//   function openModal() {
//     setIsOpen(true)
//   }
//   function closeModal() {
//     setIsOpen(false)
//   }

//   return (
//     <tr>
//       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//         <div className='flex items-center'>
//           <div className='shrink-0'>
//             <div className='block relative'>
//               <img
//                 alt='profile'
//                 src='https://i.ibb.co.com/rMHmQP2/money-plant-in-feng-shui-brings-luck.jpg'
//                 className='mx-auto object-cover rounded h-10 w-15 '
//               />
//             </div>
//           </div>
//         </div>
//       </td>
//       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//         <p className='text-gray-900 '>Money Plant</p>
//       </td>
//       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//         <p className='text-gray-900 '>Indoor</p>
//       </td>
//       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//         <p className='text-gray-900 '>$120</p>
//       </td>
//       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//         <p className='text-gray-900 '>5</p>
//       </td>

//       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//         <span
//           onClick={openModal}
//           className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
//         >
//           <span
//             aria-hidden='true'
//             className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
//           ></span>
//           <span className='relative'>Delete</span>
//         </span>
//         <DeleteModal isOpen={isOpen} closeModal={closeModal} />
//       </td>
//       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//         <span
//           onClick={() => setIsEditModalOpen(true)}
//           className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
//         >
//           <span
//             aria-hidden='true'
//             className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
//           ></span>
//           <span className='relative'>Update</span>
//         </span>
//         <UpdateMealModal
//           isOpen={isEditModalOpen}
//           setIsEditModalOpen={setIsEditModalOpen}
//         />
//       </td>
//     </tr>
//   )
// }

// export default MealDataRow



import { useState } from 'react'

import DeleteModal from '../../../Modal/DeleteModal'
import UpdateMealForm from '../../form/UpdateMealForm'
import UpdateMealModal from '../../../Modal/UpdateMealModal'


const MealDataRow = ({meal}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const closeDeleteModal = () => setIsOpen(false)
  const closeEditModal = () => setIsEditOpen(false)
 
  const {
    image,
    foodname,
    price,
    rating,
    ingredients,
    delivery,
    chef,
  } = meal;



  return (
    <tr>
      <td className='px-5 py-5 border-b bg-white text-sm'>
        <img
          src={image}
          className='h-10 w-10 rounded'
        />
      </td>

      <td className='px-5 py-5 border-b bg-white text-sm'>{foodname}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{ingredients}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{price}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{rating}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{delivery}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{chef?.name}</td>
      <td className='px-5 py-5 border-b bg-white text-sm'>{chef?.uid}</td>

      {/* DELETE */}
      <td className='px-5 py-5 border-b bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='px-3 py-1 bg-red-200 rounded-full'
        >
          Delete
        </button>

        <DeleteModal
          isOpen={isOpen}
          closeModal={closeDeleteModal} // ✅ function
        />
      </td>

      {/* UPDATE */}
      <td className='px-5 py-5 border-b bg-white text-sm'>
        <button
          onClick={() => setIsEditOpen(true)}
          className='px-3 py-1 bg-green-200 rounded-full'
        >
          Update
        </button>

        <UpdateMealModal
          isOpen={isEditOpen}
          closeModal={closeEditModal} // ✅ function
        />
      </td>
    </tr>
  )
}

export default MealDataRow
