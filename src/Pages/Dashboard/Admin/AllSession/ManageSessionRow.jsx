import PropTypes from "prop-types";
import { AiOutlineEdit } from "react-icons/ai";

const ManageSessionRow = () => {
  return (
    <tr>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          This is Session Title
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         Md Suzan Sheikh
        </p>
      </td>

      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         12/22/2024
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         12/22/2024
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         12/22/2024
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         12/22/2024
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, aspernatur beatae minus explicabo id iusto?
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         07 Month
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

ManageSessionRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
};

export default ManageSessionRow;
