
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BookingDataRow = () => {

  
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
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src='https://media.istockphoto.com/id/2118120743/photo/close-up-of-smiling-businessmen-discussing-documents-with-graphs-and-charts-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=LRjgfCggZm7gmA9hs9HCmN3zrHwzdX6F7w2l2KGpk-o='
                // src={booking?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>This is title</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src='https://media.istockphoto.com/id/2118120743/photo/close-up-of-smiling-businessmen-discussing-documents-with-graphs-and-charts-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=LRjgfCggZm7gmA9hs9HCmN3zrHwzdX6F7w2l2KGpk-o='
                // src={booking?.guest?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {/* {booking?.guest?.name} */}
              Student Name
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>$12500</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          10124111
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
         125454211
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <Link to='/dashboard/studentSessionDetailed'
          // onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-[#42CE9F] rounded-sm'
          ></span>
          <span className='relative text-white'>View Details</span>
        </Link>
        {/* Delete Modal */}
        {/* <DeleteModal
          handleDelete={handleDelete}
          closeModal={closeModal}
          isOpen={isOpen}
          id={booking?._id}
        /> */}
      </td>
    </tr>
  )
}

BookingDataRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}

export default BookingDataRow
