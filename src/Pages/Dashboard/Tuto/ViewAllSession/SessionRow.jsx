
import PropTypes from 'prop-types'
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const SessionRow = () => { 
  return (
    <tr>
      <td className='px-2 py-2 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center'>01</p>
      </td>
      <td className='px-2 py-2 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center'>New Session title</p>
      </td>
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center bg-pink-300'>Pending</p>
      </td>      
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm mx-auto'>
        <div className='flex justify-center'>
          <button className='bg-[#003430] hover:bg-[#42CE9F] px-3 py-1 transition-all text-white rounded-sm'> Send Request</button>

        </div>
      </td>
    </tr>
  )
}

SessionRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
}

export default SessionRow
