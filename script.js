let rollBtn = document.getElementById("rollBtn");
let result = document.getElementById("result");
let diceImages = document.getElementById("diceImages");
let values = [];
let images = [];

rollBtn.onclick = function(){
    let num = Math.floor(Math.random()*6) + 1;
    values.push(num);
    images.push(`<img src="./diceImg/${num}.svg">`);
    result.textContent = `${values.join(", ")}`;
    diceImages.innerHTML = `${images.join(" ")}`;
    if(images.length === 5){
        images.shift();
    }

}

