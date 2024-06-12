
import { CiPen } from "react-icons/ci";
import { RiListSettingsLine } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import MenuItem from './MenuItem'

const StudentMenu = () => {


  const [role] = 'guest'

  return (
    <>
      <MenuItem icon={CiPen} label='View Book Session' address='my-bookings'/>
      <MenuItem icon={CiSquarePlus} label='Create Note' address='createNote'/>
      <MenuItem icon={RiListSettingsLine} label='Manage Notes' address='manageNote'/>
      <MenuItem icon={AiOutlineEye} label='View All Materials' address='student-material'/>
    </>
  )
}

export default StudentMenu
