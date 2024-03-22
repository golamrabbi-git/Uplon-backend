import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';


const schema = new Schema({
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  email: { type: 'string', required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['super-admin', 'admin', 'manager', 'driver', 'worker', 'user'] },
}, { timestamps: true });

schema.plugin(paginate);
schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  delete obj.createdAt;
  delete obj.updatedAt;
  delete obj.password;
  delete obj.notifySubs;
  return JSON.parse(JSON.stringify(obj).replace(/_id/g, 'id'));
};

export default model('Admin', schema);