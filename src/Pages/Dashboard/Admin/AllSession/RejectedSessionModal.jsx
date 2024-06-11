import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import RejectedSessionForm from "./RejectedSessionForm";

const RejectedSessionModal = ({
  setRejectedModalOpen,
  isOpen,
  session,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (rejectedInfo) => {
      const { data } = await axiosSecure.put(
        `/rejectedAdmin/${session?._id}`,
        rejectedInfo
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Update Success!");
      refetch();
      setRejectedModalOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const reason = form.reason.value;
    const feedback = form.feedback.value;
    try {
      const rejectedInfo = {
        reason,
        feedback,
        status: "rejected",
      };

      console.log(rejectedInfo);
      await mutateAsync(rejectedInfo);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setRejectedModalOpen(false)}
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
                  Rejected Session Info
                </DialogTitle>
                <div className="mt-2 w-full">
                  {/* Update room form */}
                  <RejectedSessionForm handleSubmit={handleSubmit}/>
                </div>
                <hr className="mt-8 " />
                <div className="mt-2 ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setRejectedModalOpen(false)}
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

RejectedSessionModal.propTypes = {
  setRejectedModalOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  session: PropTypes.Object,
  refetch: PropTypes.func,
};

export default RejectedSessionModal;
