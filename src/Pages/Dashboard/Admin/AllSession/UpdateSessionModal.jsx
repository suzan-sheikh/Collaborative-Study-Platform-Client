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
import UpdateSessionForm from "./UpdateSessionForm";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UpdateSessionModal = ({
  setIsEditModalOpen,
  isOpen,
  session,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();
  // const axiosCommon = useAxiosCommon();

  const [feeType, setFeeType] = useState("Paid");

  const { mutateAsync } = useMutation({
    mutationFn: async (updateInfo) => {
      const { data } = await axiosSecure.patch(
        `/manageAdmin/update/${session?._id}`,
        updateInfo
      );
      console.log(data);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Update Success!");
      refetch();
      setIsEditModalOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;

    try {
      const updateInfo = {
        price: price,
        feeType: feeType,
        status: "approved",
      };

      if (price == 0 && feeType == "Paid") {
        toast.error("Please Enter Session Fee Amount");
        return;
      }

      await mutateAsync(updateInfo);
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
        onClose={() => setIsEditModalOpen(false)}
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
                  Update Room Info
                </DialogTitle>
                <div className="mt-2 w-full">
                  {/* Update room form */}
                  <UpdateSessionForm
                    handleSubmit={handleSubmit}
                    feeType={feeType}
                    setFeeType={setFeeType}
                  />
                </div>
                <hr className="mt-8 " />
                <div className="mt-2 ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsEditModalOpen(false)}
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

UpdateSessionModal.propTypes = {
  setIsEditModalOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  session: PropTypes.Object,
  refetch: PropTypes.func,
};

export default UpdateSessionModal;
