import { Helmet } from "react-helmet";
import ViewMaterialsRow from "./ViewMaterialsRow";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Loader/Loader";

const ViewMaterials = () => {
  const axiosCommon = useAxiosCommon();

  const {
    data: materials = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["material"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/materials");
      return data;
    },
  });

  console.log(materials);
  
  if (isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Tutor | View Materials</title>
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
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Session ID
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
                      Drive Link
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Update
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-[#003430]  border-b border-[#003430] text-white  text-center text-sm uppercase font-medium"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material) => (
                    <ViewMaterialsRow
                      key={material._id}
                      material={material}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMaterials;
