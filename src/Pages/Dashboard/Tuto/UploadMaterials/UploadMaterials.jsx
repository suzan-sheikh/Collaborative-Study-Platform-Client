import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UploadMaterials = () => {
  const [imagePreview, setImagePreview] = useState();
  const {title, tutorEmail, _id} = useLoaderData();


  console.log(title, tutorEmail, _id, status);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Helmet>
        <title>Tutor | Upload Materials</title>
      </Helmet>
      <div className="flex justify-center items-center mx-auto container px-4">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
          <div className="w-1/2 px-6 py-8 md:px-8 mx-auto">
            <form>
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
              <div className="mt-2">
                <input
                  id="sessionId"
                  name="sessionId"
                  defaultValue={0}
                  className="block w-full px-4 py-1 rounded-sm text-gray-500 bg-white  border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="number"
                  {...register("sessionId", { required: true })}
                />
                {errors.sessionId && (
                  <span className="text-primary">This field is required</span>
                )}
              </div>

              <div className="mt-2">
                <input
                  id="email"
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
                  {...register("link", { required: true })}
                />
                {errors.link && (
                  <span className="text-primary">This field is required</span>
                )}
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

export default UploadMaterials;
