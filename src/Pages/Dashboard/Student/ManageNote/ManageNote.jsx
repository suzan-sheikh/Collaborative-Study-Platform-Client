import { Helmet } from "react-helmet"
import ManageNoteRow from "./ManageNoteRow"
import useAxiosSecure from "../../../../hooks/useAxiosSecure"
import useAuth from "../../../../hooks/useAuth"
import { useQuery } from "@tanstack/react-query"
import Loader from "../../../Loader/Loader"

const ManageNote = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  //   Fetch Student Note Data
  const {
    data: notes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['my-bookings', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/studentNote')
      return data
    },
  })

  if (isLoading) return <Loader/>
  return (
    <>
      <Helmet>
        <title>Student | Manage Note</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-sm overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
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
                      Title
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
                      Update
                    </th>                   
                    <th
                      scope='col'
                      className='px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium'
                    >
                      Delete
                    </th>                   
                  </tr>
                </thead>
                <tbody>
                  {notes.map(note => (
                    <ManageNoteRow
                      key={note._id}
                      note={note}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageNote
