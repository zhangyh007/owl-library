
const https = require('https')
const { mysql } = require('../qcloud')
// 添加图书
// 1. 获取豆瓣图书
// 网址：https://developers.douban.com/wiki/?title=book_v2#get_isbn_book
// https://api.douban.com/v2/book/isbn/:name
// 2. 入库
module.exports = async (ctx, next) => {
    const {isbn, openId} = ctx.request.body
    // console.log('request', isbn, openId)
    if (isbn && openId) {
        const findRes = await mysql('books').select().where('isbn', isbn) // 查询isbn是否已存在
        if (findRes.length) {
            ctx.state = {
                code: 1,
                data: {
                    msg: '图书已存在'
                }
            }
            return
        }
        let url = 'https://api.douban.com/v2/book/isbn/' + isbn + '?apikey=0df993c66c0c636e29ecbb5344252a4a' // 一分钟10次
        const bookInfo = await getJSON(url)
        const rate = bookInfo.rating.average
        const {title, image, alt, publisher, summary, price} = bookInfo
        const tags = bookInfo.tags.map(item => {
            return `${item.title} ${item.count}`
        }).join(',')
        const author = bookInfo.author.join(',')
        // console.log({
        //     rate, title, image, alt, publisher, summary, price, tags, author
        // })
        try {
            const bookInfo = await getJSON(url)
            const rate = bookInfo.rating.average
            const {title, image, alt, publisher, summary, price} = bookInfo
            const tags = bookInfo.tags.map(item => {
                return `${item.title} ${item.count}`
            }).join(',')
            const author = bookInfo.author.join(',')
            // console.log({
            //     rate, title, image, alt, publisher, summary, price, tags, author
            // })
            await mysql('books').insert({
                isbn, openId, rate, title, image, alt, publisher, summary, price, tags, author
            })
            ctx.state.data = {
                title,
                msg: 'success'
            }
        } catch (e) {
            ctx.state = {
                code: 1,
                data: {
                    msg: '新增失败' + e.sqlMessage
                }
            }
        }
    }
}

function getJSON (url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let urlData = ''
            res.on('data', data => {
                urlData += data
            })
            res.on('end', data => {
                const bookInfo = JSON.parse(urlData)
                if (bookInfo.title) {
                    resolve(bookInfo)
                } else {
                    reject(bookInfo)
                }
            })
        })
    })
}
