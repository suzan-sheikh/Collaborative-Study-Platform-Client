import { Helmet } from "react-helmet";
import MangeUserRow from "./MangeUserRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Loader/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const [itemPerPage, setItemPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(
        `/allJobs?page=${currentPage}&size=${itemPerPage}&search=${search}`
      );
      setJobs(data);
    };
    getData();
  }, [axiosSecure, currentPage, itemPerPage, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosSecure(
        `/jobsCount?search=${search}`
      );
      setCount(data.count);
    };
    getCount();
  }, [axiosSecure, search]);

  console.log(count);

  // pagination
  const numberOfPages = Math.ceil(count / itemPerPage);

  const pages = [...Array(Math.ceil(numberOfPages)).keys()].map(
    (element) => element + 1
  );

  // handle pagination button
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setSearch(searchText);
  };
  return (
    <>
      <Helmet>
        <title>Admin | Manage Users</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="flex p-1 overflow-hidden bg-[#003430] justify-center border-b border-gray-200">
              <form onSubmit={handleSearch}>
                <div className="flex p-1 overflow-hidden rounded-lg">
                  <input
                    className="px-4 py-1 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                    type="text"
                    name="search"
                    placeholder="Enter Job Title"
                    aria-label="Enter Job Title"
                    onChange={(e) => setSearchText(e.target.value)}
                  />

                  <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider hover:bg-emerald-500 bg-blue-500 text-white transition-all">
                    Search
                  </button>
                </div>
              </form>
            </div>

            <div className="inline-block min-w-full shadow rounded-sm overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Serial
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Change Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((user, index) => (
                    <MangeUserRow
                      key={user._id}
                      user={user}
                      // refetch={refetch}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center m-12">
                <button
                  disabled={currentPage == 1}
                  onClick={() => handlePaginationButton(currentPage - 1)}
                  className="px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-green-500 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
                >
                  <div className="flex items-center -mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-1 rtl:-scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>

                    <span className="mx-1">previous</span>
                  </div>
                </button>

                {pages.map((btnNum) => (
                  <button
                    onClick={() => handlePaginationButton(btnNum)}
                    key={btnNum}
                    className={`hidden ${
                      currentPage === btnNum ? "bg-blue-500 text-white" : ""
                    } px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                  >
                    {btnNum}
                  </button>
                ))}

                <button
                  disabled={currentPage == numberOfPages}
                  onClick={() => handlePaginationButton(currentPage + 1)}
                  className="px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  <div className="flex items-center -mx-1">
                    <span className="mx-1">Next</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-1 rtl:-scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
