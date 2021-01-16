module.exports = app => {
    const controller = app.controllers.PessoaController;

    app.route('/api/v1/pessoa')
        .get(controller.getAll)
        .post(controller.save);
}