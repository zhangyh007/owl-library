// 图书列表
const { mysql } = require('../qcloud')
module.exports = async (ctx, next) => {
    const {pageNo, pageSize, openId} = ctx.request.query
    const mysqlSelect = mysql('books')
        .select('books.*', 'cSessionInfo.user_info')
        .join('cSessionInfo', 'books.openId', 'cSessionInfo.open_id')
        .orderBy('books.id', 'desc')
    let books
    // 根据openId
    if (openId) {
        books = await mysqlSelect.where('books.openId', openId)
    } else { // 分页
        books = await mysqlSelect.limit(pageSize).offset(Number(pageNo) * pageSize)
    }
    ctx.state.data = {
        bookList: books.map(value => {
            const info = JSON.parse(value.user_info)
            return Object.assign({}, value, {
                user_info: {
                    nickName: info.nickName
                }
            })
        })
    }
}
