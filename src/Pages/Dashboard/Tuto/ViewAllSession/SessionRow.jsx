import PropTypes from "prop-types";

const SessionRow = ({session, index, handleStatusChange }) => {

  const currentStatus = session?.status;
  const currentId = session?._id;

  return (
    <tr>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {index + 1}
        </p>
      </td>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {session?.title}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p
          className={`cursor-pointer px-6 text-sm py-1 flex items-center justify-center ${
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
          {session?.status}
        </p>
      </td>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        {session?.status == 'rejected' ?         <p className="text-gray-900 whitespace-no-wrap text-center">
          {session?.reason}
        </p> : <p className="text-gray-900 whitespace-no-wrap text-center">
          No Reason
        </p>}

      </td>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
      {session?.status == 'rejected' ?         <p className="text-gray-900 whitespace-no-wrap text-center">
        {session?.feedback}
        </p> : <p className="text-gray-900 whitespace-no-wrap text-center">
          No Feedback
        </p>}
        <p className="text-gray-900 whitespace-no-wrap text-center">
          
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm mx-auto">
        <div className="flex justify-center">
          <button onClick={() => handleStatusChange(currentStatus, currentId)} className="bg-[#003430] hover:bg-[#42CE9F] px-3 py-1 transition-all text-white rounded-sm">
          sent request
          </button>
        </div>
      </td>
    </tr>
  );
};

SessionRow.propTypes = {
  session: PropTypes.object,
  index: PropTypes.number,
  handleStatusChange: PropTypes.func,
};

export default SessionRow;
