import PropTypes from "prop-types";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import UpdateSessionModal from "./UpdateSessionModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import RejectedSessionModal from "./RejectedSessionModal";
import { useState } from "react";
import UpdateApprovedModal from "./UpdateApprovedModal";

const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid date";
    }
    return date.toISOString().split("T")[0];
  } catch (error) {
    return "Invalid date";
  }
};

const ManageSessionRow = ({ session, refetch, index }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [rejectedModalOpen, setRejectedModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const {
    title,
    duration,
    description,
    regStart,
    regEnd,
    classStartDate,
    classEndDate,
    tutorName,
    tutorEmail,
    fee,
    status,
  } = session;

  const { mutateAsync } = useMutation({
    mutationFn: async ({ id }) => {
      const { data } = await axiosSecure.delete(`/deleteSession/${id}`);
      return data;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["session"] });
    },
  });
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync({ id });
      }
    });
  };

  // const {mutateAsync} = useMutation({
  //   mutationFn: async role => {
  //     const {data} = await axiosSecure.patch(`/users/update/${user?.email}`, role)
  //     return data
  //   },
  //   onSuccess: data => {
  //     console.log(data);
  //     toast.success('role updated')
  //     // refetch()
  //     setIsOpen(false)
  //     getData()
  //   }
  // })

  // const handleRejected = () => {

  //   const status = {
  //     status: rejected,
  //   }
  //   mutateAsync(status)
  // };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{tutorName}</td>
      <td>{tutorEmail}</td>
      <td>{formatDate(regStart)}</td>
      <td>{formatDate(regEnd)}</td>
      <td>{formatDate(classStartDate)}</td>
      <td>{formatDate(classEndDate)}</td>
      <td>{duration}</td>
      <td title={description}>{description.substring(0, 10)}....</td>
      <td>{fee}</td>
      <td>
        <button
          className={`cursor-pointer text-sm flex items-center justify-center py-1 px-2 min-w-20 ${
            session?.status === "pending" &&
            "text-white bg-blue-500 hover:bg-blue-100/80 hover:text-blue-500 transition-all"
          } ${
            session?.status === "approved" &&
            "text-white bg-emerald-500 hover:bg-emerald-100/80 hover:text-emerald-500 transition-all"
          } ${
            session?.status === "rejected" &&
            "text-white bg-pink-500 hover:bg-pink-100/80 hover:text-pink-500 transition-all"
          }`}
        >
          {status}
        </button>
      </td>

      {status === "approved" && (
        <>
          <td>
            <button
              onClick={() => setUpdateModalOpen(true)}
              className="bg-[#003430] hover:bg-[#42CE9F] rounded-sm transition-all py-1 px-2 min-w-10 flex items-center justify-center"
            >
              <GoPencil className="text-white text-lg font-black" />
            </button>
            <UpdateApprovedModal
              isOpen={updateModalOpen}
              setUpdateModalOpen={setUpdateModalOpen}
              session={session}
              refetch={refetch}
            />
          </td>
          <td>
            <button className="bg-[#003430] hover:bg-[#42CE9F] rounded-sm transition-all py-1 px-2 min-w-10 flex items-center justify-center">
              <RiDeleteBin6Line
                onClick={() => handleDelete(session._id)}
                className="text-white text-lg font-black"
              />
            </button>
          </td>
        </>
      )}

      {status === "pending" && (
        <>
          <td>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="bg-[#003430] hover:bg-[#42CE9F] rounded-sm transition-all py-1 px-2 min-w-10 flex items-center justify-center"
            >
              <IoCheckmarkSharp className="text-white text-lg font-black" />
            </button>
            <UpdateSessionModal
              isOpen={isEditModalOpen}
              setIsEditModalOpen={setIsEditModalOpen}
              session={session}
              refetch={refetch}
            />
          </td>
          <td>
            <button
              onClick={() => setRejectedModalOpen(true)}
              className="bg-[#003430] hover:bg-[#42CE9F] rounded-sm transition-all py-1 px-2 min-w-10 flex items-center justify-center"
            >
              <RxCross1 className="text-white text-lg font-black" />
            </button>
            <RejectedSessionModal
              isOpen={rejectedModalOpen}
              setRejectedModalOpen={setRejectedModalOpen}
              session={session}
              refetch={refetch}
            />
          </td>
        </>
      )}
    </tr>
  );
};

ManageSessionRow.propTypes = {
  session: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ManageSessionRow;
