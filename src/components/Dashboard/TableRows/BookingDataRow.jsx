
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BookingDataRow = ({booking}) => {
  
  

  return (
    <tr>      
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
        <p>{booking?.title}</p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>

      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>$12500</p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          10124111
        </p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
         125454211
        </p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
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
