window.addEventListener('load',loaded)

//Global variables
var score = 0;
var isplaying;
var recentScore;
var time;
var samp;
var run;




var currentword = document.querySelector('#curwordarea');
var msgsection = document.querySelector('#msgsection');
var inputtext = document.querySelector('#inputtext');
var timedisplay = document.querySelector('#time');
var scoredisplay = document.querySelector('#score');
var highscore = document.querySelector('#highscore');


const words = ['new','JavaScript','Python','Java','Ruby','Kotlin','Pokemon','Avengers','Thor','Dr.Strange','IronMan','AntMan','Hulk Avenger']


var easy1 = document.querySelector('#Easy');
var medium1 = document.querySelector('#Medium');
var hard1 = document.querySelector('#Hard');
var reset1 = document.querySelector('#reset');

function loaded() {
    
    setwords(words);
    timedisplay.innerHTML = localStorage.getItem('runtim');
    time = localStorage.getItem('runtim');
    inputtext.addEventListener('input',startmatch);


    inputtext.addEventListener('click',setter);
    function setter(){
    setInterval(countdown,1000);
    setInterval(checkstatus,50);
    }
    
}

easy1.addEventListener('click',easy)
medium1.addEventListener('click',medium)
hard1.addEventListener('click',hard)
reset1.addEventListener('click',reset)





function easy(){
    msgsection.innerHTML=''
    localStorage.setItem('timer',7);
    time = localStorage.getItem('timer');
    timedisplay.innerHTML= time;
    samp = time;
    localStorage.setItem('runtim',7);
    window.location.reload(true);
}
function medium(){
    msgsection.innerHTML=''
    localStorage.setItem('timer',5);
    time = localStorage.getItem('timer');
    timedisplay.innerHTML= time;
    samp = time;
    localStorage.setItem('runtim',5);
    window.location.reload(true);
}
function hard(){
    msgsection.innerHTML=''
    localStorage.setItem('timer',3);
    time = localStorage.getItem('timer');
    timedisplay.innerHTML= time;
    samp = time;
    localStorage.setItem('runtim',3);
    window.location.reload(true);
}

function reset(){
    localStorage.setItem('score','');
    window.location.reload(true);
}


function setwords(words){
    var randIndex = Math.floor(Math.random()*words.length);
    currentword.innerHTML = words[randIndex];
}

function startmatch(){
   
    if(matchwords()){
        isplaying= true;
        time = localStorage.getItem('runtim');
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
}
highscore.innerHTML = localStorage.getItem('score');
