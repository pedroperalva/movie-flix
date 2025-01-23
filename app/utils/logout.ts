export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  window.location.href = "/";
};
