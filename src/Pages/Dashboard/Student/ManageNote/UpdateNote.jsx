import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const UpdateNote = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { studentEmail, description, title, _id } = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const studentEmail = form.email.value;
    const description = form.description.value;
    try {
      // create NoteInfo
      const noteInfo = {
        title,
        studentEmail,
        description
      };
      await mutateAsync({ noteInfo });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async ({ noteInfo }) => {
      const { data } = await axiosSecure.put(
        `/updateNote/${_id}`,
        noteInfo
      );
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Update Note Successful");
      navigate("/dashboard/manageNote");
    },
  });

  return (
    <>
      <Helmet>
        <title>Student | Update Note</title>
      </Helmet>
      <div className="flex justify-center items-center mx-auto container px-4">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
          <div className="w-1/2 px-6 py-8 md:px-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <input
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  name="email"
                  defaultValue={studentEmail}
                  className="block w-full px-4 py-1 rounded-sm text-gray-500 border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  defaultValue={title}
                  className="block w-full px-4 py-1 rounded-sm text-gray-500 bg-white  border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="my-2">
                <textarea
                  id="description"
                  name="description"
                  className="w-full h-20 px-4 pt-4 focus:border-none focus:outline-none rounded-sm"
                  defaultValue={description}
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

export default UpdateNote;
