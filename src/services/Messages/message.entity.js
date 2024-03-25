import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Message from './message.schema';

const createAllowed = new Set(['message', 'deletion_date', 'deletion_time', 'photo']);
const allowedQuery = new Set(['message', 'deletion_date', 'deletion_time', 'photo', 'page', 'limit', 'id', 'paginate']);


export const addMessage = ({ db }) => async (req, res) => {
  try {
    // console.log(Object.keys(req.body));
    const valid = Object.keys(req.body).every(k => createAllowed.has(k));
    if (!valid) return res.status(400).send('Bad request');
    db.create({ table: Message, key: { ...req.body } })
      .then(async msg => {
        await db.save(msg);
        res.status(200).send(msg);
      })
      .catch(({ message }) => res.status(400).send({ message }));
    // res.status(200).send(req.body);
  }
  catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};


export const getAllMessage = ({ db }) => async (req, res) => {
  try {
    const messages = await db.find({ table: Message, key: { query: req.query, allowedQuery: allowedQuery, paginate: req.query.paginate === 'true' } });
    res.status(200).send(messages);
  }
  catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};