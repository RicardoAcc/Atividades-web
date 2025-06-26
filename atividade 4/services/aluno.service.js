const AlunoModel = require('../models/aluno.model');
const alunos = require('../data/alunos');

let nextID = alunos.length + 1;

class AlunoService {
    static list(){
        return alunos;
    }

    static create(aluno){
        const novoAluno = new AlunoModel(nextID, aluno.nome, aluno.curso, aluno.ira);
        alunos.push(novoAluno);
        return novoAluno;
    }

    static get(id){
        for (let i = 0; i < alunos.length; i++){
            if(alunos[i].id == id){
                return alunos[i];
            }
        }
        return null;
    }

    static delete(id){
        for (let i = 0; i < alunos.length; i++){
            if(alunos[i].id == id){
                alunos.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static update(id, aluno){
        console.log(aluno)
        for (let i = 0; i < alunos.length; i++){
            if (alunos[i].id == id){
                alunos[i].nome = aluno.nome;
                alunos[i].curso = aluno.curso;
                alunos[i].ira = aluno.ira;
                return true;
            }
        }
        return false;
    }
}

module.exports = AlunoService