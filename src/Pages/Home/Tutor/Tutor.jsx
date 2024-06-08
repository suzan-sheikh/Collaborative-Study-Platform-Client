import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const Tutor = () => {

  const axiosSecure = useAxiosSecure()

  const {user, loading} = useAuth()

    const {
        data: userData = {},
        isLoading,
      } = useQuery({
        queryKey: ['user'], enabled:!loading,
        queryFn: async () => {
          const { data } = await axiosSecure.get('/user')
          return data
        },
      })
      

      if (isLoading) return <Loader/>

    return (
        <div>
            <h2 className="text-center text-2xl">Tutor Section </h2>            
            <h2 className="text-center text-2xl">Total User is : {userData.length}</h2>            
        </div>
    );
};

export default Tutor;