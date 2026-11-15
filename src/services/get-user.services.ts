export interface UserInterface {
  id: string;
  name: string;
  email: string;
  role: string;
}

const getUser = async (): Promise<UserInterface> => {
  return {id: "", name: "", email:"", role:""}
}

export {getUser};