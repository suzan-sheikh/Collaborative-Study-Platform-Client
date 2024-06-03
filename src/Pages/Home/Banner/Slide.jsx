const Slide = ({ image, heading, subheading, bg }) => {
  return (
    <div
      className={`w-full bg-center bg-cover h-[10rem] md:h-[542px] ${bg}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full container py-3 sm:py-1 mx-auto px-4 gap-4">
        
        <div className="w-1/2 flex flex-col gap-4 text-white">
          <h2 className="text-2xl font-medium">{heading}</h2>
          <p className="text-4xl font-medium">{subheading}</p>
          <div className="flex p-1 overflow-hidden">
            <input
              className="px-4 py-1 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              placeholder="Search hear"
            />

            <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider bg-emerald-500 hover:bg-blue-500 text-white transition-all">
              Search
            </button>
          </div>
        </div>
        <div className="w-full h-full">
        <img src={image} alt="banner image" className="w-full h-full" />
      </div>
      </div>
    </div>
  );
};

export default Slide;
