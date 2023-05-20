import React, { useState } from "react";
import LegosData from "./LegosData/LegosData";

const AllToy = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [legosData, setLegosData] = useState([]);
  const handleViewDetails = (lego) => {
    setLegosData(lego);
    setModalOpen(true);
  };

  fetch("http://localhost:5000/allData")
    .then((res) => res.json())
    .then((data) => setLegosData(data));
  console.log(legosData);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h1 className="text-center font-bold py-4 text-3xl dark:text-white">All Legos Information</h1>
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
                  <tr key={index} className="border-b dark:border-neutral-500">
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
                      <button onClick={() => handleViewDetails(lego)}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {modalOpen && selectedToy && (
              <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="bg-white p-4">
                  <h2>{selectedToy.toy_name}</h2>
                  <p>Seller: {selectedToy.sellerName}</p>
                  <p>Sub-category: {selectedToy.sub_category}</p>
                  <p>Price: {selectedToy.price}</p>
                  <p>Available Quantity: {selectedToy.quantity}</p>
                  <button onClick={closeModal}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
