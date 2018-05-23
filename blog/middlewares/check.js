module.exports = {
    checkLogin: function checkLogin (req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录')
            return res.redirect('/signin')
        }
        next()
    },//没有用户信息时显示错误，重新导向到登录页面

    checkNotLogin: function checkNotLogin (req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录')
            return res.redirect('back')// 返回之前的页面
        }
        next()
    }//有登录信息的时候重新导向回原来的页面
}