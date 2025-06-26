var express = require('express');
var router = express.Router();

const AlunoService = require('../services/aluno.service');

router.get("/listar",
    (request, response, next) => {
        response.json(AlunoService.list());
    }
)
router.post("/cadastrar",
    (request, response) => {
        response.json(AlunoService.create(request.body));
    }
)

router.get("/buscar/:id",
    (request, response) => {
        response.json(AlunoService.get(request.params.id));
    }
)

router.put("/editar/:id",
    (request, response) => {
        const alunoEditado = AlunoService.update(
            request.params.id,
            request.body
        )
        response.json(alunoEditado)
    }
)

router.delete("/deletar/:id",
    (request, response) => {
        response.json(AlunoService.delete(request.params.id));
    }
)

module.exports = router;
