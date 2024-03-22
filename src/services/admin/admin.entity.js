import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from './admin.schema';

/**
 * these are the set to validate the request body or query.
 */
const createAllowed = new Set(['firstName', 'lastName', 'userName', 'email', 'password', 'role', 'gender']);
const allowedQuery = new Set(['firstName', 'lastName', 'username', 'page', 'limit', 'id', 'paginate', 'role']);



export const register = ({ db }) => async (req, res) => {
  try {
    const valid = Object.keys(req.body).every(k => createAllowed.has(k));
    console.log(valid);
    res.send(valid);



    // const valid = Object.keys(req.body).every(k => createAllowed.has(k));
    // if (!valid) return res.status(400).send('Bad request');
    // req.body.password = await bcrypt.hash(req.body.password, 8);
    // // const user = await db.create({ table: User, key: { ...req.body } });
    // db.create({ table: Admin, key: { ...req.body, remainigTime: req?.body?.workingHours } })
    //   .then(async user => {
    //     await db.save(user);
    //     res.status(200).send(user);
    //   })
    //   .catch(({ message }) => res.status(400).send({ message }));

    // // if (!user) return res.status(400).send('Bad request');
    // // await db.save(user);
    // // return res.status(200).send(user);
  }
  catch (e) {
    console.log(e);
    res.status(500).send('Something went wrong.');
  }
};



export const superadmin = ({ db }) => async (req, res) => {
  const isAdmin = await db.findOne({ table: Super_admin, key: { role } });
  console.log(isAdmin);


};