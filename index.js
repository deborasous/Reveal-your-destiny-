let questionElement = document.querySelector('#answer') //entrada
let questionInput = document.querySelector('#question')
let answer = [
  'A resposta é não',
  'Sim',
  'Não conte com isso.',
  'Provavelmente',
  'As perspectivas não são tão boas',
  'Você chega lá, mantenha o foco e continue se esforçando',
  'Certeza!',
  'Dificilmente é assim',
  'Sem dúvida!',
  'Pergunte novamente mais tarde',
  'Você pode contar com isso!',
  'Melhor não te dizer agora',
  'Não é possível prever agora',
  'Minhas fontes dizem não.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
  'Perspectivas boas.'
] //saída



//FAZER PERGUNTA
function askQuestion(){
  questionElement.style.opacity = 100;
  let image = document.querySelector('#image').src
  let imageOff = '/cristal-ball-purple.png'
  let imageOn = '/cristal-ball-purple-dark.png'

  if(image == imageOn){
    document.getElementById('image').src = imageOff
  }else{
    document.getElementById('image').src =  imageOn
  }

  if(questionInput.value == ''){
    alert("Faça uma pergunta")
    return //se a função encontrar um vazio, o return para a função
  } 

  const question = '<div>' + questionInput.value + '</div>' //cria uma div dentro HTML
  questionInput.value = '' //limpa o elemento input após o clique

  //***GERAR NÚMERO ALEATORIO
  const totalAnswer = answer.length //pega o total de respostas que existem dentro do array
  const randomNumber = Math.floor(Math.random() * totalAnswer) //Math.floor => arredonda para menor \ Math.random => cria numeros aleatorios de 0 a 0.99 ....\Assim, o Math.random cria numeros aleatorios de 0 a 0.99 e o Math.floor arredonda o número para baixo que multiplicado pela quantidade de posição do array, gera valores de 0 ao total de respostas contidos no totalAnswer


  questionElement.innerHTML = question + answer[randomNumber]//pega a div criada pelo question e concatena com a resposta do H3

  //sumir com a resposta após 3 min
  setTimeout(function() {
    questionElement.style.opacity = 0;
    document.getElementById('image').src = imageOff
  }, 4000)
}

//TEMA DARK
const btn = document.querySelector('#btn')
btn.addEventListener('change', (e) => {
  document.body.classList.toggle('dark', e.target.checked)
})