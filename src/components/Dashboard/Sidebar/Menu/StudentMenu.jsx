
import { CiPen } from "react-icons/ci";
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItem'

const StudentMenu = () => {


  const [role] = 'guest'

  return (
    <>
      <MenuItem icon={CiPen } label='View Book Session' address='my-bookings'/>
      <MenuItem icon={CiPen } label='Create Note' address='createNote'/>
      <MenuItem icon={CiPen } label='Manage Notes' address='my-bookings'/>
      <MenuItem icon={CiPen } label='View All Materials' address='my-bookings'/>
    </>
  )
}

export default StudentMenu
