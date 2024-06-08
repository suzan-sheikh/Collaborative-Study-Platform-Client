import { Helmet } from "react-helmet";
import ManageSessionRow from "./ManageSessionRow";

const ManageSession = () => {
  return (
    <>
      <Helmet>
        <title>Admin | Manage Session</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
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
                <th>approved</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <ManageSessionRow />
            </tbody>
          </table>
        </div>        
      </div>
    </>
  );
};

export default ManageSession;
