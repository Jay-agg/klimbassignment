import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserForm() {
  const [user, setUser] = useState({
    id: null,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
    location: "",
    department: "",
  });
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userToEdit = storedUsers.find((u) => u.id === parseInt(id));
      if (userToEdit) setUser(userToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = storedUsers.some(
      (u) =>
        u.email.toLowerCase() === user.email.toLowerCase() && u.id !== user.id
    );

    if (emailExists) {
      setError("Email ID already exists.");
      return;
    } else {
      setError("");
    }

    if (user.id) {
      const updatedUsers = storedUsers.map((u) =>
        u.id === user.id ? user : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } else {
      user.id = new Date().getTime();
      storedUsers.push(user);
      localStorage.setItem("users", JSON.stringify(storedUsers));
    }
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Edit User" : "Add User"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              FIRST NAME
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              LAST NAME
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={user.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              PHONE
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={user.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              EMAIL ID
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              ROLE
            </label>
            <input
              type="text"
              name="role"
              id="role"
              value={user.role}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              LOCATION
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={user.location}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            DEPARTMENT/FUNCTION
          </label>
          <input
            type="text"
            name="department"
            id="department"
            value={user.department}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {id ? "Update" : "Add"} User
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
