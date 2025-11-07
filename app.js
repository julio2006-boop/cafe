// Agregar productos al carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.querySelectorAll(".agregar-carrito").forEach(btn => {
  btn.addEventListener("click", () => {
    const producto = {
      nombre: btn.dataset.nombre,
      precio: parseFloat(btn.dataset.precio)
    };
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito.`);
  });
});

// Redirigir al carrito sin recargar
document.getElementById("carritoBtn").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "carrito.html";
});