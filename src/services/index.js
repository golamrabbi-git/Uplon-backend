import demo from './demo/demo';
import user from './user/user';
import admin from './admin/admin';

export const services = (app) => {
  app.configure(demo);
  app.configure(user);
  app.configure(admin);
};
