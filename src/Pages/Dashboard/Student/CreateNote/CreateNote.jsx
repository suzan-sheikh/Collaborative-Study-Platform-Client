import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const CreateNote = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const { user, loading } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: user?.email,
        },
        { withCredentials: true }
      );
      navigate(from, { replace: true });
      toast.success("Login Successful");
      reset();
    } catch (err) {
      toast.error("Login Failed");
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
                  defaultValue={"default@email.com"}
                  className="block w-full px-4 py-1 rounded-sm text-gray-500 border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  {...register("email", { required: true })}
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
                  name=""
                  id=""
                  className="w-full h-20 px-4 pt-4 focus:border-none focus:outline-none rounded-sm"
                  placeholder="Enter You Description"
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
