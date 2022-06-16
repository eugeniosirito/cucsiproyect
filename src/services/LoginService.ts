import api from 'config/api';
import { Usuario } from 'utils/UsersTypes';

export const login = (formData: Usuario) => api.post('/users/sign_in', { ...formData, locale: 'es' });
