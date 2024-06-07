import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Loader from "../../Loader/Loader";


const Tutor = () => {

    const axiosCommon = useAxiosCommon()

    const {
        data: user = {},
        isLoading,
      } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
          const { data } = await axiosCommon.get(`/user`)
          return data
        },
      })
      

      if (isLoading) return <Loader/>

    return (
        <div>
            <h2 className="text-center text-2xl">Tutor Section </h2>            
            <h2 className="text-center text-2xl">Total User is : {user.length}</h2>            
        </div>
    );
};

export default Tutor;