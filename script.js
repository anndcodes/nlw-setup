// alert("Hello World!")

//abaixo a construcao de um objeto
// const celular = {
//   cor: 'preto', //um atributo que contem propriedade e valor do objeto
//   ligar: function() { //um metodo que eh uma funcionalidade para o objeto
//     const mensagem = "Ligando"
//     alert(mensagem)
//   }
// }

// celular.ligar() //acessando o objeto pelo seu metodo-funcao, precisa do ()
// alert(celular.cor)  //acessando o objeto 

// document.body.style.backgroundColor = "purple";
// document.querySelector("input").click();

const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }

// nlwSetup.setData(data)
// nlwSetup.load()

const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if(dayExists) {
    alert("Dia já incluso ✅");
    return
  }
  alert('Dia adicionado com sucesso ⛔');
  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()