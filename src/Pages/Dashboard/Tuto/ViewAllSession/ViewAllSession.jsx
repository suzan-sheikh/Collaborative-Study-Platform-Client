import { Helmet } from "react-helmet";
import SessionRow from "./SessionRow";

import Loader from "../../../../Pages/Loader/Loader";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ViewAllSession = () => {
  const axiosSecure = useAxiosSecure();
  const [id, setId] = useState(); 

  const [itemPerPage, setItemPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    const { data } = await axiosSecure(
      `/allSession?page=${currentPage}&size=${itemPerPage}&search=${search}`
    );
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, [axiosSecure, currentPage, itemPerPage, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosSecure(`/sessionCount?search=${search}`);
      setCount(data.count);
    };
    getCount();
  }, [axiosSecure, search]);

  // pagination
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  // handle pagination button
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };


  
 


  // const {
  //   data: sessions = [],
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["session"],
  //   queryFn: async () => {
  //     const { data } = await axiosSecure.get("/session");
  //     return data;
  //   },
  // });

  const { mutateAsync } = useMutation({
    mutationFn: async (status) => {
      const { data } = await axiosSecure.patch(
        `/rejectSession/update/${id}`,
        status
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Send Request Success");
      getData();
    },
  });

  const handleStatusChange = (currentStatus, currentId) => {
    if (currentStatus == "pending") {
      toast.error("Only Rejected Session Allow!");
      return;
    } else if (currentStatus == "approved") {
      toast.error("Session Already Approved by Admin!");
      return;
    }
    const status = {
      status: "pending",
    };
    setId(currentId);
    mutateAsync(status);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };



  // if (isLoading) return <Loader />;
  return (
    <>
      <Helmet>
        <title>Tutor | All Session</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 overflow-x-auto">
          <div className="flex p-1 overflow-hidden bg-[#003430] justify-center border-b border-gray-200">
              <form onSubmit={handleSearch}>
                <div className="flex p-1 overflow-hidden rounded-lg">
                  <input
                    className="px-4 py-1 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                    type="text"
                    name="search"
                    placeholder="Search hear"
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
                      Session Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Session Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Rejection Reason
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Feedback
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((session, index) => (
                    <SessionRow
                      key={session._id}
                      session={session}
                      index={index}
                      handleStatusChange={handleStatusChange}
                    />
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center m-12">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePaginationButton(currentPage - 1)}
                  className="px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-green-500 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white"
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
                    } px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500 hover:text-white`}
                  >
                    {btnNum}
                  </button>
                ))}

                <button
                  disabled={currentPage === numberOfPages}
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

export default ViewAllSession;
