const bcrypt = require('bcrypt')

const tools = {
    enbcrypt(password) {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    },
    comparePassword(textPlainPassword, hash) {
        return bcrypt.compareSync(textPlainPassword, hash)
    },
    cutStringToArray(str) {
        //  排除空串
        if (str.length === 0) return console.log('cutStringToArray传入空字符串')

        //  去掉字符串中多余的空格
        str = str.replace(' ', '')

        //  判断字符串是否存在','
        if (str.indexOf(',') === -1) { //   找不到直接返回当前字符串的数组
            return [str]
        } else {
            return str.split(',')   //  找到了返回以','分割的字符串数组
        }
    }
}

module.exports = tools
