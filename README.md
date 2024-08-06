# User Management System

This is an assignment for Klimb.io Frontend Developer Internship.

## Features

- **User CRUD Operations**: Add, edit, and view users.
- **Search Functionality**: Search users by email with autocomplete suggestions.
- **Autocomplete Suggestions**: Search suggestions displayed in the format "Name - Email".

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing between different views (e.g., user list, user form).
- **Local Storage**: To persist user data across page reloads.
- **Tailwind CSS**: For styling and responsive design.
- **Heroicons**: For icons used in search and add actions.

## Project Structure

```
/src
  /components
    UserForm.js         # Component for adding and editing user details
    UserList.js         # Component for displaying the list of users and search functionality
  App.js                # Main component managing routes
  index.js              # Entry point of the React application
  styles.css            # Global styles (Tailwind CSS)
```

## Usage

### User Form

- **Add User**: Navigate to `/add` to access the user form where you can enter user details.
- **Edit User**: Click "Edit" on a user entry in the list to modify existing details.

### User List

- **Search**: Use the search bar to find users by email. Suggestions will appear as you type, formatted as "Name - Email".
- **View Details**: Click "Edit" to modify user details.

## Code Explanation

### UserForm Component

Handles adding and editing user details.

- **State Management**: Uses React's `useState` to manage form data.
- **Data Persistence**: Reads from and writes to local storage.
- **Form Handling**: Submits form data and updates local storage with new or edited user information.

### UserList Component

Displays the list of users and provides search functionality.

- **State Management**: Uses React's `useState` to manage search terms, users, and suggestions.
- **Search and Autocomplete**: Filters users based on email input and shows suggestions.
- **Data Fetching**: Retrieves users from local storage and populates the list.

#Created by Jayant Aggarwal
