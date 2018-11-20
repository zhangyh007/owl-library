// demo
module.exports = async (ctx, next) => {
    ctx.state.data = {
        msg: '小程序开始了'
    }
}
