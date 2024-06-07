import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { DiMaterializecss } from "react-icons/di";
import MenuItem from "./MenuItem";
const TutorMenu = () => {
  return (
    <>
      <MenuItem icon={CiSquarePlus} label="Create Session" address="createSession"/>
      <MenuItem icon={AiOutlineEye} label="View All Sessions" address="allSession"/>
      <MenuItem icon={MdOutlineFileUpload} label="Upload Materials" address="uploadMaterials"/>
      <MenuItem icon={DiMaterializecss} label="View All Materials" address="manage-bookings"/>
    </>
  );
};

export default TutorMenu;
