export type Nullable<T> = T | null;

type Usuario = {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  confPass: string;
};

export default Usuario;
