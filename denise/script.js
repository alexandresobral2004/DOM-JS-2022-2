
var fields = document.getElementsByClassName('campo')
var labels = document.getElementsByClassName('msg')
var btnSend = document.getElementById('btnSend')

btnSend.addEventListener('click', (e) => {
  e.preventDefault()
  validaNome()


})


function validaNome() {
  if (fields[0].value.length < 10) {
    labels[0].textContent = 'O nome deve ter mais de 8 letras';
  } else {
    return false;
  }
}

function validaSobrenome() {
  /*let sobnome = fields[1]value*/
  if (fields[1].value.length < 5) {
    labels[1].textContent = ' O sobrenome deve ser preenchido minúsculo';
  }
  else {
    return false;
  }
}
function validaCpf() {
  let cpf = fields[2].value
  if (fields[2].value.length < 14) {
    labels[2].textContent = ' O CPF deve ser preenchido corretamente!'
  } else {
    if (!cpf.includes('-')) {
      labels[2].textContent = ' O CPF deve conter o traço (-)!';
      return false;
    }
  }
}

function resetForm() {
  document.getElementById("form").reset();
}