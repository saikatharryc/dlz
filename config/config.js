let ENV= process.env.ENVIRONMENT;
/**
 * Config for database conection
 * we can load it from Environment,and make it Environment based.
 */
config ={};
    config.db = {
        type:"mongoDb",
        uri:"mongodb://localhost:27017/maindb",
        db:{},
        options : { keepAlive: 1, autoReconnect: true, poolSize:20}
    },



module.exports = config;