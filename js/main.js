// ============ DATOS DE PRODUCTOS ============
const products = [
  {
    id: 1,
    name: "Tinta Gloss Jack",
    category: "Dy2159",
    price: 12000,
    stock: 24,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/160803-1200-auto?v=638786795911270000&width=1200&height=auto&aspect=true",
    desc: "El lip combo perfecto para unos labios irresistibles para todo tipo de piel con un acabado Gloss, con cobertura construible con una tonalidad calida",
  },
  {
    id: 2,
    name: "Base Aura",
    category: "Ref BAT2272",
    price: 30000,
    stock: 35,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/161215-1200-auto?v=638901261104200000&width=1200&height=auto&aspect=true",
    desc: "Base para todo tipo de piel con un acabado mate, su formula cosmetica es liquida, con una cobertura Media/Alta.",
  },
  {
    id: 3,
    name: "Brillo Lip Balm Kisses Rojo",
    category: "Ref HKC1550",
    price: 8000,
    stock: 30,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/161810-1200-auto?v=638956114992170000&width=1200&height=auto&aspect=true",
    desc: "Balsamo Hidratante en crema de color rosado, viene con ingredientes de Aceite de Coco y Aceites minerales.",
  },
  {
    id: 4,
    name: "Sombra En Polvo X12 Urban",
    category: "Ref Sut2170",
    price: 12000,
    stock: 15,
    image:
      "https://b2ctrendy.vtexassets.com/assets/vtex.file-manager-graphql/images/9f8ac272-0ff9-4a7a-91ca-44d03de5e58a___ffcf1d9c8e5cbba47fd9b96d858452a1.jpg",
    desc: "Sombras en polvo presadas con una cobertura Alta y tiene tonalidades con colores calidos y frios.",
  },
  {
    id: 5,
    name: "Rubor Doble Mia",
    category: "Ref R1602",
    price: 10,
    stock: 15,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/161898-1200-auto?v=638957011010900000&width=1200&height=auto&aspect=true",
    desc: "Dúo de rubor cremoso + rubor en polvo satinado en el tono terracota y mate en el tono rosa. Empaque exclusivo con diseño luxury. Incluye espejo práctico para aplicar y retocar en cualquier lugar",
  },
  {
    id: 6,
    name: "Sombra Cloud Trendy",
    category: "Ref CPT1252",
    price: 15000,
    stock: 33,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/161251-1200-auto?v=638901271092700000&width=1200&height=auto&aspect=true",
    desc: "Sombras en polvo prensadas con un acabado mate, una cobertura construible Paleta compacta perfecta para el día adía con los tonos más lindos y versátiles.",
  },
  {
    id: 7,
    name: "Pestañina Para Cejas",
    category: "Ref PCU-D-T-C 1858",
    price: 10000,
    stock: 2,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/156579-1200-auto?v=638615838527770000&width=1200&height=auto&aspect=true",
    desc: "Su fórmula de secado rápido no deja parches y se adapta perfectamente a tu tono gracias a sus 4 colores disponibles. Tiene acabado natural y uniforme, lo que lo vuelve facil de aplicar",
  },
  {
    id: 8,
    name: "Iluminador Líquido Panda",
    category: "Ref ILK2286",
    price: 10000,
    stock: 45,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/161859-1200-auto?v=638957329577170000&width=1200&height=auto&aspect=true",
    desc: "Este iluminador líquido combina una textura ligera y de fácil aplicación con un acabado luminoso que resalta de manera natural las facciones del rostro",
  },
  {
    id: 9,
    name: "Suero Detox Niacinamida + Zinc 30ml",
    category: "Ref DOX888",
    price: 35000,
    stock: 25,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/160199-1200-auto?v=638774818514170000&width=1200&height=auto&aspect=true",
    desc: "La niacinamida o vitamina B3 es apta para todo tipo de piel, especialmente para pieles mixtas o grasas. La concentración ideal es del 10%, ya que es la más efectiva y común en cosméticos; usar más no aporta beneficios adicionales y menos del 10% tiene un efecto casi imperceptible.",
  },
  {
    id: 10,
    name: "Desmaquillante Bifásico",
    category: "Ref DBT1926",
    price: 20000,
    stock: 5,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/157844-1200-auto?v=638633337823370000&width=1200&height=auto&aspect=true",
    desc: "Con el desmaquillante bifásico solo deberás agitar y aplicar unas cuantas gotas para retirar tu maquillaje, es ligero y suave con tu pie, no contiene fragancia, retira productos a pruebas de agua y no deja sensacion pesada ni grasosa.",
  },
  {
    id: 11,
    name: "Exfoliante Corporal Stitch",
    category: "Dy2073",
    price: 25000,
    stock: 25,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/161416-1200-auto?v=638902939572600000&width=1200&height=auto&aspect=true",
    desc: "La exfoliación es un paso importante en nuestra rutina de cuidado corporal, permite eliminar células muertas, mejora la textura y apariencia de nuestra piel con el exfoliante de Stitch obtendrás resultados de otro planeta y tiene una agradable fragancia.",
  },
  {
    id: 12,
    name: "Kit Corporal Stitch",
    category: "Dy2378",
    price: 28000,
    stock: 20,
    image:
      "https://b2ctrendy.vtexassets.com/arquivos/ids/161529-1200-auto?v=638926876483270000&width=1200&height=auto&aspect=true",
    desc: "Este Kit dúo de Stitch splash y crema es el complemento ideal para quienes aman los aromas frescos y elegantes, combinando un splash corporal vibrante con una crema suave y nutritiva que deja tu piel sana e hidratada.",
  },
];

let cart = JSON.parse(localStorage.getItem("beautystore-cart")) || [];

// ============ ELEMENTOS DOM ============
const cartBtn = document.querySelector("#cartBtn");
const cartModal = document.querySelector("#cartModal");
const closeCartBtn = document.querySelector("#closeCartBtn");
const cartItemsContainer = document.querySelector("#cartItemsContainer");
const cartEmpty = document.querySelector("#cartEmpty");
const cartTotalPrice = document.querySelector("#cartTotalPrice");
const checkoutBtn = document.querySelector("#checkoutBtn");
const cartBadge = document.querySelector("#cartBadge");
const productsContainer = document.querySelector("#productsContainer");

function formatPrice(price) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(price);
}

function saveCart() {
  localStorage.setItem("beautystore-cart", JSON.stringify(cart));
}

function renderProducts() {
  productsContainer.innerHTML = products
    .map(
      (product) => `
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <img src="${product.image}" alt="${
        product.name
      }" class="product-image" onerror="this.src='https://b2ctrendy.vtexassets.com/assets/vtex.file-manager-graphql/images/d7cfe4a6-770d-4a58-b429-00a992a78fc5___2af1cdf36706ff12d32df8a93c39fdb4.jpg'">
                        <span class="product-badge">${product.category}</span>
                    </div>
                    <div class="product-body">
                        <h5 class="product-name">${product.name}</h5>
                        <p class="product-category">${product.category}</p>
                        <p class="product-description">${product.desc}</p>
                        <p class="product-price">${formatPrice(
                          product.price
                        )}</p>
                        <p class="product-stock">
                            <span class="${
                              product.stock > 10
                                ? "stock-available"
                                : "stock-low"
                            }">
                                ${
                                  product.stock > 0
                                    ? `✓ ${product.stock} disponibles`
                                    : "✗ Agotado"
                                }
                            </span>
                        </p>
                        <button class="btn-add-cart" data-id="${product.id}" ${
        product.stock === 0 ? "disabled" : ""
      }>
                            <i class="fas fa-cart-plus"></i> Agregar
                        </button>
                    </div>
                </div>
            `
    )
    .join("");

  // Delegación de eventos
  productsContainer.addEventListener("click", (e) => {
    if (e.target.closest(".btn-add-cart")) {
      const id = parseInt(e.target.closest(".btn-add-cart").dataset.id);
      addToCart(id);
    }
  });
}

// ============ CARRITO ============
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartUI();
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItems;

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartEmpty.style.display = "block";
    checkoutBtn.disabled = true;
  } else {
    cartEmpty.style.display = "none";
    checkoutBtn.disabled = false;

    cart.forEach((item) => {
      const total = (item.price * item.quantity).toFixed(2);
      cartItemsContainer.innerHTML += `
                        <div class="cart-item">
                            <div class="cart-item-details">
                                <h6>${item.name}</h6>
                                <small>$${item.price.toFixed(2)} × ${
        item.quantity
      }</small>
                            </div>
                            <div class="cart-item-actions">
                                <button class="qty-btn" onclick="updateQuantity(${
                                  item.id
                                }, ${item.quantity - 1})">−</button>
                                <span style="min-width: 20px; text-align: center;">${
                                  item.quantity
                                }</span>
                                <button class="qty-btn" onclick="updateQuantity(${
                                  item.id
                                }, ${item.quantity + 1})">+</button>
                                <button class="btn-remove-cart" onclick="removeFromCart(${
                                  item.id
                                })">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                            <div class="cart-item-total">$${total}</div>
                        </div>
                    `;
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalPrice.textContent = formatPrice(total);
}

function checkout() {
  if (cart.length === 0) return;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  alert(
    `✓ COMPRA CONFIRMADA\n\nTotal: ${formatPrice(
      total
    )}\nProductos: ${itemCount}\n\n¡Gracias por tu compra en Trendy!`
  );

  cart = [];
  saveCart();
  updateCartUI();
  cartModal.classList.add("d-none");
}

cartBtn.addEventListener("click", () => cartModal.classList.toggle("d-none"));
closeCartBtn.addEventListener("click", () => cartModal.classList.add("d-none"));
checkoutBtn.addEventListener("click", checkout);
cartModal.addEventListener("click", (e) => {
  if (e.target === cartModal) cartModal.classList.add("d-none");
});

renderProducts();
updateCartUI();
