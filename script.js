const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumm  = document.querySelector('[data-final-column]')
const computerscorespan = document.querySelector('[data-computer-score]')
const yourscorespan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name:'rock',
        emoji:'✊',
        beats:'scissors'
    },
    {
        name:'paper',
        emoji:'✋',
        beats:'rock'
    },
    {
        name:'scissors',
        emoji:'✌',
        beats:'paper'
    }
]

selectionButtons.forEach(selectionButton=>{
    selectionButton.addEventListener('click',e=>{
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection=>selection.name === selectionName);
            makeselection(selection)
    })
})

function makeselection(selection){
    const computerSelection = randomSelection();
    const yourWinner = iswinner(selection, computerSelection);
    const computerWinner = iswinner(computerSelection,selection);
    //console.log(computerSelection, selection , computerWinner , yourWinner)
    
    addSelectionResult(computerSelection,computerWinner);
    addSelectionResult(selection,yourWinner);
    if(yourWinner)
    {
        incrementScore(yourscorespan)
    }
    if(computerWinner){
        incrementScore(computerscorespan)
    }

}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div');
    div.innerText =selection.emoji 
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumm.after(div);

}
function iswinner(selection, opponentSelction){
    console.log(selection.beats === opponentSelction.name)
    return selection.beats === opponentSelction.name
}

function randomSelection(){
   
    const randomIndex = Math.floor(Math.random()* SELECTIONS.length)
    return SELECTIONS[randomIndex];
}