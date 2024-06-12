import { saveAs } from "file-saver";
import PropTypes from "prop-types";

const MaterialsRow = ({ material, index }) => {
  const imageLink = material?.imageURL;
  const downloadImage = () => {
    saveAs(imageLink, "material.png");
  };

  return (
    <>
      <tbody key={material._id}>
        <tr>
          <td className="px-2 py-2 border-b border-gray-200 text-center text-sm">
            <p>{index + 1}</p>
          </td>

          <td className="px-2 py-2 border-b border-gray-200 text-center text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              {material?.title}
            </p>
          </td>
          <td className="px-2 py-2 border-b border-gray-200 text-center text-sm">
            <div className="w-12 h-12 mx-auto">
              <img
                src={material?.imageURL}
                onClick={downloadImage}
                alt="image"
                className="w-full h-full rounded-sm cursor-pointer"
              />
            </div>
          </td>
          <td className="px-2 py-2 border-b border-gray-200 text-center text-sm">
            <button
              onClick={downloadImage}
              className=" bg-[#003430] text-white py-1 px-2 whitespace-no-wrap"
            >
              <a target="blank">Download Now</a>
            </button>
          </td>
          <td className="px-2 py-2 border-b border-gray-200 text-center text-sm">
            <button className=" bg-[#003430] text-white py-1 px-2 whitespace-no-wrap">
              <a href={material?.DriveLink} target="blank">
                Visit Google Drive
              </a>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

MaterialsRow.propTypes = {
  material: PropTypes.object,
};

export default MaterialsRow;
