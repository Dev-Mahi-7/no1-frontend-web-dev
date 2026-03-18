"use client";
import React, { useState } from "react";

const PromisesContainer = () => {
    //eslint-disable-next-line
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const result = await res.json();
      setData(result);
      //eslint-disable-next-line
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={fetchData}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Fetch Data
      </button>
      {loading && <p>Loading... ⏳</p>}

      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="p-4 border rounded">
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
};

export default PromisesContainer;
