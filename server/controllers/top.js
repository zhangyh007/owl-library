// 排行榜
const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
    const top = await mysql('books')
        .select('id', 'title', 'image', 'count')
        .orderBy('count', 'desc')
        .limit(9)
    ctx.state.data = {
        topList: top
    }
}
