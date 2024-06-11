import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

const Data = ({session}) => {

    const currentDate = new Date();

    const regStart = new Date(session.regStart);
    const regEnd = new Date(session.regEnd);

    const isCurrentDateInRange =
    currentDate >= regStart && currentDate <= regEnd;



  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 p-2 py-6 border-[1px] rounded-3xl border-[#41CF9F] hover:bg-[#41CF9F] hover:text-white transition ease-in-out delay-150">
        <FaSchool className="text-4xl" />
        <h2 className="text-2xl font-medium">{session?.title}</h2>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {isCurrentDateInRange ? <span className="px-6 py-1 bg-black inline-block text-white">
          ongoing
        </span> : <span className="px-6 py-1 bg-black inline-block text-white">
          close
        </span>}


        <Link to="/session-details" className="font-medium hover:underline">
          Read More
        </Link>
      </div>
    </>
  );
};

export default Data;
