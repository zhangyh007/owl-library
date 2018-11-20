// 评论列表
const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
    const {bookId, openId} = ctx.request.query
    console.log('comments', openId, bookId)
    try {
        const res = mysql('comments')
            .select('comments.*', 'cSessionInfo.user_info')
            .join('cSessionInfo', 'comments.openId', 'cSessionInfo.open_id')
        let commentList
        if (bookId) {
            commentList = await res.where('bookId', bookId)
        } else if (openId) {
            commentList = await res.where('openId', openId)
        }
        ctx.state.data = {
            commentList: commentList.map(value => {
                const info = JSON.parse(value.user_info)
                return Object.assign({}, value, {
                    user_info: {
                        nickName: info.nickName,
                        image: info.avatarUrl
                    }
                })
            })
        }
    } catch (e) {
        ctx.state = {
            code: 1,
            data: {
                msg: '获取评论失败' + e.sqlMessage
            }
        }
    }
}
