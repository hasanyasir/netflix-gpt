export const validateFormData = (isSignUp, fullName, email, password) => {
  if (isSignUp) {
    const isFullNameValid = /^([\w]{3,})+\s+([\w\s]{3,})+$/.test(fullName);
    if (!isFullNameValid) return "Full Name is invalid";
  }
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^[A-Za-z]\w{7,14}$/.test(password);
  if (!isEmailValid) return "Email is invalid";
  if (!isPasswordValid) return "Password is invalid";
  return null;
};
