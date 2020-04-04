window.addEventListener('load',loaded)


//Global variables
var score = 0;
var isplaying;
var recentScore;
var time;
var samp;
var e1;
var h1;
var m1;



var currentword = document.querySelector('#curwordarea');
var msgsection = document.querySelector('#msgsection');
var inputtext = document.querySelector('#inputtext');
var timedisplay = document.querySelector('#time');
var scoredisplay = document.querySelector('#score');
var highscore = document.querySelector('#highscore');


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

if((m1!=1) && (h1!=1) && (e1!=1)){
    msgsection.innerHTML=''
    // var inputtext2 = document.getElementById('inputtext');
    time = localStorage.getItem('tempo');
    timedisplay.innerHTML= time;
    samp = time;
}

function easy(){
    if((m1==1)||(h1==1) || (e1==1)){
        localStorage.setItem('tempo',7);
        window.location.reload(true);
    }
    else{
    msgsection.innerHTML=''
    localStorage.setItem('timer',7);
    time = localStorage.getItem('timer');
    timedisplay.innerHTML= time;
    samp = time;
    e1=1;
    }
}
function medium(){
    if((m1==1)||(h1==1) || (e1==1)){
        localStorage.setItem('tempo',5);
        window.location.reload(true);
    }
    else{
    msgsection.innerHTML=''
    localStorage.setItem('timer',5);
    time = localStorage.getItem('timer');
    timedisplay.innerHTML= time;
    samp = time;
    m1=1;
    }
}
function hard(){
    if((m1==1)||(h1==1) || (e1==1)){
        localStorage.setItem('tempo',3);
        window.location.reload(true);
    }
    else{
    msgsection.innerHTML=''
    localStorage.setItem('timer',3);
    time = localStorage.getItem('timer');
    timedisplay.innerHTML= time;
    samp = time;
    h1=1;
    
    }
}
time = localStorage.getItem('timer');
function reset(){
    localStorage.setItem('score','');
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
}
highscore.innerHTML = localStorage.getItem('score');
