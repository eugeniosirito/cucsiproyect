import api from 'config/api';
import { Usuario } from 'utils/UsersTypes';

export const signUp = (formData: Usuario) => api.post('/users', { ...formData, locale: 'es' });
