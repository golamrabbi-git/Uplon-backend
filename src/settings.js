export default {
  'port': process.env.PORT || 4000,
  'origin': [
    '*',
    'http://localhost:5173',
    'http://localhost:5174'

  ],
  'useHTTP2': false,
  'SMTP_HOST': '',
  'SMTP_PORT': '',
  'SMTP_USER': '',
  'SMTP_PASSWORD': '',
  'EMAIL_NAME': '',
  'EMAIL_FROM': 'from@example.com',
  'MONGODB_URL': 'mongodb+srv://user1:iCloud016@cluster0.nn8n2kf.mongodb.net/WhaleSwap',
  'secret': 'whale-swap',
  'tokenKey':'BLUEWHALE',
};