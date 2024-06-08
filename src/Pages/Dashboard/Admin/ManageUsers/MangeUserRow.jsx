import PropTypes from "prop-types";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const MangeUserRow = () => {
  return (
    <tr>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          01
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         Md Suzan Sheikh
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          mdsuzan@gmail.com
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          Student
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm mx-auto">
        <div className="flex justify-center">
          <button className="bg-[#003430] hover:bg-[#42CE9F] px-3 py-1 rounded-sm transition-all">
            <AiOutlineEdit className="text-white text-lg font-black" />
          </button>
        </div>
      </td>
    </tr>
  );
};

MangeUserRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
};

export default MangeUserRow;
