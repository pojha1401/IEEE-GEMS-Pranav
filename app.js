import express from "express"
import mysql from "mysql2"
import path from "path"

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pr@140103',
    database: 'users'
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Invitation API
app.post('/api/invitation', (req, res) => {
    const { name, email, phone_number, alternate_email, organization_name, role_in_organization, valid_till } = req.body;

    // Insert into database 
    const sql = 'INSERT INTO users (name, email, phone_number, alternate_email, organization_name, role_in_organization, valid_till) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, email, phone_number, alternate_email, organization_name, role_in_organization, valid_till], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error inviting user' });
        } else {
            res.json({ id: result.insertId });
        }
    });
});

// Sign up API
app.post('/api/signup', (req, res) => {
    const { id, password } = req.body;

    // Update password in database
    const sql = 'UPDATE users SET password = ? WHERE id = ?';
    db.query(sql, [password, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error signing up user' });
        } else {
            res.json({ message: 'User signed up successfully' });
        }
    });
});

// Login API
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Received email:', email);
    console.log('Received password:', password);


    // Fetch user details from database
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error logging in' });
        } else {
            if (result.length > 0) {
                res.json(result[0]); // Return user details
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        }
    });
});

// Logout API
app.post('/api/logout', (req, res) => {
    // Perform logout actions (e.g., invalidate session)
    res.json({ message: 'User logged out successfully' });
});

// Edit user API
app.put('/api/edituser/:id', (req, res) => {
    const userId = req.params.id;
    const { name, phone_number, alternate_email, organization_name, role_in_organization, profile_picture } = req.body;

    // Update user details in the database
    const sql = 'UPDATE users SET name = ?, phone_number = ?, alternate_email = ?, organization_name = ?, role_in_organization = ?, profile_picture = ? WHERE id = ?';
    db.query(sql, [name, phone_number, alternate_email, organization_name, role_in_organization, profile_picture, userId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error updating user details' });
        } else {
            res.json({ message: 'User details updated successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
