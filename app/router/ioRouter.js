module.exports = app => {
    const { router, controller, io,middleware} = app;
    app.io.route('chat', app.io.controller.default.ping);
}