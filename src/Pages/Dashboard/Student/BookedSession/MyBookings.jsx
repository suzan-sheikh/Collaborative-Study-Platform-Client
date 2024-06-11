
// import useAuth from '../../../hooks/useAuth'
// import useAxiosSecure from '../../../hooks/useAxiosSecure'
// import { useQuery } from '@tanstack/react-query'
// import BookingDataRow from '../../../components/Dashboard/TableRows/BookingDataRow'
// import LoadingSpinner from '../../../components/Shared/LoadingSpinner'

import { Helmet } from "react-helmet"
import BookingDataRow from "../../../../components/Dashboard/TableRows/BookingDataRow"
import useAuth from "../../../../hooks/useAuth"
import useAxiosSecure from "../../../../hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"
import Loader from "../../../Loader/Loader"

const MyBookings = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  //   Fetch Bookings Data
  const {
    data: bookings = [],
    isLoading,
  } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/sessionBookingInfo/${user?.email}`)

      return data
    },
  })
console.log(bookings);
  if (isLoading) return <Loader />
  return (
    <>
      <Helmet>
        <title>Student | My Bookings</title>
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
                      className='px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium'
                    >
                      Student Name
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium'
                    >
                      Class Start Date
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium'
                    >
                     Class End Date
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 bg-[#003430] border-b text-white  text-center text-sm uppercase font-medium'
                    >
                     Fee
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(booking => (
                    <BookingDataRow
                      key={booking._id}
                      booking={booking}
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

export default MyBookings
