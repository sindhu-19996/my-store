export const loginUser = (email: string) => {
  const user = {
    email,
    type: "user",
  };

  localStorage.setItem("user", JSON.stringify(user));
  window.dispatchEvent(new Event("userUpdated"));
};

export const loginGuest = () => {
  const user = {
    email: "Guest",
    type: "guest",
  };

  localStorage.setItem("user", JSON.stringify(user));
  window.dispatchEvent(new Event("userUpdated"));
};

export const getUser = () => {
  try {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  } catch {
    localStorage.removeItem("user");
    return null;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("user");
  window.dispatchEvent(new Event("userUpdated"));
};