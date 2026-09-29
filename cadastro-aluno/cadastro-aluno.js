cabecalho()
menu()

const nomeCompleto = document.getElementById('nomeCompleto')
const genero = document.getElementById('genero')
const dataNascimento = document.getElementById('dataNascimento')
const cpf = document.getElementById('cpf')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const cep = document.getElementById('cep')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')
const logradouro = document.getElementById('logradouro')
const numero = document.getElementById('numero')
const complemento = document.getElementById('complemento')
const bairro = document.getElementById('bairro')
const mensagem = document.getElementById('mensagem')
const btnSalvar = document.getElementById('btnSalvar')

cep.addEventListener('change', async () => {
    const cepDigitado = cep.value.replace(/\D/g, '')

    if (cepDigitado.length !== 8) {
        return
    }

    const resposta = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
    const dados = await resposta.json()

    if (dados.erro) {
        mensagem.textContent = 'CEP não encontrado'
        return
    }

    cidade.value = dados.localidade
    estado.value = dados.uf
    logradouro.value = dados.logradouro
    bairro.value = dados.bairro
})

btnSalvar.addEventListener('click', () => {
    mensagem.textContent = ''

    if (
        !nomeCompleto.value || nomeCompleto.value.length < 4 || nomeCompleto.value.length > 80 ||
        !genero.value ||
        !dataNascimento.value ||
        !cpf.value ||
        !telefone.value ||
        !email.value ||
        !cep.value ||
        !cidade.value ||
        !estado.value ||
        !logradouro.value ||
        !numero.value ||
        !bairro.value
    ) {
        mensagem.textContent = 'Preencha todos os campos obrigatórios corretamente'
        mensagem.style.color = 'red'
        return
    }

    const dataValida = moment(dataNascimento.value, 'DD/MM/YYYY', true)
    const dataMinima = moment('01/01/1900', 'DD/MM/YYYY')
    const hoje = moment()

    if (!dataValida.isValid() || dataValida.isBefore(dataMinima) || dataValida.isAfter(hoje)) {
        mensagem.textContent = 'Data de nascimento inválida'
        mensagem.style.color = 'red'
        return
    }

    const endereco = {
        cep: cep.value,
        cidade: cidade.value,
        estado: estado.value,
        logradouro: logradouro.value,
        numero: numero.value,
        complemento: complemento.value,
        bairro: bairro.value
    }

    const novoAluno = new Aluno(
        nomeCompleto.value,
        genero.value,
        dataNascimento.value,
        cpf.value,
        telefone.value,
        email.value,
        endereco
    )

cadastrarAluno(novoAluno)

.then((msg) => {
    mensagem.textContent = msg
    mensagem.style.color = 'green'
})

.catch((erro) => {
    mensagem.textContent = erro
    mensagem.style.color = 'red'
})
})