import PropTypes from "prop-types";
const RejectedSessionForm = ({ handleSubmit}) => {
  return (
    <div className="w-full text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="space-y-1 text-sm">
          <input
            type="text"
            className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
            name="reason"
            id="reason"
            placeholder="Rejection Reason"
            required
          />
        </div>

        <div className="my-2 w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md s">
          <textarea
            name="feedback"
            id="feedback"
            className="w-full h-20 px-4 pt-4 focus:border-none focus:outline-none rounded-sm"
            placeholder="Enter You Description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500 hover:bg-red-600"
        >
          Rejected Now
        </button>
      </form>
    </div>
  );
};

RejectedSessionForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default RejectedSessionForm;
