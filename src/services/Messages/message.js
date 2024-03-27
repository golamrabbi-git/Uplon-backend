import { auth, checkRole } from '../middlewares';
import { addMessage, getAllMessage, removeMessage } from './message.entity';

export default function message() {
  this.route.delete('/message/:id', auth, checkRole(['superadmin','admin']), removeMessage(this));
  /**
  * GET /messages/
  * @description This route is store messages from user.
  * @response {Object} 200 - message confirmation status.
  */
  this.route.get('/messages', auth, checkRole(['admin','superadmin']),getAllMessage(this));

  /**
  * POST /message
  * @description This route is store messages from user.
  * @response {Object} 200 - message confirmation status.
  */
  this.route.post('/message', addMessage(this));

}