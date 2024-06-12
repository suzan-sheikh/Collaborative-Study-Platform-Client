
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MaterialsDataRow = ({booking}) => {  

  console.log(booking)

  return (
    <tr>      
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
        <p>{booking?.title}</p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
      {booking?.studentName}
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{booking.classStartDate}</p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
        {booking.classEndDate}
        </p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
         $ {booking.fee}
        </p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 text-center text-sm'>
      <Link to={`/dashboard/ShowMaterials/${booking._id}`}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-[#42CE9F] rounded-sm'
          ></span>
          <span className='relative text-white'>See Materials</span>
        </Link>
      </td>
    </tr>
  )
}

MaterialsDataRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}

export default MaterialsDataRow
