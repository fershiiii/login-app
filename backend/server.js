const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const SECRET = "clave_secreta";

// REGISTER
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Usuario creado",
    });
  });
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, results) => {
    if (results.length === 0) {
      return res.status(401).json({
        message: "Usuario no encontrado",
      });
    }

    const user = results[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        message: "Contraseña incorrecta",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.json({
      token,
    });
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
