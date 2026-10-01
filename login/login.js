import { login } from '../js/auth.js'

const email = document.getElementById('email')
const senha = document.getElementById('senha')
const entrar = document.getElementById('entrar')
const esqueceu = document.getElementById('esqueceuSenha')
const erro = document.getElementById('erro')

esqueceu.addEventListener('click', () => {
    window.alert('Funcionalidade em construção')
})

entrar.addEventListener('click', () => {
    login(email.value, senha.value)
        .then((usuarioLogado) => {
            sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
            window.location.href = '../dashboard/dashboard.html'
        })
        .catch((mensagemErro) => {
            erro.textContent = mensagemErro
        })
})