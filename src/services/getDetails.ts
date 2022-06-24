import api from 'config/api';
import Libro from 'utils/LibrosTypes';
import { Headers } from 'interfaces/HeadersInterface';

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
