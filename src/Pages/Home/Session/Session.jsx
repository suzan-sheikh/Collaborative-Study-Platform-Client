import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

const Session = () => {
    return (
        <div className="container mx-auto px-4 py-3 text-center">
            <div className="my-2 md:my-8">
                <h2 className="text-4xl mx-auto font-medium text-black uppercase">Study session</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col justify-center items-center gap-2 p-2 py-6 border-[1px] rounded-3xl border-[#41CF9F] hover:bg-[#41CF9F] hover:text-white transition ease-in-out delay-150">
                    <FaSchool className="text-4xl" />
                    <h2 className="text-2xl font-medium">School Solutions</h2>
                    <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className="px-6 py-1 bg-black inline-block text-white">Close</span>
                    <Link to='/session-details' className="font-medium hover:underline">Read More</Link>
                </div>               
            </div> 
            <div>
            <button className="border-[1px] border-[#41CF9F] hover:bg-[#41CF9F] hover:text-white py-1 px-3 font-medium text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">READ MORE</button>
            </div>           
        </div>
    );
};

export default Session;