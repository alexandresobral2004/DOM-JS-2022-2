
//BUSCA OS ELEMENTOS
var fields = document.getElementsByClassName('campo')
var labels = document.getElementsByClassName('msg')
var btnSend = document.getElementById('btnSend')


btnSend.addEventListener('click', (e) => {


})

btnSend.addEventListener('click', (e) => {
  e.preventDefault()
  validaNome()
  validaEmail()
  validaFone()
})


// function validaForm() {
//   if (validaNome() == true) {
//     return true
//   }
//   else if (validaEmail() == true) {
//     return true
//   }
//   else if (validaFone() == true) {
//     return true
//   }
//   else {
//     return false;
//   }

// }

function validaNome() {
  if (fields[0].value.length < 10) {
    labels[0].textContent = 'O Nome deve ter mais de 10 letras';
    return false;
  }

}

function validaEmail() {
  let mail = fields[1].value
  if (fields[1].value.length < 5) {
    labels[1].textContent = 'O E-mail deve ser preenchido!';
    return false;

  }
  if (!mail.includes('@')) {
    labels[1].textContent = 'O E-mail deve ter @!';
    return false;
  }

}

function validaFone() {
  if (fields[2].value.length < 5) {
    labels[2].textContent = 'O fone deve ser preenchido!';

  }
  else {
    return false;
  }
}


function resetForm() {
  document.getElementById("form").reset();
}