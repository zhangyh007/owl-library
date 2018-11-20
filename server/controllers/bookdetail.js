// 图书详情
const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
    const { id } = ctx.request.query
    const bookInfo = await mysql('books')
        .select('books.*', 'cSessionInfo.user_info')
        .join('cSessionInfo', 'books.openId', 'cSessionInfo.open_id')
        .where('id', id)
        .first()
    const userInfo = JSON.parse(bookInfo.user_info)
    ctx.state.data = Object.assign({}, bookInfo, {
        tags: bookInfo.tags.split(','),
        summary: bookInfo.summary.split('\n'),
        user_info: {
            nickName: userInfo.nickName,
            image: userInfo.avatarUrl
        }
    })

    await mysql('books')
        .where('id', id)
        .increment('count', 1)
}
