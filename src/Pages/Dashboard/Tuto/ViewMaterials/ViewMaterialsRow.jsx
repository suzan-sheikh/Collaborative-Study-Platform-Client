import {useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ViewMaterialsRow = ({ material }) => {

  const axiosSecure = useAxiosSecure()
  const queryClient = useQueryClient()

  const {mutateAsync} = useMutation({
    mutationFn: async ({id}) => {
      const {data} = await axiosSecure.delete(`/deleteMaterial/${id}`)
      return data
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      queryClient.invalidateQueries({queryKey: ['material']})
      
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
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <div className="w-10 h-10 rounded-md mx-auto">
          <img className="w-full h-full rounded-sm" src={material?.imageURL} />
        </div>
      </td>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {material?.title}
        </p>
      </td>
      <td
        title={material?.sessionID}
        className="px-2 py-2  border-b border-gray-200 bg-white text-sm"
      >
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {material?.sessionID.substring(0, 20)}....
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {material?.tutorEmail}
        </p>
      </td>
      <td
        title={material?.DriveLink}
        className="px-2 py-2  border-b border-gray-200 bg-white text-sm"
      >
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {material?.DriveLink.substring(0, 20)}....
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm mx-auto">
        <div className="flex justify-center">
          <Link to={`/dashboard/updateMaterial/${material._id}`}>
            <button className="bg-[#003430] hover:bg-[#42CE9F] px-3 py-1 rounded-sm transition-all">
              <AiOutlineEdit className="text-white text-lg font-black" />
            </button>
          </Link>
        </div>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <div className="flex justify-center">
          <button onClick={() => handleDelete(material._id)} className="bg-[#003430] hover:bg-red-500 px-3 py-1 rounded-sm transition-all">
            <MdDelete className="text-white text-lg font-black" />
          </button>
        </div>
      </td>
    </tr>
  );
};

ViewMaterialsRow.propTypes = {
  material: PropTypes.object,
  refetch: PropTypes.func,
};

export default ViewMaterialsRow;
