import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import UpdateApprovedForm from "./UpdateApprovedForm";

const UpdateApprovedModal = ({
  setUpdateModalOpen,
  isOpen,
  session,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();

  const [status, setStatus] = useState(session?.status);

  const [postDate, setPostDate] = useState(new Date(session?.regStart));
  const [dedLine, setDedLine] = useState(new Date(session?.regEnd));
  const [classStart, setClassStart] = useState(
    new Date(session?.classStartDate)
  );
  const [classEnd, setClassEnd] = useState(new Date(session?.classEndDate));

  const regStart = postDate.toISOString().split("T")[0];
  const regEnd = dedLine.toISOString().split("T")[0];
  const classStartDate = classStart.toISOString().split("T")[0];
  const classEndDate = classEnd.toISOString().split("T")[0];

  // const { mutateAsync } = useMutation({
  //   mutationFn: async updateInfo => {
  //     const { data } = await axiosSecure.patch(`/manageAdmin/update/${session?._id}`, updateInfo);
  //     return data;
  //   },
  //   onSuccess: data => {
  //     toast.success('Update Success!');
  //     refetch();
  //     setUpdateModalOpen(false);
  //   },
  //   onError: error => {
  //     toast.error('Failed to update session');
  //   },
  // });

  const { mutateAsync } = useMutation({
    mutationFn: async (updateInfo) => {
      const { data } = await axiosSecure.put(
        `/updateAdminSession/update/${session?._id}`,
        updateInfo
      );
      console.log(data);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Update Success!");
      refetch();
      setUpdateModalOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const duration = form.duration.value;
    const description = form.description.value;
    const tutorName = form.name.value;
    const tutorEmail = form.email.value;
    const fee = form.fee.value;

    try {
      const updateInfo = {
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
      };

      // console.log(updateInfo);
      await mutateAsync(updateInfo);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setUpdateModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update Session Info
                </DialogTitle>
                <div className="mt-2 w-full">
                  <UpdateApprovedForm
                    handleSubmit={handleSubmit}
                    refetch={refetch}
                    session={session}
                    postDate={postDate}
                    setPostDate={setPostDate}
                    dedLine={dedLine}
                    setDedLine={setDedLine}
                    classStart={classStart}
                    setClassStart={setClassStart}
                    classEnd={classEnd}
                    setClassEnd={setClassEnd}
                    setStatus={setStatus}
                  />
                </div>
                <hr className="mt-8 " />
                <div className="mt-2 ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setUpdateModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateApprovedModal.propTypes = {
  setUpdateModalOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  session: PropTypes.object,
  refetch: PropTypes.func,
};

export default UpdateApprovedModal;
