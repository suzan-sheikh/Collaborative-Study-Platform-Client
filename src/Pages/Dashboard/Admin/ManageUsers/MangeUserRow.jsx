import PropTypes from "prop-types";
import { AiOutlineEdit } from "react-icons/ai";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import UpdateUserModal from "./UpdateUserModal";

const MangeUserRow = ({user, refetch, index}) => {

  const {user: loggedInUser} = useAuth()
  const axiosSecure = useAxiosSecure()
  const [isOpen, setIsOpen] = useState(false);

  const {mutateAsync} = useMutation({
    mutationFn: async role => {
      const {data} = await axiosSecure.patch(`/users/update/${user?.email}`, role)
      return data
    },
    onSuccess: data => {
      console.log(data);
      toast.success('role updated')
      refetch()
      setIsOpen(false)
    }
  })


  const modalHandler = (selected) => {
      console.log(loggedInUser, user?.email);
    if(loggedInUser?.email === user?.email) {

      toast.error('Action Not Allowed')
      return setIsOpen(false)
    }
    const role = {
      role: selected,
    }
    mutateAsync(role)
  };



  return (
    <tr>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         {index+1}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {user?.name}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
        {user?.email}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
        {user?.role}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm mx-auto">
        <div className="flex justify-center">
          <button onClick={() => setIsOpen(true)} className="text-white flex items-center gap-2 bg-[#003430] hover:bg-[#42CE9F] px-3 py-1 rounded-sm transition-all">
            <AiOutlineEdit className="text-white text-lg font-black" />
            Update Role
          </button>
        </div>
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td>
    </tr>
  );
};

MangeUserRow.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default MangeUserRow;
