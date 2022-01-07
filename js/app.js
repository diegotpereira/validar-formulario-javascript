var form = document.getElementById('form-contato')

if (form.addEventListener) {
    form.addEventListener('submit', validaCadastro)
} else if (form.attachEvent) {
    form.attachEvent('onsubmit', validaCadastro)
}

function validaCadastro(evt) {
    var nome = document.getElementById('nome')
    var email = document.getElementById('email')
    var sexo = document.getElementById('sexo')
    var senha = document.getElementById('senha')
    var senha2 = document.getElementById('senha2')
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    var contErro = 0

    // Validação do campo nome
    caixa_nome = document.querySelector('.msg-nome')

    if (nome.value == '') {
        caixa_nome.innerHTML = 'Por favor, preencha o campo nome'
        caixa_nome.style.display = 'block'
        contErro += 1
    } else {
        caixa_nome.style.display = 'none'
    }

    // Validação do campo e-mail
    caixa_email = document.querySelector('.msg-email')
    if (email.valie == '') {
        caixa_email.innerHTML = 'Por favor, preencha o campo e-mail'
        caixa_email.style.display = 'block'
        contErro += 1
    } else if (filtro.test(email.value)) {
        caixa_email.style.display = 'block'
    }

    if (contErro > 0) {
        evt.preventDefault();
    }
}