export default {
  'port': process.env.PORT || 4000,
  'origin': [
    '*',
    'http://localhost:5173',
    'http://localhost:5174'

  ],
  'useHTTP2': false,
  'SMTP_HOST': 'smtp.ethereal.email',
  'SMTP_PORT': '587',
  'SMTP_USER': 'nicklaus.auer@ethereal.email',
  'SMTP_PASSWORD': '5G2zgHQh4AG6tpuwzX',
  'EMAIL_NAME': 'Forget Password',
  'EMAIL_FROM': 'nicklaus.auer@ethereal.email',
  'MONGODB_URL': 'mongodb+srv://user1:iCloud016@cluster0.nn8n2kf.mongodb.net/WhaleSwap',
  'secret': 'whale-swap',
  'tokenKey':'BLUEWHALE',
};