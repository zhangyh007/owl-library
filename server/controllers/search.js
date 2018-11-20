// 搜索列表
const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
    const {keyword} = ctx.request.body
    try {
        const mysqlSelect = mysql('books')
            .select('books.*')
            .orderBy('books.id', 'desc')
        let books
        // 根据openId
        books = await mysqlSelect.where('books.title', 'like', `%${keyword}%`)
        ctx.state.data = {
            bookList: books
        }
    } catch (e) {
        ctx.state = {
            code: 1,
            msg: '搜索失败' + e.sqlMessage
        }
    }
}
