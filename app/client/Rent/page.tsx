"use client";
import { useState } from "react";

export default function RentPage() {
  const [rentDetails, setRentDetails] = useState([
    {
      id: 1,
      warehouse: "A",
      productName: "Electronics",
      status: "Pending",
      dueDate: "2025-02-10",
    },
    {
      id: 2,
      warehouse: "B",
      productName: "Furniture",
      status: "Paid",
      dueDate: "2025-02-15",
    },
    {
      id: 3,
      warehouse: "C",
      productName: "Clothing",
      status: "Pending",
      dueDate: "2025-03-01",
    },
    {
      id: 4,
      warehouse: "A",
      productName: "Groceries",
      status: "Pending",
      dueDate: "2025-03-10",
    },
    {
      id: 5,
      warehouse: "B",
      productName: "Stationery",
      status: "Paid",
      dueDate: "2025-04-05",
    },
    {
      id: 6,
      warehouse: "C",
      productName: "Appliances",
      status: "Pending",
      dueDate: "2025-04-15",
    }
  ]);

  return (
    <div className="min-h-screen bg-royal-blue flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rent Management</h1>
      <div className="w-full max-w-5xl bg-gold rounded-lg shadow-lg p-6">
        <table className="w-full border-collapse border border-gray-300 text-gray-900 dark:text-white">
          <thead>
            <tr className="bg-goldenrod">
              <th className="border border-gray-300 px-4 py-2 text-left">Warehouse</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Product Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {rentDetails.map((rent) => (
              <tr key={rent.id} className="hover:bg-lightgoldenrodyellow">
                <td className="border border-gray-300 px-4 py-2">{rent.warehouse}</td>
                <td className="border border-gray-300 px-4 py-2">{rent.productName}</td>
                <td className={`border border-gray-300 px-4 py-2 ${rent.status === "Paid" ? "text-green-600" : "text-red-600"}`}>{rent.status}</td>
                <td className="border border-gray-300 px-4 py-2">{rent.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}