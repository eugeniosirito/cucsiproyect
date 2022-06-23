import api from 'config/api';
import Libro from 'utils/LibrosTypes';

interface Headers {
  token: string | null;
  uid: string | null;
  client: string | null;
}

interface BookResponse {
  page: Libro[];
}

export const getBooks = (headers: Headers) => {
  const { token, uid, client } = headers;
  return api.get<BookResponse>(
    '/books',
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
