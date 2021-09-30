// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 13;
let seicretNumber =Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function (){
   const guess= Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
      document.querySelector('.message').textContent = 'No Number🔕';
    }
    // ---guess is correct--
     else if(guess===seicretNumber){
        document.querySelector('.message').textContent = 'Correct Number🎉';
        document.querySelector('.number').textContent = seicretNumber ;
        document.querySelector('body').style.backgroundColor = ' #60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent =score;
        if (score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }// ---guess is high-- 
    else if(guess > seicretNumber){

         if (score>1){
            document.querySelector('.message').textContent = 'Too High💹';
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'You Lost The Game'; 
            document.querySelector('.score').textContent = 0;
        }
        
    } // ---guess is low--
    else if(guess < seicretNumber){
        if (score>1){
            document.querySelector('.message').textContent = 'Too Low💹';
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'You Lost The Game'; 
            document.querySelector('.score').textContent = 0;
        }
    }

});

// -----reset----
document.querySelector('.again').addEventListener('click', function (){
    
   
     seicretNumber =Math.trunc(Math.random()*20)+1;
    score = 20;
  
    document.querySelector('.message').textContent = 'Start guessing...';
    
    document.querySelector('.score').textContent = score;
    
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

)