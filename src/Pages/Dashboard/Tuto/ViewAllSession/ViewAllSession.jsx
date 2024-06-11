import { Helmet } from "react-helmet";
import SessionRow from "./SessionRow";

import Loader from "../../../../Pages/Loader/Loader";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";

const ViewAllSession = () => {
  const axiosSecure = useAxiosSecure();

  const [id, setId] = useState()

  const {
    data: sessions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/session");
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (status) => {
      const { data } = await axiosSecure.patch(
        `/rejectSession/update/${id}`,
        status
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Send Request Success");
      refetch();
    },
  });

  const handleStatusChange = (currentStatus, currentId) => {
    if (currentStatus == 'pending') {
      toast.error("Only Rejected Session Allow!");
      return
    }else if(currentStatus == 'approved'){
      toast.error("Session Already Approved by Admin!");
      return
    }  
    const status = {
      status: 'pending',
    };
    setId(currentId)
    mutateAsync(status)
  };
  if (isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Tutor | All Session</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-sm overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Serial
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Session Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Session Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Rejection Reason
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Feedback
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session, index) => (
                    <SessionRow
                      key={session._id}
                      session={session}
                      index={index}
                      handleStatusChange={handleStatusChange}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllSession;
