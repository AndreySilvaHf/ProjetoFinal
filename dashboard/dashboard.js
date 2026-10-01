import { criarCabecalho, criarMenu } from '../js/app.js'
import { listarCursos } from '../js/cursos.js'

criarCabecalho()
criarMenu()

const dadosUsuario = JSON.parse(sessionStorage.getItem('usuarioLogado'))
const usuarioLogado = dadosUsuario.email
const containerCursos = document.getElementById('cursos')

listarCursos(usuarioLogado)
    .then((cursosDoUsuario) => {
        cursosDoUsuario.forEach((curso) => {
            const card = document.createElement('div')
            card.classList.add('card-curso')

            const nome = document.createElement('h3')
            nome.textContent = curso.nomeCurso
            card.appendChild(nome)

            const inicio = document.createElement('p')
            inicio.textContent = 'Início: ' + curso.dataInicio
            card.appendChild(inicio)

            const fim = document.createElement('p')
            fim.textContent = 'Fim: ' + curso.dataFim
            card.appendChild(fim)

            containerCursos.appendChild(card)
        })
    })
    .catch((erro) => {
        const aviso = document.createElement('p')
        aviso.textContent = erro
        containerCursos.appendChild(aviso)
    })