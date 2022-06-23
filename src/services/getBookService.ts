import api from 'config/api';

export const getBooks = (headers: { token: string | null; uid: string | null; client: string | null }) => {
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
