import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/20/solid";

function UserList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length === 0) {
      const dummyUsers = [
        {
          id: 1,
          firstName: "Jayant",
          lastName: "Aggarwal",
          phone: "123-456-7890",
          email: "jayant@example.com",
          role: "Developer",
          location: "Delhi",
          department: "Engineering",
        },
        {
          id: 2,
          firstName: "ABC",
          lastName: "XYZ",
          phone: "987-654-3210",
          email: "ABC@example.com",
          role: "Designer",
          location: "Bangalore",
          department: "Design",
        },
        {
          id: 3,
          firstName: "Test",
          lastName: "123",
          phone: "555-555-5555",
          email: "Test@example.com",
          role: "Project Manager",
          location: "Mumbai",
          department: "Management",
        },
      ];
      localStorage.setItem("users", JSON.stringify(dummyUsers));
      setUsers(dummyUsers);
    } else {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = users.filter((user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, users]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.email);
    setSuggestions([]);
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management System</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Manage Users</h3>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search for email"
                value={searchTerm}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <MagnifyingGlassIcon className="w-5 text-gray-400 absolute left-3 top-3" />
              {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full max-h-40 overflow-y-auto">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    >
                      {suggestion.firstName} {suggestion.lastName} -{" "}
                      {suggestion.email}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link
              to="/add"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add
            </Link>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Function
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/edit/${user.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
