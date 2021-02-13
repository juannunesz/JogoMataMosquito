let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){
  criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
  criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
  criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo(){
  altura = window.innerHeight;
  largura = window.innerWidth;
} 
ajustaTamanhoPalcoJogo();

function posicaoRandomica(){
  //Remover mosquito anterior caso exista
  let elemento = document.getElementById('mosquito')
  if(elemento){ 
    elemento.remove()
    // Fluxo do jogo
    if(vidas > 3){
      window.location.href = 'fim_jogo.html'
    }else{
      document.getElementById('v' + vidas).src = "src/img/coracao_vazio.png"
      vidas++
    }
  }
 
  // Cria um valor randomico para as posições
  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  //Verifica se a posição é menor que 0
  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY= posicaoY < 0 ? 0 : posicaoY

  // Criar o elemento HTML
  const mosquito = document.createElement('img')
  mosquito.src = 'src/img/mosca.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function(){
    this.remove()
  }

  document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
  //Gera uma classe randomica
  const classe = Math.floor(Math.random() * 3)

  //toma a decisão de qual classe vai ser atribuida
  switch(classe){
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }

}

function ladoAleatorio(){
  //Gera uma classe randomica
  const classe = Math.floor(Math.random() * 2)

  // Toma a decisão de qual classe será atribuida
  switch(classe){
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }

}


let cronometro = setInterval(()=>{
  tempo -= 1
  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  }else{
    document.getElementById('cronometro').innerHTML = tempo;
  }
},1000)