let order = [];
let clickedOrder = [];
let score = 0;


// 0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('blue');
const red = document.querySelector('red');
const green = document.querySelector('green');
const yellow = document.querySelector('yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.rondom() * 4);
    order [order.length]= colorOrder ;
    clickedOrder = [];

for(let i in order){

    let elementColor = createColorElement(order[i]);
    lightColor(elementColor,Number(i)+1);
}


}
//acebde proxima cor

let lightColor = (element,number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });

}

//checagem de botoes 

let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert('Pontuação: ${score}\nVoce acertou Iniciando proximo nivel!');
        nextLevel();
    }
}

//função para o click do usuario

let click = (color) => {
    clickedOrder[clickedOrder.length]= color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    

    }

    // função que retorna a cor

let createColorElement= (color)=>{
    if (color == 0){
        return green;
    }else if (color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue ;
    }
}

//função para proximo nivel

let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//função para game over

let lose = () =>{
    alert('Pontuação: ${score}!\nVoce Perdeu o jogo!\nClique em ok! para iniciar um novo jogo');
    order=[];
    clickedOrder=[];
    palygame();

}

// funçao inicio do jogo
let palygame = () =>{
    alert('bem vindo ao Genisis! Iniciando novo Jogo!');
    score=0;
    nextLevel();
}

green.onclick = () => clickedOrder(0);
red.onclick = () => clickedOrder(1);
yellow.onclick = () => clickedOrder(2);
blue.onclick = () => clickedOrder(3);

//inicio do jogo
palygame();