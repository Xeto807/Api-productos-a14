const express = require("express");
const app = express();
const PORT = 3000;

const productos = [
  { id: 1, nombre: "Teclado", precio: 29.95 },
  { id: 2, nombre: "Ratón", precio: 18.50 },
  { id: 3, nombre: "Monitor", precio: 189.90 }
];

app.get("/api/productos", (req, res) => res.json(productos));

app.get("/api/productos/:id", (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
  res.json(producto);
});

app.listen(PORT, () => console.log(`API disponible en http://localhost:${PORT}`));
