import demo from './demo/demo';
import user from './user/user';
import message from './Messages/message';


export const services = (app) => {
  app.configure(demo);
  app.configure(user);
  app.configure(message);
};
