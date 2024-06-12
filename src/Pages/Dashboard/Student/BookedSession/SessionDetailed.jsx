import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";

const SessionDetailed = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [rating, setRating] = useState("2");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    try {
      // create reviewInfo
      const reviewInfo = {
        review,
        rating: parseInt(rating),
        sessionId,
        studentName,
        studentEmail,
        title,
        status,
        fee,
        tutorEmail,
        tutorName,
        classEndDate,
        classStartDate,
        regEnd,
        regStart,
        description,
        duration,
      };
      console.log(reviewInfo);
      await mutateAsync({ reviewInfo });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const {
    _id,
    sessionId,
    studentName,
    studentEmail,
    title,
    status,
    fee,
    tutorEmail,
    tutorName,
    classEndDate,
    classStartDate,
    regEnd,
    regStart,
    description,
    duration,
  } = useLoaderData();

  const { mutateAsync } = useMutation({
    mutationFn: async ({ reviewInfo }) => {
      const { data } = await axiosSecure.put(
        `/updateBooked/${_id}`,
        reviewInfo
      );
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Review And Rating added Successful");
      navigate("/dashboard/my-bookings");
    },
  });

  return (
    <div className="flex justify-center items-center mx-auto container px-4">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-4xl bg-[#006961] bg-no-repeat bg-cover">
        <div className="w-full px-6 py-8 md:px-8 mx-auto">
          <p className="text-white text-4xl mx-auto font-medium uppercase text-center">
            {title}
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Tutor name : </span>
              <p className="text-lg font-medium">{tutorName}</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Tutor Email : </span>
              <p className="text-lg font-medium">{tutorEmail}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Student name : </span>
              <p className="text-lg font-medium">{studentName}</p>
            </div>           

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Student Email : </span>
              <p className="text-lg font-medium">{studentEmail}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">
                Registration start date :
              </span>
              <p className="text-lg font-medium">{regStart}</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">
                Registration end date :
              </span>
              <p className="text-lg font-medium">{regEnd}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold">Class start time : </span>
              <p className="text-lg font-medium">{classStartDate}</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Class end date : </span>
              <p className="text-lg font-medium">{classEndDate}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Session duration : </span>
              <p className="text-lg font-medium">{duration}</p>
            </div>

            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Registration Fee : </span>
              <p className="text-lg font-medium"> $ {fee}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Review : </span>
              <p className="text-lg font-medium">{status}</p>
            </div>
            <div className="text-white flex gap-2 items-center justify-center">
              <span className="uppercase font-bold"> Registration Fee : </span>
              <p className="text-lg font-medium"> $ {sessionId}</p>
            </div>
          </div>

          <p className="mt-3 text-lg text-justify text-white">{description}</p>
          <div className="divider"></div>
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                name="review"
                id="review"
                className="w-full h-20 p-2 focus:border-none focus:outline-none"
                placeholder="Enter Your Review..."
              ></textarea>
            </div>

            <div className="rating w-full flex justify-center my-6">
              <input
                type="radio"
                name="rating-4"
                value="1"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating-4"
                value="2"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
                checked={rating === "2"}
              />
              <input
                type="radio"
                name="rating-4"
                value="3"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating-4"
                value="4"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating-4"
                value="5"
                className="mask mask-star-2 bg-green-500"
                onChange={handleRatingChange}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-2">
              <button
                className="mx-auto text-md px-4 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#41CF9F] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#41CF9F] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 rounded-sm"
                type="submit"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailed;

