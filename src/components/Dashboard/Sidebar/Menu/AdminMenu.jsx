import { FaUserCog } from 'react-icons/fa'
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { DiMaterializecss } from "react-icons/di";
import MenuItem from './MenuItem'
const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='All Users' address='manageUsers' />
      <MenuItem icon={LiaChalkboardTeacherSolid} label='All Study Session' address='manageSession' />
      <MenuItem icon={DiMaterializecss} label='All Materials' address='manageMaterials' />
    </>
  )
}

export default AdminMenu
