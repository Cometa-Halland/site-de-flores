function clicar() {
  var select = document.getElementById('txtcor')
  var cor = select.options[select.selectedIndex].text
  var res = document.getElementById('res')
  var corpo = document.body
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')

  corpo.style.transitionDuration = '2s'
  img.style.width = `400px`
  res.innerHTML = `Você gosta de ${cor}!</br>`

  if (cor == 'Vermelho') {
    // SE COR FOR VERMELHO
    res.innerHTML += 'Rosas podem ser uma boa ideia'
    corpo.style.background = '#b1040c'
    img.setAttribute('src', 'rosa-flor.png')
  }
  else if (cor == 'Amarelo') {
    // SE COR FOR AMARELO
    res.innerHTML += 'Girassois podem ser uma boa ideia'
    corpo.style.background = '#cf903f'
    img.setAttribute('src', 'girassol-flor.png')
  }
  else if (cor == `Roxo`) {
    //SE COR FOR ROXO
    res.innerHTML += 'Violetas podem ser uma boa ideia'
    corpo.style.background = '#6847af'
    img.setAttribute('src', 'violeta-flor.png')
  }
  else if (cor == `Azul`) {
    //SE COR FOR AZUL
    res.innerHTML += 'Orquideas podem ser uma boa ideia'
    corpo.style.background = '#32567e'
    img.setAttribute('src', 'orquidea-flor.png')
  }
  res.style.textAlign = 'center'
  res.appendChild(img)
}

