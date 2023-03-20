let [computer_score,user_score] = [0,0];
let choices_obj = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
}
 
function checker(input) {
    let choices = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random() * 3);

    document.getElementById("comp_choice").innerHTML =
    `Computer choose <span> ${choices[num].toUpperCase()} </span>`;
    
    document.getElementById("user_choice").innerHTML = 
    `You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_obj[input][computer_choice]){
        case 'win':
            document.getElementById("result").style.cssText = "background-color: #cefdce; color: #689f38";
            document.getElementById("result").innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            document.getElementById("result").style.cssText = "background-color: #ffdde0; color: #d32f2f";
            document.getElementById("result").innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            document.getElementById("result").style.cssText = "background-color: #e5e5e5; color: #808080";
            document.getElementById("result").innerHTML = "DRAW";
            break;
    }

    
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;


}



