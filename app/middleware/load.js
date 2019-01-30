module.exports = (options, app) => {
    return async function load(ctx, next) {
        console.log(ctx)
        await next();
        let body = ctx.body;
        ctx.body = 'callback(' + body + ')';
        console.log("11111111111111")
    }
}