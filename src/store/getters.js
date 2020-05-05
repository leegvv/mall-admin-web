const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avater: state => state.user.avater,
    name: state => state.user.name,
    roles: state => state.user.roles,
    addRouters: state => state.permission.addRouters,
    routers: state => state.permission.routers
};

export default getters;
