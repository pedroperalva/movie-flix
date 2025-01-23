export const logout = () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("user");
};
