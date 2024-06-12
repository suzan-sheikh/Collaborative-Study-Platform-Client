import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const axiosCommon = useAxiosCommon();
  const { setUser, updateUserProfile, createUser, user, loading } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveUser = async (userInfo) => {
    const registerUser = {
      name: userInfo?.name,
      email: userInfo?.email,
      role: userInfo?.role,
    };
    const { data } = await axiosCommon.put("/user", registerUser);
    return data;
  };

  const onSubmit = async (data) => {
    const { name, photoURL, email, password, role } = data;
    const userInfo = { name, email, role };
    try {
      //2. User Registration
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);
      // Optimistic UI Update
      setUser({ ...result?.user, photoURL: photoURL, displayName: name });
      toast.success("SignUp Successful");
      saveUser(userInfo);
      reset();
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Register fail");
    }
  };

  if (user && loading) return;
  return (
    <div className="flex justify-center items-center mx-auto my-4 container px-4 mt-20">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 mx-auto">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="logo" />
          </div>

          <p className="mt-3 text-xl text-center text-white">
            Get Your Free Account Now.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-full mb-2">
                <label
                  className="block mb-2 text-sm font-medium text-white "
                  htmlFor="LoggingEmailAddress"
                >
                  Name
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  name="name"
                  className="block w-full px-4 py-1 text-gray-500 border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-[#45CD9F]">This field is required</span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-1/2">
                <label
                  className="block mb-2 text-sm font-medium text-white "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  name="email"
                  className="block w-full px-4 py-1 text-gray-500 border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-[#45CD9F]">This field is required</span>
                )}
              </div>

              <div className="w-full md:w-1/2">
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-white"
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                </div>
                <input
                  id="loggingPassword"
                  autoComplete="current-password"
                  name="password"
                  className="block w-full px-4 py-1 text-gray-500 bg-white  border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-[#45CD9F]">This field is required</span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-1/2">
                <label
                  className="block mb-2 text-sm font-medium text-white mt-1"
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  autoComplete="photo"
                  name="photo"
                  className="block w-full px-4 py-1 text-gray-500 border rounded-lg bg-white focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-[#45CD9F]">This field is required</span>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className="text-white" htmlFor="category">
                  Role
                </label>
                <select
                  name="role"
                  id="role"
                  {...register("role")}
                  className="border p-1 rounded-md"
                >
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#41CF9F] to-[#3B82F6] hover:from-pink-500 hover:to-purple-500 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Register Now
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-white uppercase  hover:underline"
            >
              or Sign-In Now
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
