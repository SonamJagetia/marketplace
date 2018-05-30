module.exports = {

  database: process.env.DATABASE || 'mongodb://root:root@ds137740.mlab.com:37740/marketplace',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'promarket123',

}
