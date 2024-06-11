import PropTypes from "prop-types";
import { useState } from "react";
import DatePicker from "react-datepicker";
const UpdateApprovedForm = ({ handleSubmit, session, refetch, setStatus, postDate, setPostDate, dedLine, setDedLine, classStart, setClassStart, classEnd, setClassEnd}) => {

  const allStatus = [{label: "approved",} ,{label: "pending",} ,{label: "rejected",}];

  // const [postDate, setPostDate] = useState(session?.regStart);
  // const [dedLine, setDedLine] = useState(session?.regEnd);
  // const [classStart, setClassStart] = useState(session?.classStartDate);
  // const [classEnd, setClassEnd] = useState(session?.classEndDate);


  // console.log(postDate, dedLine, classStart, classEnd);

  // const regStart = postDate.toLocaleDateString();
  // const regEnd = dedLine.toLocaleDateString();


  // const classStartDate = classStart.toLocaleDateString();
  // const classEndDate = classEnd.toLocaleDateString();


  return (
    <div className="w-full rounded-x">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
            <div>
            <label>Session Title</label>
              <input
                id="title"
                name="title"
                defaultValue={session?.title}
                placeholder="Enter Session Title"
                className="block w-full px-4 py-1 rounded-sm bg-white  border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div>
            <label>Session Duration</label>
              <input
                id="duration"
                autoComplete="duration"
                defaultValue={session?.duration}
                placeholder="Enter Session Duration"
                className="block w-full px-4 py-1 rounded-sm border focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div>
            <label>Tutor Email</label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={session?.tutorEmail}
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
            <label>Tutor Name</label>
              <input
                id="name"
                type="name"
                name="name"
                defaultValue={session?.tutorName}
                className="block w-full px-4 py-1 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col">
              <label>Registration Start Date</label>
              <DatePicker
                className="border p-1 rounded-sm w-full text-center focus:outline-none"
                selected={postDate}
                onChange={(date) => setPostDate(date)}
              />
            </div>
            <div className="flex flex-col">
              <label>Registration End Date</label>
              <DatePicker
                className="border p-1 rounded-sm mx-auto w-full text-center focus:outline-none"
                selected={dedLine}
                onChange={(date) => setDedLine(date)}
              />
            </div>
            <div className="flex flex-col">
              <label>Class Start Date</label>
              <DatePicker
                className="border p-1 rounded-sm w-full text-center focus:outline-none"
                selected={classStart}
                onChange={(date) => setClassStart(date)}
              />
            </div>

            <div className="flex flex-col">
              <label>Class End Date</label>
              <DatePicker
                className="border p-1 rounded-sm mx-auto w-full text-center focus:outline-none"
                selected={classEnd}
                onChange={(date) => setClassEnd(date)}
              />
            </div>
          </div>

          <div className="mt-2">
            <label>Registration Fee</label>
            <input
              id="fee"
              type="fee"
              name="fee"
              defaultValue={session?.fee}
              className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-200 rounded-sm  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600">
              Status
            </label>
            <select
              required
              defaultValue={session?.status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="w-full px-4 py-3 border-rose-300 outline-rose-500 rounded-md border"
              name="category"
            >
              {allStatus.map((status) => (
                <option value={status.label} key={status.label}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>

          <div className="my-2 border-2">
            <textarea
              name="description"
              id="description"
              defaultValue={session?.description}
              className="w-full h-20 px-4 pt-4 focus:border-none focus:outline-none rounded-sm"
              placeholder="Enter You Description"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="w-full px-8 py-2.5 leading-5 text-white rounded-md transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500focus:outline-none focus:bg-gray-600">
              update Now
            </button>
          </div>
        </form>
    </div>
  );
};

UpdateApprovedForm.propTypes = {
  handleSubmit: PropTypes.func,
  refetch: PropTypes.func,
  session: PropTypes.func,
};

export default UpdateApprovedForm;
