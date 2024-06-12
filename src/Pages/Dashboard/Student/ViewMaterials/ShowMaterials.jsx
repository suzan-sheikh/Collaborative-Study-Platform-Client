import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Loader/Loader";
import MaterialsRow from "./MaterialsRow";

const ShowMaterials = () => {
  const { sessionID } = useLoaderData();

  console.log(sessionID);

  const axiosSecure = useAxiosSecure();
  //   Fetch Bookings Data
  const { data, isLoading } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allMaterials/${sessionID}`);

      return data;
    },
  });

  if (isLoading) return <Loader />;
  return (
    <>
      <Helmet>
        <title>Student | Materials</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-sm overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium"
                    >
                      Serial
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium"
                    >
                      Image Download
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 bg-[#003430] border-b text-white text-center text-sm uppercase font-medium"
                    >
                      Drive Link
                    </th>
                  </tr>
                </thead>

                {data.map((material, index) => (
                  <MaterialsRow key={material._id} material={material} index={index} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowMaterials;
