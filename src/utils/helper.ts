export const validateEmail = (email: string): string => {
  let errStr = "";
  if (!email) {
    errStr = "Email is required";
    return errStr;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errStr = "Enter a valid email address";
  }
  return errStr;
};
