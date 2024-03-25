import { auth, checkRole } from '../middlewares';
import { addMessage, getAllMessage } from './message.entity';

export default function message() {
  /**
  * GET /messages/
  * @description This route is store messages from user.
  * @response {Object} 200 - message confirmation status.
  */
  this.route.get('/messages', getAllMessage(this));

  /**
  * POST /message
  * @description This route is store messages from user.
  * @response {Object} 200 - message confirmation status.
  */
  this.route.post('/message', addMessage(this));




}