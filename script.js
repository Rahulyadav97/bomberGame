function startGame(){
let root = document.getElementById('root');
let points = document.getElementById('points');
let startGame= document.getElementById('start');
let bomberindexes = generateRandomNum( []);
console.log("here",bomberindexes);
let gameOver = false;
let score = 0;
for(let i=0;i<9;i++)
{
   let row = document.createElement('div');
row.style.height = "30px";
row.style.width = "200px;"
    for(let x=0;x<9;x++)
    {
    let currentIndex = i*9+x;
      let cell = document.createElement('div');
      cell.style.height = "30px";
      cell.style.width = "30px";
      cell.style.backgroundColor = "grey";
      cell.style.border="1px ridge lightgrey"
      cell.innerHTML = " ";
      cell.style.display="inline-block";
      cell.setAttribute("id",currentIndex);
      cell.addEventListener("click",()=>{
         // console.log(currentIndex);
          //cell.style.backgroundColor='blue';
          if(bomberindexes.includes(currentIndex))
          {
              gameOver = true;
              for(let d=0;d<10;d++)
              {
let  bomb = bomberindexes[d];
let bombNode = document.getElementById(bomb);
bombNode.style.backgroundColor="#ff1a1a";
//console.log(bomb);

startGame.style.display = "block";
startGame.addEventListener("click",()=>{
    location.reload();
})
              }
              //alert("you clicked bomb");
             // cell.style.backgroundColor="red"
              //cell.innerHTML=""

          }
          else if(gameOver!=true){
              if(cell.style.backgroundColor!="#47d147"){
              score++;
              points.innerHTML=score;
            cell.style.backgroundColor="#47d147"
              }
          }
         
      });
      row.appendChild(cell);
    }
    root.appendChild(row);
}

function generateRandomNum(bomberIndexes)
{
    let randomNumber = Math.ceil(Math.random()*81);
   
    if(bomberIndexes.length===10)
    {
        return bomberIndexes;
    }
    if(!bomberIndexes.includes(randomNumber))
    {
        bomberIndexes.push(randomNumber);
        generateRandomNum(bomberIndexes);
    }
    else{
        generateRandomNum(bomberIndexes);
    }
    
    console.log(bomberIndexes);
    return bomberIndexes;
}
}
startGame();