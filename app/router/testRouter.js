module.exports = app => {
    const { router, controller, middleware} = app;
    router.get("/js", middleware.load(), controller.home.index)
    router.get("/page", controller.home.page)
}