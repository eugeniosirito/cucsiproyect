import api from 'config/api';
import { Headers } from 'interfaces/HeadersInterface';

export const getBooks = (headers: Headers) => {
  const { token, uid, client } = headers;
  return api.get(
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
