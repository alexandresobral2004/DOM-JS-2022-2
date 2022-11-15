function mudaTexto() {
  let h1 = document.querySelector('h1')

  if (h1.textContent == 'Texto Alterado') {
    h1.textContent = 'Texto Original HTML'
  }
  else {
    h1.textContent = 'Texto Alterado'
  }


}
