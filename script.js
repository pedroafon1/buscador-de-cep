const inputCep = document.getElementById('js-input-cep');
const buttonCep = document.getElementById('js-btn-buscar-cep');

const inputBairro = document.getElementById('js-input-bairro');
const inputCepDado = document.getElementById('js-input-bairro');
const inputLogradouro = document.getElementById('js-input-logradouro');
const inputEstado = document.getElementById('js-input-estado');

const areaDados = document.getElementById('js-dados');
const msgErro = document.getElementById('js-error');

buttonCep.addEventListener('click', () => {
  if(inputCep.value != '') {

    fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      inputBairro.value = json.bairro;
      inputCepDado.value = json.cep;
      inputLogradouro.value = json.logradouro;
      inputEstado.value = json.uf;

      areaDados.style.display = 'block'
      msgErro.style.display = 'none'
    })


  } else {
    inputBairro.value = "";
      inputCepDado.value = "";
      inputLogradouro.value = "";
      inputEstado.value = "";
    areaDados.style.display = 'none'
    msgErro.style.display = 'block'
  }
})