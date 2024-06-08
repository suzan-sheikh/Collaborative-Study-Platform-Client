import PropTypes from "prop-types";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ManageMaterialsRow = () => {
  return (
    <tr>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <div className="w-10 h-10 rounded-md mx-auto">
          <img className="w-full h-full " src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </td>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          This is Title
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          124
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          mdsuzan@gmail.com
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          http://sjfkdsjfdjslsjklsjdjskljsf.com
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <div className="flex justify-center">
          <button className="bg-[#003430] hover:bg-red-500 px-3 py-1 rounded-sm transition-all">
            <MdDelete className="text-white text-lg font-black" />
          </button>
        </div>
      </td>
    </tr>
  );
};

ManageMaterialsRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
};

export default ManageMaterialsRow;
