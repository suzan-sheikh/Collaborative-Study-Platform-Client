import PropTypes from "prop-types";
const AllTutorRow = ({tutor, index}) => {
    return (
    <tr>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
         {index+1}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
          {tutor?.name}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
        {tutor?.email}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
        {tutor?.role}
        </p>
      </td>
      <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap text-center">
        {tutor?.email}
        </p>
      </td>
    </tr>
  );
};

AllTutorRow.propTypes = {
  tutor: PropTypes.object,
  index: PropTypes.number,
};

export default AllTutorRow;
