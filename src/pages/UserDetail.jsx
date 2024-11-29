import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500 text-xl">Loading...</p>;
  }

  if (!user) {
    return <h2 className="text-center text-red-500 text-xl">User not found</h2>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 px-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        {/* Back to User List Button */}
        <Link to="/" className="text-blue-500 hover:underline block mb-6">
          ← Back to User List
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section: User Details */}
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-4">{user.name}</h1>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Email:</span>{" "}
                {user.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Phone:</span>{" "}
                {user.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Address:</span>{" "}
                {`${user.address.street}, ${user.address.city}`}
              </p>
            </div>
          </div>

          {/* Right Section: Company Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Company Details
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Name:</span>{" "}
                {user.company.name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Catchphrase:</span>{" "}
                {user.company.catchPhrase}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">BS:</span>{" "}
                {user.company.bs}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
