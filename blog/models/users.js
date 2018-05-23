const User = require('../lib/mongo').User

module.exports = {
    // 注册一个用户
    create: function create (user) {
        return User.create(user).exec()
    },//这是为了注册页面服务的

    // 通过用户名获取用户信息
    getUserByName: function getUserByName (name) {
        return User
            .findOne({ name: name })
            .addCreatedAt()
            .exec()
    }
}//这是为了登录页面服务的