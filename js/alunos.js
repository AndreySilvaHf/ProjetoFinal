import { alunos } from '../dados/listagem-alunos.js'

export function cadastrarAluno(aluno) {
    return new Promise((resolve, reject ) => {
        if (aluno) {
            const novoId = alunos.length +1
            aluno.id = novoId
            alunos.push(aluno)
            resolve('Aluno cadastrado com sucesso!')
        }
        else {
            reject ('Erro ao cadastrar o aluno')
        }
    })
}