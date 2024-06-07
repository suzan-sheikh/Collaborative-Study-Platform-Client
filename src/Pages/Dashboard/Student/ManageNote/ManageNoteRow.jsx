
import PropTypes from 'prop-types'
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import { Link } from 'react-router-dom'

const ManageNoteRow = () => {

  
  // const axiosSecure = useAxiosSecure()
  // const [isOpen, setIsOpen] = useState(false)
  // const closeModal = () => {
  //   setIsOpen(false)
  // }

  // //   delete
  // const { mutateAsync } = useMutation({
  //   mutationFn: async id => {
  //     const { data } = await axiosSecure.delete(`/booking/${id}`)
  //     return data
  //   },
  //   onSuccess: async data => {
  //     refetch()
  //     toast.success('Booking Canceled')
  //     //   Change Room booked status back to false
  //     await axiosSecure.patch(`/room/status/${booking?.roomId}`, {
  //       status: false,
  //     })
  //   },
  // })

  // //  Handle Delete
  // const handleDelete = async id => {
  //   try {
  //     await mutateAsync(id)
  //   } catch (err) {
  //   }
  // }

  return (
    <tr>
      <td className='px-2 py-2 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center'>mdsuzan@gmail.com</p>
      </td>
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center'>mdsuzan@gmail.com</p>
      </td>
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center'>mdsuzan@gmail.com</p>
      </td>      
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm mx-auto'>
        <div className='flex justify-center'>
          <button className='bg-[#003430] hover:bg-[#42CE9F] px-3 py-1 rounded-sm transition-all'><AiOutlineEdit  className='text-white text-lg font-black'/></button>

        </div>
      </td>
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm'>
        <div className='flex justify-center'>
        <button className='bg-[#003430] hover:bg-red-500 px-3 py-1 rounded-sm transition-all'><MdDelete  className='text-white text-lg font-black'/></button>
        </div>
      </td>
    </tr>
  )
}

ManageNoteRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}

export default ManageNoteRow
