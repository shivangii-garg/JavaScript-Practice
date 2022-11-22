let location1 = 1;
let location2 = 2;
let location3 = 3;

let chances = 0; 
let hits = 0;
let sunk = false;

while (sunk != true)
{
    let guess = prompt("Ready, Aim, Fire! (Enter a number between 0 and 6)");
    if(guess < 0 || guess > 6){
        alert("Invalid Guess!")
            }
    else {
        chances++;
        if(guess == location1 || guess == location2 || guess == location3){
            hits++
            {
                if(hits == 3)
                {
                    sunk = true;
                    alert("You sank my battleship!!")
                }
            }
        }
    }
}

alert("Score: " + chances);

