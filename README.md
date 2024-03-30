Invitation API Backend
This is a backend application for handling user invitations, sign up, login, logout, and user profile editing functionalities. It is built using Express.js and MySQL.

Setup </br>
Clone the repository to your local machine: git clone https://github.com/pojha1401/IEEE-GEMS-Pranav.git

Install dependencies:
npm install</br>


Configure MySQL database:Ensure MySQL is installed on your system.</br>
Create a new database named users.<br>
Update the MySQL connection details in app.js:<br>
</br>
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your-mysql-password',
    database: 'users'
});
</br>

Start the server: npm start
Endpoints
1. Invite User
Endpoint: POST /api/invitation
Description: Invite a user by providing their details.
Request Body:</br>
{
    "name": "User Name",
    "email": "user@example.com",
    "phone_number": "1234567890",
    "alternate_email": "user2@example.com",
    "organization_name": "Organization",
    "role_in_organization": "Role",
    "valid_till": "2024-12-31"
}
Response:
json
Copy code
{
    "id": 1
}
2. Sign Up
Endpoint: POST /api/signup
Description: Sign up a user by providing their unique ID and password.
Request Body:
json
Copy code
{
    "id": "unique-id",
    "password": "password"
}
Response:
json
Copy code
{
    "message": "User signed up successfully"
}
3. Login
Endpoint: POST /api/login
Description: Log in a user by providing their email and password.
Request Body:
json
Copy code
{
    "email": "user@example.com",
    "password": "password"
}
Response: User details or error message.
4. Logout
Endpoint: POST /api/logout
Description: Log out the user.
5. Edit User
Endpoint: PUT /api/edituser/:id
Description: Update user details by providing the user ID.
Request Body:
json
Copy code
{
    "name": "Updated Name",
    "phone_number": "9876543210",
    "alternate_email": "user3@example.com",
    "organization_name": "Updated Organization",
    "role_in_organization": "Updated Role",
    "profile_picture": "image-url"
}
Response:
json
Copy code
{
    "message": "User details updated successfully"
}
Contributors
Pranav Ojha
