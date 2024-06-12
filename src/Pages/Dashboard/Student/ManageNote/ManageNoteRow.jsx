
import PropTypes from 'prop-types'
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useMutation} from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageNoteRow = ({refetch, note}) => {

  
  const axiosSecure = useAxiosSecure()

  const {mutateAsync} = useMutation({
    mutationFn: async ({id}) => {
      const {data} = await axiosSecure.delete(`/deleteNote/${id}`)
      return data
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      refetch()
      
    }
  })
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then( async (result) => {
      if (result.isConfirmed) {
        await mutateAsync({id})  
      }
    });
  };

  return (
    <tr>
      <td className='px-2 py-2 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center'>{note?.studentEmail}</p>
      </td>
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center'>{note?.title}</p>
      </td>
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap text-center'>{note?.description}</p>
      </td>      
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm mx-auto'>
        <div className='flex justify-center'>
          <Link to={`/dashboard/updateNote/${note._id}`} className='bg-[#003430] hover:bg-[#42CE9F] px-3 py-1 rounded-sm transition-all'><AiOutlineEdit  className='text-white text-lg font-black'/></Link>
        </div>
      </td>
      <td className='px-2 py-2  border-b border-gray-200 bg-white text-sm'>
        <div className='flex justify-center'>
        <button onClick={() => handleDelete(note._id)}  className='bg-[#003430] hover:bg-red-500 px-3 py-1 rounded-sm transition-all'><MdDelete  className='text-white text-lg font-black'/></button>
        </div>
      </td>
    </tr>
  )
}

ManageNoteRow.propTypes = {
  note: PropTypes.object,
  refetch: PropTypes.func,
}

export default ManageNoteRow
