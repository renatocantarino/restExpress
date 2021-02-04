module.exports = app => {
    const controller = app.controllers.PessoaController;

    app.route('/api/v1/pessoa')
        .get(controller.getAll)
        .post(controller.save);


    app.route('/api/v1/pessoa/:id')
        .delete(controller.delete)
        .put(controller.update);



}