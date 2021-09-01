function validateEmail(email: string): boolean {
  const reg = /^[A-Za-z0-9._%+-]+@successive.tech$/;
  return reg.test(email);
}
export { validateEmail };
