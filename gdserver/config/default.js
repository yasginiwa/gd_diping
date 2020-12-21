module.exports = {
    db_config: {
        host: '127.0.0.1',
        user: 'root',
        password: 'yasginiwa',
        database: 'gddb',
        port: 3306
    },
    jwt_config: {
        secretOrKey: 'yasginiwa12#$',
        expiresIn: 3600
    },
    baseURL: {
        private: '/api/v1/private',
        public: '/api/v1/public'
    },
    upload_config: {
        url: 'http://172.16.1.227:3000/uploads/'
    },
    weapp_config: {
        appid: 'wx640e5f8208113234',
        secret: '47e9561b44f46e3e8f90c40352140640'
    }
}