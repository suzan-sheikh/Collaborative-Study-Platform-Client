const SessionDetails = () => {
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
              <p className="text-lg font-medium">Md Suzan Sheikh</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Average rating : </span>
              <p className="text-lg font-medium">05</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">
                Registration start date :{" "}
              </span>
              <p className="text-lg font-medium">12/04/2024</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">
                Registration end date :{" "}
              </span>
              <p className="text-lg font-medium">21/05/202</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Class start time : </span>
              <p className="text-lg font-medium">12/04/2024</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Class end date : </span>
              <p className="text-lg font-medium">21/05/202</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Session duration : </span>
              <p className="text-lg font-medium">21/05/202 To 22/4/2025</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Registration Fee : </span>
              <p className="text-lg font-medium"> $ 250</p>
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
