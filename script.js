// fizz buzz
function landScapeCheck(){
    let w = window.screen.width;
    let h = window.screen.height;
    let resulte = (w>=h);
    return resulte;
}

console.log(landScapeCheck()); 

function fizzBuzz(x){
    let isNumber = Number.isFinite(x);
    let numberOn3 = ((x%3)===0);
    let numberOn5 = ((x%5)===0);
    if (!numberOn3&&!numberOn5&&isNumber) return x;
    if (numberOn3&&numberOn5) return 'fizzBuzz'
    if(numberOn3) return 'fizz';
    if (numberOn5) return 'buzz';
    if(!isNumber)return 'is not a number';
};
let = userNumber = prompt('inter a number')
console.log(fizzBuzz(userNumber));

document.addEventListener('keydown',(e)=>{
    let name = e.key;
    if(name=='r'||name=='R'){
        userNumber = prompt('inter a number')
        console.log(fizzBuzz(userNumber));
    }
})