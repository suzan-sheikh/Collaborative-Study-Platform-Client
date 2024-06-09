import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import toast from "react-hot-toast";
import { GoUpload } from "react-icons/go";
import { imageUpload } from "../../../../api/utils";

const UploadMaterials = () => {
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();

  const { tutorEmail, _id } = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const title = form.title.value;
    const link = form.link.value;
    try {
      // upload image and get image url
      const image_url = await imageUpload(image);
      // create sessionInfo
      const sessionInfo = {
        title,
        sessionID: _id,
        tutorEmail,
        imageURL: image_url,
        DriveLink: link,
      };
      await saveUser(sessionInfo);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const saveUser = async (sessionInfo) => {
    try {
      const { data } = await axiosCommon.post("/materials", sessionInfo);
      toast.success("Create material successful");
      navigate("/dashboard/uploadMaterials");
      return data;
    } catch (error) {
      console.error("Error saving material:", error);
      toast.error("Failed to create material");
      throw error;
    }
  };
  return (
    <>
      <Helmet>
        <title>Tutor | Upload Materials</title>
      </Helmet>
      <div className="flex justify-center items-center mx-auto container px-4">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
          <div className="w-1/2 px-6 py-8 md:px-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  placeholder="Enter Your Note Title"
                  className="block w-full px-4 py-1 rounded-sm text-gray-500 bg-white  border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  disabled
                  defaultValue={_id}
                  className="block w-full px-4 py-1 text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  type="email"
                />
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  disabled
                  defaultValue={tutorEmail}
                  className="block w-full px-4 py-1 text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  type="email"
                />
              </div>
              <div className="flex w-max mx-auto text-center items-center gap-2 mt-4">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => {
                      setImagePreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                    Upload Image
                  </div>
                </label>
                <div className="w-10 h-10 rounded-md mx-auto border-2 border-[#F43F5E]">
                  {imagePreview && (
                    <img className="w-full h-full " src={imagePreview} />
                  )}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="link"
                  name="link"
                  placeholder="Enter Google Drive Link"
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
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadMaterials;
