import api from 'config/api';
import Libro from 'utils/LibrosTypes';
import { Headers } from 'interfaces/HeadersInterface';

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
