
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CreateNote = () => {


  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const studentNoteInfo = async (noteInfo) => {
    try {
      const { data } = await axiosSecure.post("/createNote", noteInfo);
      toast.success("Create Note successful");
      return data;
    } catch (error) {
      console.error("Create Note error:", error);
      toast.error("Failed to create Note");
      throw error; // Rethrow the error if you need further handling elsewhere
    }
  };
  
  const onSubmit = async (data) => {
    const { title, description } = data;
    const noteInfo = {
      studentEmail: user?.email,       
      title, description
    };
    try {
      studentNoteInfo(noteInfo);
      reset();
    } catch (err) {
      toast.error("Create Note fail!");
    }
  };

  if (user && loading) return;

  return (
    <>
      <Helmet>
        <title>Student | Create Note</title>
      </Helmet>
      <div className="flex justify-center items-center mx-auto container px-4">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
          <div className="w-1/2 px-6 py-8 md:px-8 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <input
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-1 bg-white rounded-sm text-gray-500 border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
                {errors.email && (
                  <span className="text-primary">This field is required</span>
                )}
              </div>

              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  placeholder="Enter Your Note Title"
                  className="block w-full px-4 py-1 rounded-sm text-gray-500 bg-white  border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-primary">This field is required</span>
                )}
              </div>
              <div className="my-2">
                <textarea
                  id="description"
                  name="description"
                  className="w-full h-20 px-4 pt-4 focus:border-none focus:outline-none rounded-sm"
                  placeholder="Enter You Description"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="mx-auto w-full text-md px-4 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#41CF9F] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#41CF9F] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 rounded-sm"
                >
                  Login Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
