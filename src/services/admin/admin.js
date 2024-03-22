import { auth, checkRole } from '../middlewares';
import {  register,login, logout,updateUser, remove, getAdmin, superadmin } from './admin.entity';

export default function admin() {
  this.route.post('/admin', register(this));
  this.route.get('/superadmin',superadmin(this));
}