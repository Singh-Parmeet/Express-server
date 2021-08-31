function validateEmail(email:string) {
  const reg = /^[A-Za-z0-9._%+-]+@successive.tech$/
  return reg.test(email)
}
export {validateEmail};
