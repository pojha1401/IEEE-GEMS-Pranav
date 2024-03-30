

---

# Invitation API Backend

This is a backend application for handling user invitations, sign up, login, logout, and user profile editing functionalities. It is built using Express.js and MySQL.

## Setup

1. Clone the repository to your local machine:<br>
   ```bash<br>
   git clone https://github.com/pojha1401/IEEE-GEMS-Pranav.git
   ```

2. Install dependencies:<br>
   ```bash<br>
   npm install
   ```

3. Configure MySQL database:<br>
   - Ensure MySQL is installed on your system.<br>
   - Create a new database named `users`.<br>
   - Update the MySQL connection details in `app.js`:<br>
     ```javascript<br>
     const db = mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: 'your-mysql-password',
         database: 'users'
     });
     ```

4. Start the server:<br>
   ```bash<br>
   npm start
   ```

## Endpoints

### 1. Invite User

- **Endpoint:** `POST /api/invitation`<br>
- **Description:** Invite a user by providing their details.<br>
- **Request Body:**<br>
  ```json<br>
  {
      "name": "User Name",
      "email": "user@example.com",
      "phone_number": "1234567890",
      "alternate_email": "user2@example.com",
      "organization_name": "Organization",
      "role_in_organization": "Role",
      "valid_till": "2024-12-31"
  }
  ```
- **Response:**<br>
  ```json<br>
  {
      "id": 1
  }
  ```

### 2. Sign Up

- **Endpoint:** `POST /api/signup`<br>
- **Description:** Sign up a user by providing their unique ID and password.<br>
- **Request Body:**<br>
  ```json<br>
  {
      "id": "unique-id",
      "password": "password"
  }
  ```
- **Response:**<br>
  ```json<br>
  {
      "message": "User signed up successfully"
  }
  ```

### 3. Login

- **Endpoint:** `POST /api/login`<br>
- **Description:** Log in a user by providing their email and password.<br>
- **Request Body:**<br>
  ```json<br>
  {
      "email": "user@example.com",<br>
      "password": "password"<br>
  }
  ```
- **Response:** User details or error message.

### 4. Logout

- **Endpoint:** `POST /api/logout`<br>
- **Description:** Log out the user.

### 5. Edit User

- **Endpoint:** `PUT /api/edituser/:id`<br>
- **Description:** Update user details by providing the user ID.<br>
- **Request Body:**<br>
  ```json<br>
  {
      "name": "Updated Name",<br>
      "phone_number": "9876543210",<br>
      "alternate_email": "user3@example.com",<br>
      "organization_name": "Updated Organization",<br>
      "role_in_organization": "Updated Role",<br>
      "profile_picture": "image-url"<br>
  }
  ```
- **Response:**<br>
  ```json<br>
  {
      "message": "User details updated successfully"<br>
  }
  ```

## Contributors

- [Pranav Ojha]<br>

---

This should make the README file more readable when rendered on GitHub.
