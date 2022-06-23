import api from 'config/api';
import Libro from 'utils/LibrosTypes';

interface Headers {
  token: string | null;
  uid: string | null;
  client: string | null;
  id: string | undefined;
}

export const getDetails = (headers: Headers) => {
  const { token, uid, client, id } = headers;
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
