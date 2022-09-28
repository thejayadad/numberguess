

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function (){
    let guess = document.querySelector(".guess").value;
    if(!guess){
        document.querySelector(".message").textContent = "No Number"
    } else if (guess == secretNumber){
        document.querySelector(".message").textContent = " Your Right!"
    } else if ( guess > secretNumber){
        score--
        document.querySelector(".score").textContent = score
        document.querySelector(".message").textContent = "Too High!"
    } else if (guess < secretNumber){
        document.querySelector(".message").textContent = "Too Low!"
        score--
        document.querySelector(".score").textContent = score

    }
})
