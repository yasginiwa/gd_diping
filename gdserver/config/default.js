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
        //  开发环境
        url: 'http://127.0.0.1:3000/uploads/'
        //  生产环境
        // url: 'https://gd.hgsp.cn:10050/uploads/'
    },
    weapp_config: {
        appid: 'wx640e5f8208113234',
        secret: '47e9561b44f46e3e8f90c40352140640'
    }
}