import React from "react";

const LegosData = ({ legos }) => {
  const { _id, toy_name, sellerName, sub_category, price, quantity } = legos;

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">
                    #
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Seller
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Toy Name
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Sub-category
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Available Quantity
                  </th>
                  <th scope="col" class="px-6 py-4">
                    View Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td class="whitespace-nowrap px-6 py-4">{sellerName}</td>
                  <td class="whitespace-nowrap px-6 py-4">{toy_name}</td>
                  <td class="whitespace-nowrap px-6 py-4">{sub_category}</td>
                  <td class="whitespace-nowrap px-6 py-4">{price}</td>
                  <td class="whitespace-nowrap px-6 py-4">{quantity}</td>
                  <td>
                    <button onClick={() => handleViewDetails(toy)}>
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegosData;
