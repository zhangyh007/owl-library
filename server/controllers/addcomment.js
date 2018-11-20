// 添加评论
const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
    const {bookId, openId, comment, location, phone} = ctx.request.body
    console.log(bookId, openId, comment, location, phone)
    try {
        await mysql('comments').insert({
            bookId, openId, comment, location, phone
        })
        ctx.state.data = {
            msg: 'success'
        }
    } catch (e) {
        ctx.state = {
            code: 1,
            data: {
                msg: '评论失败' + e.sqlMessage
            }
        }
    }
}
