
// import useAuth from '../../../hooks/useAuth'
// import useAxiosSecure from '../../../hooks/useAxiosSecure'
// import { useQuery } from '@tanstack/react-query'
// import BookingDataRow from '../../../components/Dashboard/TableRows/BookingDataRow'
// import LoadingSpinner from '../../../components/Shared/LoadingSpinner'

import { Helmet } from "react-helmet"
import ManageNoteRow from "./ManageNoteRow"

const ManageNote = () => {
  // const { user } = useAuth()
  // const axiosSecure = useAxiosSecure()
  // //   Fetch Bookings Data
  // const {
  //   data: bookings = [],
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['my-bookings', user?.email],
  //   queryFn: async () => {
  //     const { data } = await axiosSecure.get(`/my-bookings/${user?.email}`)

  //     return data
  //   },
  // })

  // if (isLoading) return <LoadingSpinner />
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

                  <ManageNoteRow/>

                  {/* <BookingDataRow/> */}
                  {/* Table Row Data */}

                  {/* {bookings.map(booking => (
                    <BookingDataRow
                      key={booking._id}
                      booking={booking}
                      refetch={refetch}
                    />
                  ))} */}
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
