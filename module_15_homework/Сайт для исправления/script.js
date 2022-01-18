let minValue = parseInt(prompt('Минимальное знание числа для игры','0'))

   minValue = minValue || 0; 
   function enteMin (){
        if (minValue > -1000) {
            return minValue
        } else
           if (minValue < -1000)
         {
            return -999
        }
    };
   minValue = enteMin ();

let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'))

    maxValue = maxValue || 100; 
    function enteMax (){
        if (maxValue < 1000) {
            return maxValue
        } else
           if (maxValue > 1000)
         {
            return 999
        }
    };
   maxValue = enteMax ();

//maxValue = (maxValue < 1000)? maxValue : 999 ;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2); 
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText =`Ваше число ${(answerNumber)} ?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let messages1 = [ [`Вы загадали число ${answerNumber}?`], [ `Наверное, это число ${answerNumber}?`],
            [ `А, может быть, число ${answerNumber}?`]];
            let message1  = messages1 [Math.round(Math.random() * 2)];
            answerField.innerText = message1 [0];
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let messages2 = [ [`Вы загадали число ${answerNumber}?`], [`Наверное, это число ${answerNumber}?`],
            [ `А, может быть, число ${answerNumber}?`]];
            let message2  = messages2 [Math.round(Math.random() * 2)];
            answerField.innerText = message2 [0];
        }
    }
})


  document.getElementById('btnEqual').addEventListener('click', function () {
    let quotes  =  [[ `Разгадал число \n\u{1F600}`], [`Я всегда угадываю\n\u{1F600}`],
    [`Победа\n\u{1F600}`]]; 
    let quote = quotes[ Math.floor( Math.random() * quotes.length )];
        
        answerField.innerText = quote[0];       
        gameRun = false;
       })

document.querySelector('#btnRetry').onclick=function reset() {
   location.reload();
 }
 $(document).ready(function(){ //Лишнее
    $("#myModal").modal('show');
});
