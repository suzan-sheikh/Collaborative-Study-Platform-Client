import { Helmet } from "react-helmet";
import Loader from "../../../../../Pages/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import ApprovedSessionRow from "./ApprovedSessionRow";
import useAxiosCommon from "../../../../../hooks/useAxiosCommon";

const ViewApprovedSession = () => {
  const axiosCommon = useAxiosCommon();

  const {
    data: approvedSession = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/approved");
      return data;
    },
  });

  console.log(approvedSession);

  if (isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Tutor | Upload Materials</title>
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
                      Approval Request Send to Admin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {approvedSession.map((session, index) => (
                    <ApprovedSessionRow 
                    key={session._id}
                    session={session}
                    refetch={refetch}
                    index={index}                   
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

export default ViewApprovedSession;
