import PropTypes from "prop-types";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const ManageSessionRow = () => {
  return (
    <tr>
      <th>1</th>
      <td>This is title</td>
      <td>Md Suzan Sheikht</td>
      <td>example@meil.com</td>
      <td>12/06/2024</td>
      <td>12/06/2024</td>
      <td>12/06/2024</td>
      <td>12/06/2024</td>
      <td>07 Month</td>
      <td>Lorem ipsum dolor sit</td>
      <td>0</td>
      <td>Pending</td>
      <td>
        <button className="bg-[#003430] hover:bg-[#42CE9F] px-3 py-1 rounded-sm transition-all">
          <IoCheckmarkSharp className="text-white text-lg font-black" />
        </button>
      </td>
      <td>
        <button className="bg-[#003430] hover:bg-red-500 px-3 py-1 rounded-sm transition-all">
          <RxCross1 className="text-white text-lg font-black" />
        </button>
      </td>
    </tr>
  );
};
ManageSessionRow.propTypes = {
  booking: PropTypes.object,
  refetch: PropTypes.func,
};

export default ManageSessionRow;
