export const addToCart = (product: any) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find((item: any) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const updateQuantity = (id: number, change: number) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  cart = cart.map((item: any) =>
    item.id === id
      ? { ...item, quantity: item.quantity + change }
      : item
  );

  cart = cart.filter((item: any) => item.quantity > 0);

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};