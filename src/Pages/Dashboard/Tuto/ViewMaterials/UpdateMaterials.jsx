import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoUpload } from "react-icons/go";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import { useMutation } from "@tanstack/react-query";

const UpdateMaterials = () => {
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();
  
  const { tutorEmail, _id, sessionID, title, imageURL, DriveLink} = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const link = form.link.value;
    const imageUrl = form.imageUrl.value;
    const tutorEmail = form.tutorEmail.value;
    const sessionId = form.sessionId.value;
    try {
      // create sessionInfo
      const sessionInfo = {
        title: title,
        sessionID: sessionId,
        tutorEmail: tutorEmail,
        imageURL: imageUrl,
        DriveLink: link,
      };
      await mutateAsync({sessionInfo})
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const {mutateAsync} = useMutation({
    mutationFn: async({sessionInfo}) => {
      const { data } = await axiosCommon.put(`/updateMaterial/${_id}`,
        sessionInfo);
        console.log(data);
        return data
    },
    onSuccess: () => {
      toast.success("Update Material Successful");
      navigate('/dashboard/viewMaterials')
    }
  })
  
  return (
    <>
      <Helmet>
        <title>Tutor | Update Materials</title>
      </Helmet>
      <div className="flex justify-center items-center mx-auto container px-4">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
          <div className="w-full lg:w-1/2 px-6 py-8 md:px-8 mx-auto">
          <div>
            <h2 className="text-white uppercase font-medium text-center text-xl">Update material</h2>
          </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-2">
              <span className="text-sm text-white">Material Title :</span>
                <input
                  id="title"
                  name="title"
                  defaultValue={title}
                  className="block w-full px-4 py-1 rounded-sm text-gray-500 bg-white  border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-2">
              <span className="text-sm text-white">Session Id :</span>
                <input
                  id="sessionId"
                  name="sessionId"
                  defaultValue={sessionID}
                  className="block w-full px-4 py-1 text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  type="text"
                />
              </div>
              <div className="mt-2">
              <span className="text-sm text-white">Tutor Email :</span>
                <input
                  id="tutorEmail"
                  name="tutorEmail"
                  defaultValue={tutorEmail}
                  className="block w-full px-4 py-1 text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  type="email"
                />
              </div>

              <div className="mt-2">
              <span className="text-sm text-white">Image Url :</span>
                <input
                  id="imageUrl"
                  name="imageUrl"
                  defaultValue={imageURL}
                  className="block w-full px-4 py-1 text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  type="text"
                />
              </div>

              <div className="mt-2">
                <span className="text-sm text-white">Drive Link :</span>
                <input
                  id="link"
                  name="link"
                  defaultValue={DriveLink}
                  className="block w-full px-4 py-1 rounded-sm text-gray-500 bg-white  border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 mx-auto w-full text-md px-4 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#41CF9F] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#41CF9F] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 rounded-sm"
                >
                  <GoUpload className="text-lg" />
                  Update Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMaterials;
