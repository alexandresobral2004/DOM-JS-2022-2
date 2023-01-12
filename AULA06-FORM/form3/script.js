
//BUSCA OS ELEMENTOS
var fields = document.getElementsByClassName('campo')
var labels = document.getElementsByClassName('msg')
var btnSend = document.getElementById('btnSend')

//Exbir valores

var exibeNome = () => {
  var mostraNome = document.getElementById('mostraNome')

  mostraNome.innerHTML = `Nome: ` + fields[0].value
}

var exibeEmail = () => {
  var mostraNome = document.getElementById('mostraEmail')

  mostraNome.innerHTML = `E-mail: ` + fields[1].value
}

var exibeFone = () => {
  var mostraNome = document.getElementById('mostraFone')

  mostraNome.innerHTML = `Fone: ` + fields[2].value
}

var exibeCep = () => {
  var mostraNome = document.getElementById('mostraCep')

  mostraNome.innerHTML = `Cep: ` + fields[3].value
}

var exibeCpf = () => {
  var mostraNome = document.getElementById('mostraCpf')
  mostraNome.innerHTML = `CPF: ` + fields[4].value
}





btnSend.addEventListener('click', (e) => {
  e.preventDefault()
  validaNome();

})


function validaNome() {
  if (fields[0].value.length < 10) {
    labels[0].textContent = 'O Nome deve ter mais de 10 letras';
    return false;
  }
  else {
    console.log(fields[0].value)
  }

}

function validaEmail() {
  let mail = fields[1].value
  const regex = /com/g;


  if (fields[1].value.length < 5) {
    labels[1].textContent = 'O E-mail deve ser preenchido!';
    return false;

  }
  if (!mail.includes('@')) {
    labels[1].textContent = 'O E-mail deve ter @!';
    return false;
  }
  if (!mail.match(regex)) {
    labels[1].textContent = 'O E-mail deve ter .com';
    return false;
  }
  else {
    console.log(mail)
  }

}

function validaFone() {

  const fone = fields[2].value;

  if (fields[2].value.length < 5) {
    labels[2].textContent = 'O fone deve ser preenchido!';
    return false;
  }

  else {
    console.log(fields[2].value)
  }

}

function validaCep() {

  const cep = fields[3].value;
  if (fields[3].value.length <= 8) {
    labels[3].textContent = 'O CEP deve ser preenchido!';
    return false;
  }
  else {
    return true;
  }

}

function validaCPF() {

  const cep = fields[4].value;
  if (fields[4].value.length <= 11) {
    labels[4].textContent = 'O CPF deve ser preenchido!';
    return false;
  }
  else {
    return true;
  }

}




function aplicaMascara() {
  maskFone();
  maskCEP();
  maskCPF();
}

function maskFone() {
  var fone_id = document.getElementById('fone');

  const maskOptions = { mask: '(00)0.0000-0000' }
  const mask = IMask(fone_id, maskOptions);
}
function maskCEP() {
  var cep_id = document.getElementById('cep');

  const maskOptions = { mask: '00000-000' }
  const mask = IMask(cep_id, maskOptions);
}

function maskCPF() {
  var cpf_id = document.getElementById('cpf');

  const maskOptions = { mask: '000.000.000-00' }
  const mask = IMask(cpf_id, maskOptions);
}


function resetForm() {
  document.getElementById("form").reset();
}