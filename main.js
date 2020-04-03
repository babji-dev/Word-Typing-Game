window.addEventListener('load',loaded)


//Global variables
var score = 0;
var isplaying;
var recentScore;
var time;
var samp;




var currentword = document.querySelector('#curwordarea');
var msgsection = document.querySelector('#msgsection');
var inputtext = document.querySelector('#inputtext');
var timedisplay = document.querySelector('#time');
var scoredisplay = document.querySelector('#score');
var highscore = document.querySelector('#highscore');
var inputtext2 = document.querySelector('#inputtext');

const words = ['new','JavaScript','Python','Java','Ruby','Kotlin','Pokemon','Avengers','Thor','Dr.Strange','IronMan','AntMan','Hulk Avenger']

function loaded() {
    setwords(words);

    inputtext.addEventListener('input',startmatch);
    //  inputtext.addEventListener('input',startmatch);
    inputtext.addEventListener('click',setter);
    function setter(){
    setInterval(countdown,1000);
    setInterval(checkstatus,50);
    }
    
}

var easy1 = document.querySelector('#Easy');
var medium1 = document.querySelector('#Medium');
var hard1 = document.querySelector('#Hard');
var reset1 = document.querySelector('#reset');

easy1.addEventListener('click',easy)
medium1.addEventListener('click',medium)
hard1.addEventListener('click',hard)
reset1.addEventListener('click',reset)


time = 0;
    timedisplay.innerHTML= time;
    samp = time;

function easy(){

    msgsection.innerHTML=''
    time = 7;
    timedisplay.innerHTML= time;
    samp = time;
}
function medium(){
    msgsection.innerHTML=''
    time = 4;
    timedisplay.innerHTML= time;
    samp = time;
}
function hard(){
    msgsection.innerHTML=''
    time = 3;
    timedisplay.innerHTML= time;
    samp = time;
}
function reset(){
    localStorage.clear();
    location.reload();
}

function setwords(words){
    var randIndex = Math.floor(Math.random()*words.length);
    currentword.innerHTML = words[randIndex];
}

function startmatch(){
    if(matchwords()){
        isplaying= true;
        time = samp;
        setwords(words);
        inputtext.value='';
        score++;
    }
    //some code is there

    if(score === -1){
        scoredisplay.innerHTML = 0;
    }
    else{
        scoredisplay.innerHTML=score;
    }
}

function matchwords(){
    if(currentword.innerHTML === inputtext.value){
        isplaying=true;
        return true;
    }
    else
    {
        isplaying=false;
        return false;
    }
}

function countdown(){
    if(time>0){
        time--;
    }
    else if(time === 0){
        msgsection.innerHTML='GameOver !!!!'
        if(score>localStorage.getItem('score'))
        {
            localStorage.setItem('score',score);
        }
        score=-1;
        inputtext.value = ''; 
    }
    timedisplay.innerHTML= time;
}

function checkstatus(){
    if( !isplaying && time===0){
        msgsection.innerHTML='GameOver !!!';
        if(score>localStorage.getItem('score'))
        {
            localStorage.setItem('score',score);
        }
        score=-1;
    }
    if(msgsection.innerHTML === 'GameOver !!!'){
            location.reload();
    }
}
highscore.innerHTML = localStorage.getItem('score');


