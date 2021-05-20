export default function Inspect(data: string, type: string): boolean {
  switch (type) {
    case "email":
      const email =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      return email.test(data);
    case "password":
      const password = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
      return password.test(data);
    default:
      return false;
  }
}
