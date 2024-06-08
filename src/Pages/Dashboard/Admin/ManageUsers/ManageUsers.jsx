
import { Helmet } from "react-helmet"
import MangeUserRow from "./MangeUserRow"

const ManageUsers = () => {
  return (
    <>
      <Helmet>
        <title>Admin | Manage Users</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>


          <div className="flex p-1 overflow-hidden bg-[#003430] justify-center border-b border-gray-200">
            <input
              className="px-4 py-1 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              placeholder="Search hear"
            />

            <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider bg-emerald-500 hover:bg-blue-500 text-white transition-all">
              Search
            </button>
          </div>


            <div className='inline-block min-w-full shadow rounded-sm overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Serial
                    </th>                      
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Name
                    </th>                   
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Email
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Role
                    </th>                     
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Change Role
                    </th>                      
                  </tr>
                </thead>
                <tbody>
                  <MangeUserRow/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUsers
