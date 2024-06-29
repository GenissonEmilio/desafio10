

//Alinha o que for número a direita
document.querySelectorAll('td ').forEach(dado => {
  let dad = dado.textContent.replace(/ /g, "" );
  if (isNaN(dad) == false) {
    dado.style.textAlign = 'right';
    console.log('mudou');
  }
})