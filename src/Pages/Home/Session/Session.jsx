
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import Data from "./Data";

const Session = () => {

    const axiosCommon = useAxiosCommon();


    const {
        data: sessions = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["session"],
        queryFn: async () => {
          const { data } = await axiosCommon.get("/commonSession");
          return data;
        },
      });
    

    //   let month = today.getMonth() + 1;
    //   let year = today.getFullYear();
    //   let date = today.getDate();
    //   let currentDate = `${date}/${month}/${year}`

    // console.log(currentDate);

    // const currentDate = new Date();

    // const regStart = new Date(session.regStart);
  

    


    return (
        <div className="container mx-auto px-4 py-3 text-center">
            <div className="my-2 md:my-8">
                <h2 className="text-4xl mx-auto font-medium text-black uppercase">Study session</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sessions.map((session) => (
                <Data key={session._id} session={session}/>

              ))}
             
            </div> 
            <div>
            <button className="border-[1px] border-[#41CF9F] hover:bg-[#41CF9F] hover:text-white py-1 px-3 font-medium text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-4">READ MORE</button>
            </div>           
        </div>
    );
};

export default Session;