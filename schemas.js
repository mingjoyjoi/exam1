import { Schema, model } from 'mongoose';

const UserSchema = new Schema({

    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },
    pw: {
        type: String,
        required: true,
      }

});

export default model('User', UserSchema);