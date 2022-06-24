import api from 'config/api';
import Libro from 'utils/LibrosTypes';

interface Headers {
  token: string | null;
  uid: string | null;
  client: string | null;
}

export const getDetails = (headers: Headers, id?: string) => {
  const { token, uid, client } = headers;
  return api.get<Libro>(
    `/books/${id}`,
    {},
    {
      headers: {
        'access-token': token,
        client,
        uid
      }
    }
  );
};
