function criarCabecalho() {
    const container = document.getElementById('cabecalho')

    const titulo = document.createElement('h1')
    titulo.textContent = 'AVA-EDUCA+'
    container.appendChild(titulo)

    const dadosUsuario = JSON.parse(sessionStorage.getItem('usuarioLogado'))

    const usuario = document.createElement('span')
    usuario.textContent = dadosUsuario.nome
    container.appendChild(usuario)
}

function criarMenu() {
    const container = document.getElementById('menu')

    const btnDashboard = document.createElement('button')
    btnDashboard.textContent = 'Dashboard'
    container.appendChild(btnDashboard)
    btnDashboard.addEventListener('click', () => {
        window.location.href = '../dashboard/dashboard.html'
    })

    const btnCadastro = document.createElement('button')
    btnCadastro.textContent = 'Cadastro de Aluno'
    container.appendChild(btnCadastro)
    btnCadastro.addEventListener('click', () => {
        window.location.href = '../cadastro-aluno/cadastro-aluno.html'
    })

    const btnCurso = document.createElement('button')
    btnCurso.textContent = 'Cursos'
    container.appendChild(btnCurso)
    btnCurso.disabled = true

    const btnSair = document.createElement('button')
    btnSair.textContent = 'Sair'
    container.appendChild(btnSair)
    btnSair.addEventListener('click', () => {
        sessionStorage.removeItem('usuarioLogado')
        window.location.href = '../login/login.html'
    })
}