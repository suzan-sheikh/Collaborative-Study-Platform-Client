import PropTypes from 'prop-types'
const UpdateSessionForm = ({ handleSubmit, setFeeType, feeType }) => {
  const categories = [{label: "Paid",},{label: "Free",}];
  return (
    <div className="w-full text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600">
              Paid or Free
            </label>
            <select
              required
              defaultValue={'Paid'}
              onChange={(e) =>
                setFeeType(e.target.value)
              }
              className="w-full px-4 py-3 border-rose-300 outline-rose-500 rounded-md border"
              name="category"
            >
              {categories.map((category) => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="price"
                id="price"
                disabled={feeType=='Free'}
                defaultValue={0}
                type="number"
                placeholder="Price"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500 hover:bg-red-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

UpdateSessionForm.propTypes = {
  handleSubmit: PropTypes.func,
  feeType: PropTypes.object,
  setFeeType: PropTypes.func,
  setPrice: PropTypes.func,
}

export default UpdateSessionForm;
