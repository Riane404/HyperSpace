"use client";

import { useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddProduct: FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [spaceRequired, setSpaceRequired] = useState<number>(0);
  const [type, setType] = useState<string>("Static");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (productName === "" || price <= -1 || spaceRequired <= 0) {
      toast.error("Please fill all fields");
      return;
    }

    const client = localStorage.getItem("client") || "";

    if (client === "") {
      router.push("/client/login");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", productName);
    formdata.append("price", price.toString());
    formdata.append("category", "any");
    formdata.append("client", client);
    formdata.append("spaceRequired", spaceRequired.toString());
    formdata.append("type", type);

    const res = await fetch(
      "https://mvr40.pythonanywhere.com/api/v1/addproduct",
      {
        method: "POST",
        body: formdata,
      }
    );

    if (res.status === 200) {
      toast.success("Product added successfully");
      router.push("/client/products");
    } else {
      toast.error("Error adding product");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("client") == null) {
      router.push("/client/login");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="m-10 rounded-3xl mx-32 p-10 bg-gray-900">
      <h1 className="text-4xl font-bold text-center">Add Product</h1>
      <div className="my-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product Name
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          placeholder="Product Price"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Space Required (in square feet)
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={spaceRequired}
          onChange={(e) => setSpaceRequired(parseInt(e.target.value))}
          placeholder="Space Required"
        />
      </div>

      <div className="mb-9">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Types
        </label>
        <select
          id="types"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Static">Static</option>
          <option value="Dynamic">Dynamic</option>
        </select>
      </div>

      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;

