const resultdiv=document.getElementById('result')
const scorediv=document.getElementById('player-score')
let RPSbtns=document.querySelectorAll('.RPSbtn')
RPSbtns.forEach(RPSbtn => {
    RPSbtn.onclick = () => onClickRPS(RPSbtn.value)
  })

function onClickRPS(playerchoice){
    compchoice=getcompchoice()
    score=result(playerchoice,compchoice)
    finalresult(score,playerchoice,compchoice)
    
}

function getcompchoice(){
    const choicesArr=['Rock','Paper','Sessior']
    let Choice=choicesArr[Math.floor(Math.random()*choicesArr.length)]
    return Choice
}
 function result(playerChoice,compchoice){
    let score
    if(playerChoice===compchoice){
        score=0
    }else if(playerChoice==='Rock' && compchoice==='Sessior'){
        score=1
    }else if(playerChoice==='Paper' && compchoice==='Rock'){
        score=1
    }else if(playerChoice==='Sessior' && compchoice==='Paper'){
        score=1
    }
    else{
        score=-1
    }
    return score
 }

 const finalresult=()=>{
    switch (score) {
        case -1:
            resultdiv.innerText='You Loss'
            break;
        case 0:
            resultdiv.innerText='Draw'
            break;
        case 1:
            resultdiv.innerText='You Win'
    }
    scorediv.innerText=`${Number(scorediv.innerText)+score}`

 }
 const reset=()=>{
    scorediv.innerText=''
    resultdiv.innerText=''
 }