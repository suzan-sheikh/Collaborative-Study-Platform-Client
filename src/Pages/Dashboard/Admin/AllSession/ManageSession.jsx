import { Helmet } from "react-helmet";
import ManageSessionRow from "./ManageSessionRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Loader/Loader";

const ManageSession = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: sessions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/manageSession");
      return data;
    },
  });

  console.log(sessions);

  if (isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Admin | Manage Session</title>
      </Helmet>

      <div className="container mx-auto max-w-[66rem]">
        <div className="bg-[#003430] border-b-2 p-1">
          <h2 className="text-xl text-center text-white uppercase">Mange Session</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead className="bg-[#003430] border-b border-[#003430] text-white  text-center uppercase">
              <tr>
                <th>Serial</th>
                <th>Session Title</th>
                <th>Session Tutor Name</th>
                <th>Session Tutor Email</th>
                <th>Registration Start</th>
                <th>Registration end</th>
                <th>Class Start</th>
                <th>Class end</th>
                <th>duration</th>
                <th>Session Description</th>
                <th>Registration Fee</th>
                <th>Status</th>
                <th>action</th>
                <th>reject</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {sessions.map((session, index) => (
                <ManageSessionRow
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
    </>
  );
};

export default ManageSession;
