let boxValue = true;    

let button = document.getElementById("get");
let position = new Array(9).fill(null);
let boxVal;
let playerX;
let playerO;
let player1;
let player2;
function playerSelectionX(){
    player1 = document.getElementById("Player-1") 
    player2 = document.getElementById("Player-2")  
    if(player1.innerText == ""){
        player1.innerText = "X"
    }
    else{
        player2.innerText = "X"
    }
    console.log(`player1 ${player1.innerText}, player2 ${player2.innerText}`)
    playerX = document.getElementById("Player-X")
    playerX.style.display = "none";
}
// console.log(`player1 ${player1.innerText}, player2 ${player2.innerText}`)
function playerSelectionO(){
    player1 = document.getElementById("Player-1") 
    player2 = document.getElementById("Player-2")  
    if(player1.innerText == ""){
        player1.innerText = "O"
    }
    else{
        player2.innerText = "O"
    }
    console.log(`player1 ${player1.innerText}, player2 ${player2.innerText}`)
    playerO = document.getElementById("Player-O")
    playerO.style.display = "none";
    
}
// console.log(`player1 ${player1.innerText}, player2 ${player2.innerText}`)


function play(){
    document.getElementById("selectPlayer").style.display = "none";
    document.getElementById("gameBox").style.display = "flex";
    document.getElementById("playButton").style.display = "none";
    document.getElementById("Reset").style.display = "flex"
}



        // player vs player

// function to fill the values on the boxes. if the boxValue variable is true then "X" will be printed on the box
// else "O" will be printed on the box
function box(box){
    if(boxValue){
        boxVal = document.getElementById(box);
        console.log(player1);
        boxVal.innerText = player1.innerText;
        
        let i = Number(boxVal.getAttribute('class')); // i th box were stored in i
        position[i] = player1.innerText;    // clicking the box while true, X has been stored in the place of NULL (9*null array already exist in the name position)
        console.log(box +" "+ boxVal.innerText)

        //disabling the box editing once the box were filled
        boxVal.style.pointerEvents = "none";
        
    }
    else if(!boxValue){
        boxVal = document.getElementById(box);
        boxVal.innerText = player2.innerText;
        let i = Number(boxVal.getAttribute('class')); // i th box were stored in i
        position[i] = player2.innerText;    // clicking the box while false, X has been stored in the place of NULL (9*null array already exist in the name position)
        console.log(box +" "+ boxVal.innerText)

        //disabling the box editing once the box were filled
        boxVal.style.pointerEvents = "none";
    }  
    boxValue = !boxValue;
    Compare();
    console.log(position)
}   


                //player vs computer function starts 

// function box(box){
//     boxVal = document.getElementById(box);
//     console.log(player1);
//     boxVal.innerText = player1.innerText;    
//     let i = Number(boxVal.getAttribute('class')); // i th box were stored in i
//     position[i] = player1.innerText;    // clicking the box while true, X has been stored in the place of NULL (9*null array already exist in the name position)
//     console.log(box +" "+ boxVal.innerText)
//      //disabling the box editing once the box were filled
//     boxVal.style.pointerEvents = "none";
//     let rn = Math.floor(Math.random() * 9) + 1;   //randomNumber
//     let secondPlayer = document.getElementById(`box-${rn}`);
//     if(secondPlayer.innerText !== ""){
//         rn++;
//     }
//     else{
//         secondPlayer.innerText = player2.innerText;
//     }
//     secondPlayer.style.pointerEvents = "none";
// }                        //player vs computer function  ends
 



//function to compare the filled values on Boxex, If the filled values were organized in any stright line then the editing 
//functionality will be deative. and the winner has been shown in the h1 tag. after this winning any next empty boxes has been disabled. 

let result = document.getElementById("Result");

// winning combination array for the 3x3 box tic tac toe, every number on the array represents the box number.
let combination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function Compare(){

    //"for loop" to check the every winning combination
    for(let combo of combination){
        //checking with the every elements of the position array if "X". if a straight line occurs then the output will be "X has won" on screen.
        if(position[combo[0]] == "X" && position[combo[1]] == "X" && position[combo[2]] == "X"){
            result.innerText ="X has won";

            for(let i=1;i<=9;i++){
                let division = document.getElementById(`box-${i}`)
                //disabling
                division.style.pointerEvents = "none";
            }
            for(let c=0;c<combo.length;c++){
                // console.log(combo[c]);
                
                let color = document.getElementById(`box-${combo[c]+1}`);
                // console.log(color);
                color.style.backgroundColor = "red";
            }
            return
        }
        //checking with the every elements of the position array if "X". if a straight line occurs then the output will be "O has won" on screen.
        else if(position[combo[0]] == "O" && position[combo[1]] == "O" && position[combo[2]] == "O"){
        
            result.innerText = "O has won";
            //once the result will be occurs then make disable all the empty boxes
            for(let i=1;i<=9;i++){
                let division = document.getElementById(`box-${i}`)
                //disabling
                division.style.pointerEvents = "none";
            }
            //once the result will be occurs then the winning boxes turned red 
            for(let c=1;c<=9;c++){
                let color = document.getElementsByClassName(`${position[combo[c]]}`);
                if(color.innerText == "O"){
                    color.style.backgroundColor = "red";
                }
            }
            for(let c=0;c<combo.length;c++){
                // console.log(combo[c]);
                
                let color = document.getElementById(`box-${combo[c]+1}`);   
                // console.log(color);
                color.style.backgroundColor = "red";
            }
            return
        } 
        else if(!position.some(n => n===null)){
            result.innerText = "Draw";
        }  
    }
} 
function resetPage(){
    location.reload();
}
    
    