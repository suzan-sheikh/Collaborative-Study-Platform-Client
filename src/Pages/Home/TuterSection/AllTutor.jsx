/* eslint-disable react-hooks/exhaustive-deps */

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MangeUserRow from "./AllTutorRow";

const AllTutor = () => {
  const axiosSecure = useAxiosSecure();
  // const { loading } = useAuth();

  const { data: allTutor = [] } = useQuery({
    queryKey: ["user"],
    // enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get("/user");
      return data;
    },
  });

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-sm overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430] border-b border-[#003430] text-white text-center text-sm uppercase font-medium"
                    >
                      Serial
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430] border-b border-[#003430] text-white text-center text-sm uppercase font-medium"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430] border-b border-[#003430] text-white text-center text-sm uppercase font-medium"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430] border-b border-[#003430] text-white text-center text-sm uppercase font-medium"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allTutor.map((tutor, index) => (
                    <MangeUserRow key={tutor._id} tutor={tutor} index={index} />
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

export default AllTutor;
