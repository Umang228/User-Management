import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(value) ||
          user.email.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        User List
      </h1>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={handleSearch}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
      />
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-bold text-gray-700">{user.name}</h2>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Phone: {user.phone}</p>
            <p className="text-sm text-gray-600">Company: {user.company.name}</p>
            <a
              href={`/users/${user.id}`}
              className="text-blue-600 font-medium hover:underline mt-4 inline-block"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
