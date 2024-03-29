export default {
  'port': process.env.PORT || 4000,
  'origin': [
    '*',
    'http://localhost:5173',
    'http://localhost:5174'

  ],
  'useHTTP2': false,
  'SMTP_HOST': 'smtp.gmail.com',
  'SMTP_PORT': '465',
  'SMTP_USER': 'rabbi.coredevs@gmail.com',
  'SMTP_PASSWORD': 'ibxz rffp vfhp rjua',
  'EMAIL_NAME': 'Forget Password',
  'EMAIL_FROM': 'rabbi.coredevs@gmail.com',
  'MONGODB_URL': 'mongodb+srv://user1:iCloud016@cluster0.nn8n2kf.mongodb.net/WhaleSwap',
  'secret': 'whale-swap',
  'tokenKey':'BLUEWHALE',
};