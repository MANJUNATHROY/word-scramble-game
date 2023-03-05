let jumbled=document.querySelector(".para");
let hinttext=document.querySelector(".hint span")
let timertext=document.querySelector(".time b")
let inputfield=document.querySelector("input")
console.log(inputfield)
let refreshbtn=document.querySelector(".refreshword")
let checkbtn=document.querySelector(".checkword")
let correctword,timer;

const currenttimer=maxtime=>{
    clearInterval(timer)
    timer=setInterval(()=>{
        if(maxtime>0){
            maxtime--;
            return timertext.innerText=maxtime;
        }
        clearInterval(timer)
        alert(`time out!!! ${correctword} is the correct word`)
        initGame();
    },1000)
}

const initGame = () => {
    currenttimer(30);
    let randomobj = words[Math.floor(Math.random() * words.length)];
    let wordarray=randomobj.word.split("");
    let hintarray=randomobj.hint.split("");
    for(let i=wordarray.length-1;i>0;i--){
        let j=Math.floor(Math.random() *(i+1));
        [wordarray[i],wordarray[j]]=[wordarray[j],wordarray[i]];
    }
    console.log(wordarray);
    console.log(randomobj.word)
    jumbled.innerText=wordarray.join("");
    hinttext.innerText=hintarray.join("");
    correctword=randomobj.word.toLowerCase();
    inputfield.value="";
    inputfield.setAttribute("maxlength",correctword.length)
    console.log(jumbled.innerText)
}

const checkWord=()=>{
    let typeword=inputfield.value.toLocaleLowerCase();
    if(!typeword) return alert("please enter a valid word")
    if(correctword==typeword){
        alert(`congrats ${typeword} is the correct word`)
        initGame();
    }
    else{
        alert(`oops ${typeword} is not a correct word`)
    }
   
}

initGame();
refreshbtn.addEventListener("click",initGame);
checkbtn.addEventListener("click",checkWord);