import { useNavigate, useParams } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader/Loader";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const SessionDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {user} = useAuth()



  const axiosCommon = useAxiosCommon();
  const { data: session = {}, isLoading } = useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/getToID/${id}`);
      return data;
    },
  });

  const handleSubmit = async () => {
    try {
      const {
        _id,
        title,
        status,
        fee,
        tutorEmail,
        tutorName,
        classEndDate,
        classStartDate,
        regEnd,
        regStart,
        description,
        duration,
      } = session; 
      const bookingInfo = {        
        sessionId: _id,
        title,
        studentName: user?.displayName,
        studentEmail: user?.email,
        status,
        fee,
        tutorEmail,
        tutorName,
        classEndDate,
        classStartDate,
        regEnd,
        regStart,
        description,
        duration,
      };

      console.log(bookingInfo);
      await saveUser(bookingInfo);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const saveUser = async (bookingInfo) => {
    try {
      const { data } = await axiosCommon.post("/sessionBookingInfo", bookingInfo);
      toast.success("Session Booking compleat");
      navigate("/");
      return data;
    } catch (error) {
      console.error("Error saving material:", error);
      toast.error("Booking Failed");
      throw error;
    }
  };

  if (isLoading) return <Loader />;
  return (
    <div className="flex justify-center items-center mx-auto my-4 container px-4 mt-20">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
        <div className="w-full px-6 py-8 md:px-8 mx-auto">
          <p className="text-white text-4xl mx-auto font-medium uppercase text-center">
            Thi is Session Title
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Tutor name : </span>
              <p className="text-lg font-medium">{session?.tutorName}</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Average rating : </span>
              <p className="text-lg font-medium">{0}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">
                Registration start date :
              </span>
              <p className="text-lg font-medium">{session?.regStart}</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">
                Registration end date :{" "}
              </span>
              <p className="text-lg font-medium">{session?.regEnd}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Class start time : </span>
              <p className="text-lg font-medium">{session?.classStartDate}</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Class end date : </span>
              <p className="text-lg font-medium">{session?.classEndDate}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Session duration : </span>
              <p className="text-lg font-medium">{session?.duration}</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Registration Fee : </span>
              <p className="text-lg font-medium"> $ {session?.fee}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Review : </span>
              <p className="text-lg font-medium">****</p>
            </div>
          </div>

          <p className="mt-3 text-lg text-justify text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum
            aut eius quae laudantium quia?
          </p>

          <div className="flex flex-col md:flex-row justify-between mt-2">
            <button
              onClick={handleSubmit}
              className="text-xl w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#41CF9F] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#41CF9F] rounded-sm focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
