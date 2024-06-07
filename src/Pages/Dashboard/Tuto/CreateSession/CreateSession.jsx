import { useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const CreateSession = () => {
  const [postDate, setPostDate] = useState(new Date());
  const [dedLine, setDedLine] = useState(new Date());
  const [classStart, setClassStart] = useState(new Date());
  const [classEnd, setClassEnd] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Helmet>
        <title>Tutor | Create Session</title>
      </Helmet>
      <div className="flex justify-center items-center mx-auto container px-4">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
          <div className="w-full px-6 py-8 md:px-8 mx-auto">
            <form
            // data-aos="fade-left"
            // onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="text-lg font-semibold text-white uppercase text-center ">
                Create Study Session
              </h2>

              <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
                <div>
                  <input
                    id="title"
                    name="title"
                    placeholder="Enter Session Title"
                    className="block w-full px-4 py-1 rounded-sm text-gray-500 bg-white  border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <span className="text-primary">This field is required</span>
                  )}
                </div>
                <div>
                  <input
                    id="duration"
                    autoComplete="duration"
                    placeholder="Enter Session Duration"
                    className="block w-full px-4 py-1 rounded-sm text-gray-500 border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    {...register("duration", { required: true })}
                  />
                  {errors.duration && (
                    <span className="text-primary">This field is required</span>
                  )}
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    disabled
                    defaultValue={"your@mail.com"}
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <input
                    id="name"
                    type="name"
                    name="name"
                    disabled
                    defaultValue={"suzan"}
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Registration Start Date</label>
                  <DatePicker
                    className="border p-1 rounded-sm w-full text-center focus:outline-none"
                    selected={postDate}
                    onChange={(date) => setPostDate(date)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Registration End Date</label>
                  <DatePicker
                    className="border p-1 rounded-sm mx-auto w-full text-center focus:outline-none"
                    selected={dedLine}
                    onChange={(date) => setDedLine(date)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Class Start Date</label>
                  <DatePicker
                    className="border p-1 rounded-sm w-full text-center focus:outline-none"
                    selected={classStart}
                    onChange={(date) => setClassStart(date)}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white">Class End Date</label>
                  <DatePicker
                    className="border p-1 rounded-sm mx-auto w-full text-center focus:outline-none"
                    selected={classEnd}
                    onChange={(date) => setClassEnd(date)}
                  />
                </div>
              </div>

              <div className="my-2">
                <textarea
                  name="description"
                  id="description"
                  {...register("description")}
                  className="w-full h-20 px-4 pt-4 focus:border-none focus:outline-none rounded-sm"
                  placeholder="Enter You Description"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="w-full px-8 py-2.5 leading-5 text-white rounded-md transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500focus:outline-none focus:bg-gray-600">
                  Add Now
                </button>
              </div>
            </form>            
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSession;
