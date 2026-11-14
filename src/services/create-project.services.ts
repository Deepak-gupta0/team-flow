interface getInterface {
  name: string;
  description: string;
  owner_id: string;
}

interface returnInterface {
  id: string;
  name: string;
  description: string;
  owner_id: string;
  created_at: string;
  status: number;
}

export const createProject = async ({
  name,
  description,
  owner_id,
}: getInterface): Promise<returnInterface> => {
  console.log(name, description, owner_id)

  return {description, name, owner_id, id: "hello", created_at: "00124", status: 201};
};
