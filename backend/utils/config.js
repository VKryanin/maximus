const isProduction = process.env.NODE_ENV === 'production';
const security = isProduction ? process.env.JWT_SECRET : 'dev';
const { MONGO } = process.env;
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

const uri = "mongodb://hrTest:hTy785JbnQ5@mongo0.maximum.expert:27423/?authSource=test&replicaSet=ReplicaSet&readPreference=primary";

module.exports = {
  security, MONGO, PORT,uri
};
