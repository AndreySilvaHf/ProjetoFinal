const email = document.getElementById ('email')
const senha = document.getElementById ('senha')
const entrar = document.getElementById ('entrar')
const esqueceu = document.getElementById ('esqueceuSenha')
const erro = document.getElementById ('erro')

function login(usuario, senha) {
    if (usuario === 'ana.silva@edutech.com' && senha === '123456') {
        return true
    } else {
        return false
    }
}

esqueceu.addEventListener('click', () => {
    window.alert('Funcionalidade em construção')
})

entrar.addEventListener('click', () => {
    const resultado = login(email.value, senha.value)
    if (resultado) {
        sessionStorage.setItem('usuarioLogado', email.value)
        window.location.href = '../dashboard/dashboard.html'
    } else {
        erro.textContent = 'Email ou senha inválidos'
    }
})