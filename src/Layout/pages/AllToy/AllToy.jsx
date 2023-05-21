import React, { useState } from "react";
import LegosData from "./LegosData/LegosData";
import useTitle from "../../../hooks/useTitel";

const AllToy = () => {
  useTitle("All Legos Toys")
  const [legosData, setLegosData] = useState([]);
  const handleViewDetails = (lego) => {
    setLegosData(lego);
  };

  fetch("https://toy-marketplace-server-side-moktubat.vercel.app/allData")
    .then((res) => res.json())
    .then((data) => setLegosData(data));
  console.log(legosData);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className="text-center font-bold py-4 text-3xl dark:text-white">
              All Legos Information
            </h1>
            <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Seller
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Toy Name
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Sub-category
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Available Quantity
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    View Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {legosData.map((lego, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500 text-base font-bold">
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {lego.sellerName}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {lego.toy_name}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {lego.sub_category}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {lego.price}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {lego.quantity}
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      <a
                        // href={`legoData/${_id}`}
                        class="px-6 py-3 text-blue-100 no-underline rounded bg-[#7A3E3E] hover:bg-[#643A6B] hover:underline"
                      >
                        View Details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
