
import { Helmet } from "react-helmet"
import ManageSessionRow from "./ManageSessionRow"

const ManageSession = () => {
  return (
    <>
      <Helmet>
        <title>Admin | Manage Session</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='min-w-full shadow rounded-sm overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Title
                    </th>                      
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Tutor Name
                    </th>                   
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Tutor Email
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Registration Start
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Registration End
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      class Start
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Class End
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Description
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Duration
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Registration Fee
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Status
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Change Role
                    </th>                      
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Approved
                    </th>                      
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Pending
                    </th>                      
                  </tr>
                </thead>
                <tbody>
                  <ManageSessionRow/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageSession
