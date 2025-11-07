// --- MODAL DE REGISTRO ---
document.addEventListener("DOMContentLoaded", () => {
  const abrir = document.getElementById("abrirRegistro");
  const modal = document.getElementById("modalRegistro");
  const cerrar = document.getElementById("cerrarModal");
  const btnRegistro = document.getElementById("btnRegistro");

  // Abrir modal
  abrir.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Cerrar modal con botón
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal al hacer clic fuera
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Registro de usuario
  btnRegistro.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("mensajeRegistro");

    if (nombre && email && pass) {
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
        modal.style.display = "none";
      }, 2000);
    } else {
      alert("Por favor completa todos los campos ☕");
    }
  });
});

// --- CARRITO DE COMPRAS ---
let carrito = [];

// Agregar producto
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const total = document.getElementById("total");

  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      ${item.nombre} - $${item.precio} 
      <button onclick="eliminar(${i})">❌</button>
    `;
    lista.appendChild(div);
    suma += item.precio;
  });

  total.textContent = `Total: $${suma} USD`;
}

// Eliminar producto
function eliminar(i) {
  carrito.splice(i, 1);
  actualizarCarrito();
}

// Confirmar compra
document.addEventListener("DOMContentLoaded", () => {
  const btnConfirmar = document.getElementById("btnConfirmar");
  const msgCompra = document.getElementById("mensajeCompra");

  btnConfirmar.addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío ☕");
      return;
    }

    carrito = [];
    actualizarCarrito();
    msgCompra.style.display = "block";
    setTimeout(() => {
      msgCompra.style.display = "none";
    }, 2000);
  });
});

// 🟤 Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.push({ nombre, precio });

  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(`✅ ${nombre} se agregó al carrito.`);
}

// 🟤 Función para registrar usuario y aplicar descuento
function registrarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensajeRegistro");

  if (!nombre || !email || !password) {
    alert("Por favor completa todos los campos.");
    return;
  }

  localStorage.setItem("usuarioRegistrado", "true");
  mensaje.style.display = "block";
}

// 🟤 Modal de registro
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalRegistro");
  const abrir = document.getElementById("abrirRegistro");
  const cerrar = document.getElementById("cerrarModal");

  if (abrir && cerrar) {
    abrir.addEventListener("click", () => modal.style.display = "flex");
    cerrar.addEventListener("click", () => modal.style.display = "none");
  }
});